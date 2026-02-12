import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaYoutube, FaInstagram } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import ContactForm from '../components/sections/ContactForm';
import { COLLEGE_INFO } from '../utils/constants';
import { images } from '../data/media';

const contactCards = [
  {
    icon: FaMapMarkerAlt,
    title: 'Visit Us',
    details: [COLLEGE_INFO.name, COLLEGE_INFO.location],
    color: '#382e27',
  },
  {
    icon: FaPhone,
    title: 'Call Us',
    details: COLLEGE_INFO.phone,
    color: '#2ecc71',
  },
  {
    icon: FaEnvelope,
    title: 'Email Us',
    details: COLLEGE_INFO.email,
    color: '#e07830',
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you — reach out with any questions"
        height="medium"
        breadcrumb="Contact"
        bannerImage={images.contact.banner}
      />

      {/* Contact Cards */}
      <section className="section-padding bg-white pb-10">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto -mt-20 relative z-10">
            {contactCards.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300 border border-neutral-100">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${card.color}15` }}
                  >
                    <card.icon className="text-xl" style={{ color: card.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-primary-800 font-heading mb-2">{card.title}</h3>
                  {card.details.map((detail, i) => (
                    <p key={i} className="text-neutral-600 text-sm">{detail}</p>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding bg-white pt-10">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold text-primary-800 font-heading mb-2">Send Us a Message</h2>
              <p className="text-neutral-500 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
              <ContactForm />
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold text-primary-800 font-heading mb-2">Find Us</h2>
              <p className="text-neutral-500 mb-8">Located in the heart of Kanchipuram, easily accessible by road.</p>
              <div className="rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[400px] bg-neutral-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1!2d79.69!3d12.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c8a0b0b0b0b%3A0x0!2sKanchipuram!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SSKV College Location"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Social & Info */}
      <section className="section-padding bg-primary-900">
        <div className="container-custom mx-auto text-center">
          <SectionHeading title="Connect With Us" subtitle="Follow us for the latest updates and events" light />
          <div className="flex justify-center gap-4 mb-8">
            <a
              href={COLLEGE_INFO.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center hover:bg-red-600 transition-all duration-300 text-white text-xl"
            >
              <FaYoutube />
            </a>
            <a
              href={COLLEGE_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-all duration-300 text-white text-xl"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/50 text-sm">
            <FaClock />
            <span>Office Hours: Monday - Saturday, 9:00 AM - 5:00 PM</span>
          </div>
        </div>
      </section>
    </>
  );
}
