import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, BookOpen, Truck, Home as HomeIcon, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Left-to-right gradient overlay for text readability */}
      <div className="absolute inset-0"
           style={{
             background: 'linear-gradient(90deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.75) 40%, rgba(15,23,42,0.2) 70%, rgba(15,23,42,0) 100%)'
           }} />

      {/* Layered gradients: navy left + dark bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/20" />

      {/* Decorative gold accent line */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-gold/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 section-container w-full pt-28 pb-20">
        <div className="max-w-2xl">

          {/* College name — large, elegant, uppercase, strong contrast */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl text-white uppercase
                       tracking-wide sm:tracking-normal mb-6
                       drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.35), 0 0 1px rgba(0,0,0,0.5)' }}
          >
            FAITH CHRISTIAN COLLEGE
          </motion.p>

          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2.5 bg-gold/15 border border-gold/40 text-gold
                       text-xs font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm uppercase tracking-wider font-heading"
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            2026 Intake Now Open — Limited Places
          </motion.div>

          {/* Heading — Poppins, increased letter spacing */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white
                       leading-[1.05] mb-6 tracking-wide"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            Shaping
            <span className="block text-gold drop-shadow-lg mt-1">Champions</span>
            <span className="block text-white/95 text-4xl sm:text-5xl font-bold mt-1">
              Through Faith
            </span>
          </motion.h1>

          {/* Subtext — UI, Poppins */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="font-heading text-xl text-white/85 mb-4 tracking-widest font-medium"
          >
            Preschool &bull; Primary &bull; High School
          </motion.p>

          {/* Paragraph — Inter */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="font-sans text-white/90 text-base sm:text-lg leading-relaxed max-w-lg mb-10"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.25)' }}
          >
            A premier Christian academy in Bulawayo offering Cambridge &amp; ZIMSEC curricula,
            boarding facilities, transport, and reduced fees for 2026.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 text-white text-base font-heading justify-center text-left sm:text-center"
          >
            <span className="flex items-center justify-start sm:justify-center gap-2">
              <BookOpen size={20} className="text-gold flex-shrink-0" />
              Cambridge Curriculum
            </span>
            <span className="flex items-center justify-start sm:justify-center gap-2">
              <CheckCircle size={20} className="text-gold flex-shrink-0" />
              ZIMSEC Registered
            </span>
            <span className="flex items-center justify-start sm:justify-center gap-2">
              <HomeIcon size={20} className="text-gold flex-shrink-0" />
              Boarding Facilities
            </span>
            <span className="flex items-center justify-start sm:justify-center gap-2">
              <Truck size={20} className="text-gold flex-shrink-0" />
              School Transport
            </span>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-14 flex flex-wrap gap-8"
          >
            {[
              { label: 'ECD — A Level', sub: 'All levels covered' },
              { label: 'Cambridge & ZIMSEC', sub: 'Dual curriculum' },
              { label: 'Boarding Available', sub: 'On-campus housing' },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 border-gold pl-4">
                <p className="text-white font-semibold text-sm">{stat.label}</p>
                <p className="text-white/50 text-xs mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
