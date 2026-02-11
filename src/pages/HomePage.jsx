import { motion } from 'framer-motion';
import { FaGraduationCap, FaChalkboardTeacher, FaHandshake, FaStar, FaArrowRight } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import Button from '../components/shared/Button';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import Card from '../components/shared/Card';
import Marquee from '../components/shared/Marquee';
import StatsBar from '../components/sections/StatsBar';
import DepartmentGrid from '../components/sections/DepartmentGrid';
import EventsTimeline from '../components/sections/EventsTimeline';
import CTABanner from '../components/sections/CTABanner';
import VideoEmbed from '../components/sections/VideoEmbed';
import { events } from '../data/events';

const features = [
  {
    icon: FaGraduationCap,
    title: 'Quality Education',
    description: 'Affiliated to University of Madras with UGC-recognized programs following CBCS curriculum.',
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Experienced Faculty',
    description: '70+ dedicated faculty members with extensive academic and industry experience.',
  },
  {
    icon: FaHandshake,
    title: 'Industry Connections',
    description: '5 active MOUs with industry partners ensuring real-world exposure and placement opportunities.',
  },
  {
    icon: FaStar,
    title: 'Holistic Development',
    description: 'NCC, NSS, sports, cultural clubs, and value-added courses for all-round personality growth.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="SSKV College of Arts & Science for Women"
        subtitle="Empowering Women Through Quality Education — Affiliated to University of Madras, Kanchipuram"
        height="full"
      >
        <Button variant="gold" size="lg" href="/academics" icon={FaGraduationCap}>
          Explore Programs
        </Button>
        <Button variant="outline" size="lg" href="/admissions">
          Apply Now
        </Button>
      </Hero>

      {/* Event Marquee */}
      <Marquee items={events.slice(0, 5)} />

      {/* Welcome Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 text-sm font-semibold rounded-full mb-4">
                Welcome to SSKV
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
                Shaping Future Leaders Since Inception
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                SSKV College of Arts and Science for Women, located in the historic city of Kanchipuram,
                is dedicated to providing quality higher education for women. Affiliated to the prestigious
                University of Madras, we offer a diverse range of undergraduate programs across Arts,
                Science, Commerce, and Professional streams.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                With a commitment to academic excellence, holistic development, and women&apos;s empowerment,
                our institution nurtures students to become confident, skilled, and socially responsible citizens.
              </p>
              <Button variant="primary" href="/about" icon={FaArrowRight}>
                Learn More About Us
              </Button>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 flex items-center justify-center shadow-2xl">
                  <div className="text-center text-white p-8">
                    <FaGraduationCap className="text-6xl text-accent-400 mx-auto mb-4" />
                    <p className="text-2xl font-heading font-bold">5 Institutions</p>
                    <p className="text-white/60 mt-2">Under One Trusted Management</p>
                  </div>
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-400/20 rounded-2xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Programs Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Academic Programs"
            subtitle="Choose from 11 undergraduate programs designed to prepare you for a successful career"
          />
          <DepartmentGrid limit={8} />
          <div className="text-center mt-10">
            <Button variant="outline-dark" href="/academics" icon={FaArrowRight}>
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose SSKV */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Why Choose SSKV"
            subtitle="Discover what makes us a preferred choice for women's higher education"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <Card
                  variant="feature"
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Video */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Campus Life"
            subtitle="Take a glimpse into the vibrant life at SSKV College"
          />
          <VideoEmbed />
        </div>
      </section>

      {/* Events */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Stay updated with the latest happenings at SSKV College"
          />
          <div className="max-w-3xl mx-auto">
            <EventsTimeline limit={5} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
