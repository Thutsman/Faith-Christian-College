import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const FV = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

const VALUES = [
  { title: 'Faith',      icon: '✝️',  desc: 'Centring all we do in Christ — building strong spiritual foundations in every student.' },
  { title: 'Excellence', icon: '🏆',  desc: 'Pursuing the highest academic standards through rigorous curricula and dedicated faculty.' },
  { title: 'Integrity',  icon: '🤝',  desc: 'Cultivating honesty, responsibility, and ethical conduct in all aspects of school life.' },
  { title: 'Community',  icon: '❤️',  desc: 'Fostering a warm, inclusive community where every student belongs and truly thrives.' },
]

const PROGRAMS = [
  {
    label: 'ECD / Preschool',
    grades: 'ECD A & B',
    desc: 'A nurturing foundation where young learners discover the joy of learning through play-based activities grounded in Christian values.',
    image: '/images/ecd.jpg',
  },
  {
    label: 'Primary School',
    grades: 'Grade 1 – 7',
    desc: 'Building strong foundations in literacy, numeracy, and character development aligned with Zimbabwe\'s new national curriculum.',
    image: '/images/classroom.jpg',
  },
  {
    label: 'High School',
    grades: 'Form 1 – 6 (A Level)',
    desc: 'Rigorous preparation through ZIMSEC and Cambridge, with a broad range of academic subjects and vibrant sporting activities.',
    image: '/images/hero.jpg',
  },
]

export default function About() {
  return (
    <div>
      {/* ── Page Hero ──────────────────────────────────── */}
      <div className="relative bg-navy pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-crimson/25" />
        <div
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="relative z-10 section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold text-xs font-bold uppercase tracking-widest">Our Story</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 leading-tight">
              About Faith Christian College
            </h1>
            <p className="text-white/65 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
              A tradition of academic excellence, deep faith, and holistic education
              in the heart of Bulawayo, Zimbabwe.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-10 bg-cream-100 rounded-t-[2.5rem]" />
      </div>

      {/* ── Mission ───────────────────────────────────── */}
      <section className="py-24 bg-cream-100">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={FV} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ duration: 0.75 }}
            >
              <span className="text-crimson text-xs font-bold uppercase tracking-widest">Our Mission</span>
              <h2 className="section-title mt-2 mb-6">
                Shaping Future Leaders
                <span className="block text-crimson">Through Faith</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our mission is to provide an exceptional Christian education that equips students with
                academic knowledge, moral character, and spiritual grounding to excel in every area of life.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Founded on the principles of Christ, Faith Christian College nurtures an environment where
                academic excellence and spiritual growth go hand in hand — honouring the unique potential
                of every child.
              </p>
              {/* Scripture */}
              <div className="border-l-4 border-gold bg-gold/8 px-6 py-5 rounded-r-2xl">
                <p className="text-navy font-medium italic leading-relaxed">
                  "Train up a child in the way he should go; even when he is old he will not depart from it."
                </p>
                <p className="text-gold text-sm font-semibold mt-2">— Proverbs 22:6</p>
              </div>
            </motion.div>

            <motion.div
              variants={FV} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/ecd.jpg"
                alt="ECD Students in Classroom"
                className="rounded-2xl shadow-2xl w-full h-[460px] object-cover"
              />
              <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-gold/15 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Vision ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={FV} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ duration: 0.75 }}
              className="order-2 lg:order-1 relative"
            >
              <img
                src="/images/hero.jpg"
                alt="High School Students"
                className="rounded-2xl shadow-2xl w-full h-[460px] object-cover"
              />
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-crimson/10 rounded-full -z-10" />
            </motion.div>

            <motion.div
              variants={FV} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="text-crimson text-xs font-bold uppercase tracking-widest">Our Vision</span>
              <h2 className="section-title mt-2 mb-6">
                A Generation of
                <span className="block text-crimson">Champions</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our vision is to be Zimbabwe's leading Christian educational institution — producing graduates
                who are academically excellent, morally upright, and spiritually grounded, ready to transform
                their communities and the world.
              </p>
              <ul className="space-y-4">
                {[
                  'Full education from ECD through to A Level',
                  'Cambridge International and ZIMSEC curricula',
                  'Modern classrooms, labs and sports facilities',
                  'Holistic development: academics, sport & arts',
                  'Boarding facilities and school transport',
                  'Reduced fees without compromising quality',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-gold rounded-full" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-crimson/30" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gold/5 rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-crimson/15 rounded-full" />

        <div className="relative z-10 section-container">
          <motion.div
            variants={FV} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold text-xs font-bold uppercase tracking-widest">Our Core Values</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
              Built on a <span className="text-gold">Strong Foundation</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                variants={FV} initial="hidden" whileInView="visible"
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl
                           p-8 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-gold font-bold text-xl mb-3">{v.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs ─────────────────────────────────── */}
      <section className="py-24 bg-cream-100">
        <div className="section-container">
          <motion.div
            variants={FV} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-crimson text-xs font-bold uppercase tracking-widest">Academic Programs</span>
            <h2 className="section-title mt-2">
              From Preschool to <span className="text-crimson">A Level</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.map((p, i) => (
              <motion.div
                key={p.label}
                variants={FV} initial="hidden" whileInView="visible"
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">{p.grades}</span>
                  <h3 className="text-navy font-bold text-xl mt-1 mb-3">{p.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={FV} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-14"
          >
            <Link to="/admissions" className="btn-primary flex items-center gap-2 w-fit mx-auto">
              Apply for 2026 <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
