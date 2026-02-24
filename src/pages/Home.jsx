import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Bus, Home as HomeIcon, DollarSign, BookOpen,
  Users, Award, ArrowRight,
} from 'lucide-react'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import GalleryGrid from '../components/GalleryGrid'

const FEATURES = [
  {
    icon: Bus,
    title: 'Transport Available',
    description: 'Safe and reliable school transport covering key routes in and around Bulawayo, ensuring safe commutes for all students.',
  },
  {
    icon: HomeIcon,
    title: 'Boarding Facilities',
    description: 'Comfortable, supervised boarding houses providing a safe home-away-from-home for students across Zimbabwe.',
  },
  {
    icon: DollarSign,
    title: 'Reduced Fees',
    description: 'Premium Christian education made genuinely accessible through our competitive 2026 reduced fee structure.',
  },
  {
    icon: BookOpen,
    title: 'Cambridge & ZIMSEC',
    description: 'We offer both Cambridge International and ZIMSEC curricula, opening every academic pathway for our graduates.',
  },
  {
    icon: Users,
    title: 'Limited Places',
    description: 'Small, intentional class sizes ensure personalized attention and the best learning environment for every child.',
  },
  {
    icon: Award,
    title: 'Christian Values',
    description: 'Rooted firmly in Christian principles, we develop integrity, faith, and character alongside world-class academics.',
  },
]

const FV = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

export default function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <Hero />

      {/* ── About Snapshot ───────────────────────────────── */}
      <section className="py-24 bg-cream-100">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image side */}
            <motion.div
              variants={FV} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ duration: 0.75 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/classroom.jpg"
                  alt="Faith Christian College High School Classroom"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
              </div>

              {/* Floating stat badge */}
              <div className="absolute -bottom-6 -right-6 bg-crimson text-white rounded-2xl p-6 shadow-2xl">
                <p className="text-3xl font-extrabold leading-none">2026</p>
                <p className="text-sm text-white/75 mt-1">Intake Open</p>
              </div>

              {/* Accent blocks */}
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-gold/15 rounded-2xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-navy/8 rounded-full -z-10" />
            </motion.div>

            {/* Text side */}
            <motion.div
              variants={FV} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.2 }}
            >
              <span className="text-crimson text-xs font-bold uppercase tracking-widest">
                About Our School
              </span>
              <h2 className="section-title mt-2 mb-6">
                Excellence Through
                <span className="block text-crimson">Faith &amp; Learning</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Faith Christian College is a premier educational institution in the heart of Bulawayo,
                Zimbabwe. From ECD through to A Level, we combine rigorous academics with strong
                Christian values that shape character, integrity, and purpose.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our experienced faculty, modern facilities, and commitment to both Cambridge International
                and ZIMSEC curricula ensure every graduate is equipped for success in a rapidly evolving world.
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-gray-100">
                {[
                  { val: 'ECD – A Level', lbl: 'Full range' },
                  { val: 'Cambridge', lbl: '& ZIMSEC' },
                  { val: 'Boarding', lbl: 'Available' },
                ].map((s) => (
                  <div key={s.lbl} className="text-center">
                    <p className="font-bold text-navy text-base">{s.val}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{s.lbl}</p>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-primary flex items-center gap-2 w-fit">
                Learn More <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <motion.div
            variants={FV} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-crimson text-xs font-bold uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="section-title mt-2">
              The Faith Christian<span className="text-crimson"> Advantage</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Discover why families across Bulawayo trust Faith Christian College
              for their children's education and future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────── */}
      <section className="py-24 bg-cream-100">
        <div className="section-container">
          <motion.div
            variants={FV} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-crimson text-xs font-bold uppercase tracking-widest">
              Campus Life
            </span>
            <h2 className="section-title mt-2">
              Life at Faith Christian<span className="text-crimson"> College</span>
            </h2>
            <p className="section-subtitle">
              A glimpse into our vibrant, faith-filled school community.
            </p>
          </motion.div>
          <GalleryGrid />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden">
        {/* Navy → crimson gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-700 to-crimson/70" />
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gold/5 rounded-full" />
        <div className="absolute -bottom-24 -right-12 w-96 h-96 bg-crimson/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]
                        bg-white/3 rounded-full border border-white/5" />

        <div className="relative z-10 section-container text-center">
          <motion.div
            variants={FV} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ duration: 0.75 }}
          >
            <div className="inline-flex items-center gap-2.5 bg-gold/15 border border-gold/30
                            text-gold text-xs font-semibold px-5 py-2.5 rounded-full mb-8 uppercase tracking-wider">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Limited Places Available — Apply Early
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Secure Your Child's
              <span className="block text-gold mt-1">Future Today</span>
            </h2>

            <p className="text-white/65 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
              Join the Faith Christian College family. Apply now before places run out
              for the 2026 academic year.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions" className="btn-primary text-base px-12 py-4">
                Apply Now — 2026 Intake
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm border border-white/25 text-white
                           hover:bg-white/20 font-semibold px-12 py-4 rounded-full transition-all
                           duration-300 text-base inline-block text-center"
              >
                Contact Admissions
              </Link>
            </div>

            {/* Contact bar */}
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center
                            gap-4 sm:gap-8 text-white/50 text-sm flex-wrap">
              <span className="flex items-center gap-2">
                <span className="text-gold">📞</span> 0777 202 035
              </span>
              <span className="hidden sm:block w-1 h-1 bg-white/20 rounded-full" />
              <span className="flex items-center gap-2">
                <span className="text-gold">✉️</span> info@faithchristiancollege.ac.zw
              </span>
              <span className="hidden sm:block w-1 h-1 bg-white/20 rounded-full" />
              <span className="flex items-center gap-2">
                <span className="text-gold">📍</span> 9 Livingstone Rd, Suburbs, Bulawayo
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
