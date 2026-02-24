import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Home',       path: '/' },
  { name: 'About',      path: '/about' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Contact',    path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const location                = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy/97 backdrop-blur-md shadow-2xl py-2' : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative">
            <img
              src="/images/logo.jpg"
              alt="Faith Christian College"
              className="h-11 w-11 object-contain rounded-full ring-2 ring-gold/40 group-hover:ring-gold transition-all duration-300"
            />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-white text-sm">Faith Christian</p>
            <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-medium">College</p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  active ? 'text-gold' : 'text-white/85 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-gold rounded-full transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            )
          })}
          <Link to="/admissions" className="btn-primary text-sm py-2.5 px-6">
            Apply Now
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy border-t border-white/10 overflow-hidden"
          >
            <div className="section-container py-5 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-3 px-5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-gold text-navy font-semibold'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/admissions" className="btn-primary text-center mt-2">
                Apply Now — 2026 Intake
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
