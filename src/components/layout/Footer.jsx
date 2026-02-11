import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { navLinks } from '../../data/navigation';
import { departments } from '../../data/departments';
import { COLLEGE_INFO } from '../../utils/constants';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Gold accent line */}
      <div className="h-1 bg-accent-400" />

      <div className="section-padding pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Column 1: About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-900 font-heading font-bold text-lg">S</span>
                </div>
                <div>
                  <div className="font-heading font-bold text-lg leading-tight">SSKV College</div>
                  <div className="text-white/60 text-xs">Arts & Science for Women</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Empowering women through quality education since our inception. Affiliated to the University of Madras, offering diverse programs in Arts, Science, and Commerce.
              </p>
              <div className="flex gap-3">
                <a
                  href={COLLEGE_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent-400 hover:text-primary-900 transition-all duration-300"
                >
                  <FaYoutube />
                </a>
                <a
                  href={COLLEGE_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent-400 hover:text-primary-900 transition-all duration-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-accent-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Departments */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Departments</h3>
              <ul className="space-y-2">
                {departments.slice(0, 6).map((dept) => (
                  <li key={dept.id}>
                    <Link
                      to="/academics"
                      className="text-white/60 hover:text-accent-400 transition-colors text-sm"
                    >
                      {dept.degree}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/academics" className="text-accent-400 text-sm font-semibold hover:text-accent-300 transition-colors">
                    View All Programs →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm">
                  <FaMapMarkerAlt className="text-accent-400 mt-1 flex-shrink-0" />
                  <span className="text-white/60">{COLLEGE_INFO.name}, {COLLEGE_INFO.location}</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <FaPhone className="text-accent-400 mt-1 flex-shrink-0" />
                  <span className="text-white/60">{COLLEGE_INFO.phone.join(' / ')}</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <FaEnvelope className="text-accent-400 mt-1 flex-shrink-0" />
                  <div className="text-white/60">
                    {COLLEGE_INFO.email.map((email) => (
                      <a key={email} href={`mailto:${email}`} className="block hover:text-accent-400 transition-colors">
                        {email}
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-4 md:px-8">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} {COLLEGE_INFO.shortName}. All rights reserved.</p>
          <p>Affiliated to {COLLEGE_INFO.affiliation}</p>
        </div>
      </div>
    </footer>
  );
}
