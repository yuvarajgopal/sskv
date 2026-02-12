import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClipboardCheck, FaDownload, FaFileAlt, FaCheckCircle, FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import Button from '../components/shared/Button';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import { departments } from '../data/departments';
import { COLLEGE_INFO } from '../utils/constants';
import { images } from '../data/media';

const steps = [
  { icon: FaClipboardCheck, title: 'Check Eligibility', description: 'Review program requirements and ensure you meet the eligibility criteria.' },
  { icon: FaDownload, title: 'Get Application', description: 'Download the application form or collect it from the college office.' },
  { icon: FaFileAlt, title: 'Submit Application', description: 'Submit completed application with all required documents.' },
  { icon: FaCheckCircle, title: 'Confirmation', description: 'Receive admission confirmation and complete fee payment.' },
];

const documents = [
  '10th & 12th Mark Sheets (Originals + Copies)',
  'Transfer Certificate (TC)',
  'Community Certificate',
  'Passport-size Photographs (6 copies)',
  'Aadhar Card (Copy)',
  'Migration Certificate (if applicable)',
];

const faqs = [
  {
    q: 'What is the eligibility for B.Sc. Computer Science?',
    a: 'Candidates must have completed +2 with Mathematics or Computer Science as a subject from a recognized board.',
  },
  {
    q: 'Is there a Shift II option available?',
    a: 'Yes, Shift II (evening) programs are available for B.Sc. Computer Science, BCA, and B.Com (General).',
  },
  {
    q: 'When do admissions typically open?',
    a: 'Admissions usually open in May-June each year. Please contact the admissions office for exact dates.',
  },
  {
    q: 'Is hostel facility available?',
    a: 'Please contact the college administration for current hostel and accommodation information.',
  },
  {
    q: 'What placement support does the college offer?',
    a: 'Our Placement Cell actively conducts on-campus recruitment drives with a 60% placement rate. Students receive training in aptitude, communication, and technical skills.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 transition-colors"
        >
          <span className="font-semibold text-primary-800 text-sm pr-4">{faq.q}</span>
          <FaChevronDown className={`text-accent-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 pt-4">
                {faq.a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export default function AdmissionsPage() {
  return (
    <>
      <Hero
        title="Admissions 2026–2027"
        subtitle="Your journey to a brighter future starts here"
        height="medium"
        breadcrumb="Admissions"
        bannerImage={images.admissions.banner}
      >
        <Button variant="gold" size="lg">
          Download Application Form
        </Button>
      </Hero>

      {/* Admission Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Admission Process"
            subtitle="Follow these simple steps to begin your journey at SSKV College"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.15}>
                <div className="relative text-center p-6">
                  {/* Step number */}
                  <div className="w-16 h-16 rounded-full bg-accent-400 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <step.icon className="text-2xl text-primary-900" />
                  </div>
                  <span className="absolute top-4 right-1/2 translate-x-[52px] text-xs font-bold text-accent-600 bg-accent-50 px-2 py-0.5 rounded-full">
                    Step {index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-primary-800 font-heading mb-2">{step.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>

                  {/* Connector line (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-accent-200" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Programs & Eligibility */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Programs & Eligibility"
            subtitle="Find the right program that matches your interests and career goals"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {departments.map((dept, index) => (
              <AnimatedSection key={dept.id} delay={index * 0.05}>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300 flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${dept.color}15` }}
                  >
                    <dept.icon className="text-lg" style={{ color: dept.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-primary-800 text-sm">{dept.degree}</h3>
                    <div className="flex flex-wrap gap-3 mt-1.5 text-xs text-neutral-500">
                      <span>{dept.duration}</span>
                      <span>•</span>
                      <span>{dept.eligibility}</span>
                      {dept.shifts && (
                        <>
                          <span>•</span>
                          <span className="text-accent-600 font-medium">{dept.shifts.join(' & ')}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold text-primary-800 font-heading mb-6">Documents Required</h2>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50">
                    <FaCheckCircle className="text-accent-400 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 border border-accent-200">
                <h3 className="text-2xl font-bold text-primary-800 font-heading mb-4">
                  Contact Admissions
                </h3>
                <p className="text-neutral-600 mb-6">
                  Have questions about admissions? Our team is here to help you through every step of the process.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-400 flex items-center justify-center">
                      <FaPhone className="text-primary-900" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500">Phone</div>
                      <div className="font-semibold text-primary-800 text-sm">{COLLEGE_INFO.phone.join(' / ')}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-400 flex items-center justify-center">
                      <FaEnvelope className="text-primary-900" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500">Email</div>
                      <div className="font-semibold text-primary-800 text-sm">{COLLEGE_INFO.email[1]}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="primary" size="md" href="/contact">
                    Send an Inquiry
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about admissions at SSKV College"
          />
          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
