import { FaEye, FaBullseye, FaUserTie, FaBuilding, FaUniversity } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const leadership = [
  { name: 'President', designation: 'President', message: 'Leading the institution towards excellence in education and holistic development.' },
  { name: 'Vice-President', designation: 'Vice-President', message: 'Committed to creating opportunities for women through quality education.' },
  { name: 'Secretary', designation: 'Secretary', message: 'Ensuring administrative excellence and institutional growth.' },
  { name: 'Principal', designation: 'Principal', message: 'Fostering academic rigor and nurturing talent in every student.' },
];

const institutions = [
  'SSKV College of Arts & Science for Women',
  'SSKV Higher Secondary School',
  'SSKV Matriculation School',
  'SSKV Primary School',
  'SSKV Nursery & Primary School',
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About SSKV College"
        subtitle="A legacy of empowering women through education in the heart of Kanchipuram"
        height="medium"
        breadcrumb="About Us"
      />

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 text-sm font-semibold rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                Genesis & Growth
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                SSKV College of Arts and Science for Women was established with a noble vision of
                providing quality higher education to women in Kanchipuram and surrounding areas.
                Located in Kilambi, Kanchipuram, the college has grown to become a trusted institution
                offering diverse academic programs.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Affiliated to the prestigious University of Madras, our college follows the Choice Based
                Credit System (CBCS) and offers 11 undergraduate programs spanning Arts, Science,
                Commerce, and Professional streams. Our institution is part of a group of 5 educational
                institutions under a single dedicated management.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                With 70+ experienced faculty members, modern infrastructure, and a commitment to
                holistic development, SSKV College continues to shape confident, skilled, and socially
                responsible women leaders.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center shadow-2xl">
                  <div className="text-center text-white p-8">
                    <FaUniversity className="text-7xl text-accent-400 mx-auto mb-6" />
                    <p className="text-xl font-heading font-bold">University of Madras</p>
                    <p className="text-white/60 mt-2">Affiliated Institution</p>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-3xl font-bold text-accent-400">11</p>
                      <p className="text-white/60 text-sm">Academic Programs</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-400/20 rounded-2xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-accent-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Vision & Mission" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0}>
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-accent-400 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center mb-5">
                  <FaEye className="text-2xl text-accent-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 font-heading mb-4">Our Vision</h3>
                <p className="text-neutral-600 leading-relaxed">
                  To empower women through quality education, fostering academic excellence,
                  ethical values, and holistic development, enabling them to become leaders and
                  contribute meaningfully to society.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-700 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <FaBullseye className="text-2xl text-primary-700" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 font-heading mb-4">Our Mission</h3>
                <ul className="space-y-3 text-neutral-600">
                  <li className="flex gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    Provide accessible, quality higher education for women
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    Promote research aptitude and innovative thinking
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    Develop employable skills through industry collaborations
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    Instill ethical values and social responsibility
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    Foster holistic development through co-curricular activities
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="container-custom mx-auto">
          <SectionHeading title="Our Leadership" subtitle="Guided by experienced administrators committed to educational excellence" light />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <AnimatedSection key={leader.designation} delay={index * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mx-auto mb-4">
                    <FaUserTie className="text-2xl text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading">{leader.designation}</h3>
                  <p className="text-white/60 text-sm mt-3 leading-relaxed">{leader.message}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Group of Institutions */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Group of Institutions"
            subtitle="5 educational institutions under one trusted management"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {institutions.map((inst, index) => (
              <AnimatedSection key={inst} delay={index * 0.08}>
                <div className="flex items-center gap-4 p-5 rounded-xl bg-neutral-50 hover:bg-accent-50 transition-colors duration-300 border border-neutral-100">
                  <div className="w-12 h-12 rounded-lg bg-primary-700 flex items-center justify-center flex-shrink-0">
                    <FaBuilding className="text-white" />
                  </div>
                  <p className="font-semibold text-primary-800 text-sm">{inst}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Be Part of Our Legacy?"
        subtitle="Join thousands of women who have built successful careers starting at SSKV College."
      />
    </>
  );
}
