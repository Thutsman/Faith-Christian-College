import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'

const QUICK_LINKS = [
  { name: 'Home',            path: '/' },
  { name: 'About Us',        path: '/about' },
  { name: 'Admissions',      path: '/admissions' },
  { name: 'Contact Us',      path: '/contact' },
]

const PROGRAMS = [
  { name: 'ECD / Preschool',  sub: 'ECD A & B' },
  { name: 'Primary School',   sub: 'Grade 1 – 7' },
  { name: 'High School',      sub: 'Form 1 – 6' },
  { name: 'A Level',          sub: 'Cambridge & ZIMSEC' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Gold accent top-line */}
      <div className="h-[3px] bg-gradient-to-r from-gold via-gold/50 to-transparent" />

      <div className="section-container pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.jpg"
                alt="Faith Christian College"
                className="h-16 w-16 object-contain rounded-full ring-2 ring-gold/35"
              />
              <div>
                <h3 className="font-bold text-xl text-white leading-tight">Faith Christian</h3>
                <p className="text-gold text-xs tracking-[0.2em] uppercase">College</p>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Nurturing excellence through faith, academic achievement, and holistic character
              formation in Bulawayo, Zimbabwe.
            </p>
            <a
              href="https://wa.me/263777202035"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366]/15 border border-[#25D366]/30
                         text-[#25D366] text-sm font-medium px-4 py-2.5 rounded-full
                         hover:bg-[#25D366]/25 transition-colors"
            >
              <span>💬</span> WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold mb-5 text-xs uppercase tracking-[0.18em]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.path}
                    className="text-white/60 hover:text-gold transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold/50 rounded-full" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-gold mb-5 text-xs uppercase tracking-[0.18em]">
              Programs
            </h4>
            <ul className="space-y-3">
              {PROGRAMS.map((p) => (
                <li key={p.name}>
                  <p className="text-white/80 text-sm font-medium">{p.name}</p>
                  <p className="text-white/40 text-xs">{p.sub}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gold mb-5 text-xs uppercase tracking-[0.18em]">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <a href="tel:+263777202035" className="text-white/70 hover:text-gold transition-colors text-sm">
                  0777 202 035
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@faithchristiancollege.ac.zw"
                  className="text-white/70 hover:text-gold transition-colors text-sm break-all leading-snug"
                >
                  info@faithchristiancollege.ac.zw
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="http://www.faithchristiancollege.ac.zw"
                  className="text-white/70 hover:text-gold transition-colors text-sm"
                >
                  www.faithchristiancollege.ac.zw
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm leading-snug">
                  9 Livingstone Road,<br />Suburbs, Bulawayo
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            &copy; {new Date().getFullYear()} Faith Christian College. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            9 Livingstone Road, Suburbs, Bulawayo, Zimbabwe
          </p>
        </div>
      </div>
    </footer>
  )
}
