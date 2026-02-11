import { FaBookOpen, FaLightbulb, FaCertificate, FaMusic, FaDrum, FaPaintBrush, FaLaptop, FaChartBar, FaUsers } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import Card from '../components/shared/Card';
import DepartmentGrid from '../components/sections/DepartmentGrid';
import CTABanner from '../components/sections/CTABanner';

const highlights = [
  {
    icon: FaBookOpen,
    title: 'CBCS Curriculum',
    description: 'Choice Based Credit System aligned with University of Madras standards for flexible learning.',
  },
  {
    icon: FaLightbulb,
    title: 'Value-Added Courses',
    description: '7 specialized courses including music, arts, and silambam for holistic skill development.',
  },
  {
    icon: FaUsers,
    title: 'Industry-Academia Collaboration',
    description: '5 MOUs with industry partners providing real-world exposure and training opportunities.',
  },
];

const valueAddedCourses = [
  { icon: FaMusic, title: 'Music', description: 'Traditional and contemporary music training to develop artistic expression.', color: '#e74c3c' },
  { icon: FaPaintBrush, title: 'Arts & Crafts', description: 'Creative arts programs fostering imagination and fine motor skills.', color: '#3498db' },
  { icon: FaDrum, title: 'Silambam', description: 'Traditional martial arts training promoting physical fitness and discipline.', color: '#2ecc71' },
  { icon: FaLaptop, title: 'Computer Skills', description: 'Practical computing skills for the digital world.', color: '#9b59b6' },
  { icon: FaChartBar, title: 'Tally & Accounting', description: 'Professional accounting software training for commerce students.', color: '#e67e22' },
  { icon: FaCertificate, title: 'Soft Skills', description: 'Communication, leadership, and personality development training.', color: '#1abc9c' },
];

const facilities = [
  { title: 'College Library', description: 'Well-stocked library with thousands of books, journals, and digital resources.' },
  { title: 'Computer Labs', description: 'Modern computer laboratories with latest hardware and software for hands-on learning.' },
  { title: 'Smart Classrooms', description: 'Technology-enabled classrooms with projectors and interactive teaching aids.' },
  { title: 'Internet Connectivity', description: 'High-speed internet access across campus for research and learning.' },
];

export default function AcademicsPage() {
  return (
    <>
      <Hero
        title="Academic Programs"
        subtitle="11 undergraduate programs across Arts, Science, Commerce, and Professional streams"
        height="medium"
        breadcrumb="Academics"
      />

      {/* All Departments */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Our Programs"
            subtitle="Explore our diverse range of academic programs designed for career success"
          />
          <DepartmentGrid showFilter={true} />
        </div>
      </section>

      {/* Academic Highlights */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="container-custom mx-auto">
          <SectionHeading title="Academic Excellence" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <Card
                  variant="feature"
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Shift II Programs */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Shift II Programs"
            subtitle="Flexible evening programs for working students and those seeking additional schedule options"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { degree: 'B.Sc. Computer Science', color: '#2ecc71' },
              { degree: 'BCA', color: '#1abc9c' },
              { degree: 'B.Com (General)', color: '#e67e22' },
            ].map((program, index) => (
              <AnimatedSection key={program.degree} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center border-t-4" style={{ borderColor: program.color }}>
                  <div className="inline-block px-3 py-1 bg-accent-50 text-accent-700 text-xs font-semibold rounded-full mb-3">
                    Shift II Available
                  </div>
                  <h3 className="text-lg font-bold text-primary-800 font-heading">{program.degree}</h3>
                  <p className="text-neutral-500 text-sm mt-2">3 Year Program • Evening Session</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Value-Added Courses */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Value-Added Courses"
            subtitle="Beyond academics — programs designed to develop well-rounded individuals"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {valueAddedCourses.map((course, index) => (
              <AnimatedSection key={course.title} delay={index * 0.08}>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-neutral-50 hover:shadow-md transition-all duration-300">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${course.color}15` }}
                  >
                    <course.icon className="text-xl" style={{ color: course.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-800 text-sm">{course.title}</h3>
                    <p className="text-neutral-500 text-sm mt-1 leading-relaxed">{course.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Academic Facilities" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {facilities.map((facility, index) => (
              <AnimatedSection key={facility.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent-400">
                  <h3 className="text-lg font-bold text-primary-800 font-heading mb-2">{facility.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{facility.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Begin Your Academic Journey?"
        subtitle="Explore our programs and find the perfect path for your career goals."
      />
    </>
  );
}
