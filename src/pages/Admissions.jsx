import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, Phone, Mail, ArrowRight, X } from 'lucide-react'

const FV = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

const FEE_TABLE = [
  {
    level: 'ECD',
    reg: '$60 usd',
    uniform: 'Free',
    fees: '$300 / term',
    levy: '$30 usd',
  },
  {
    level: 'Primary',
    reg: '$100 usd',
    uniform: 'Free',
    fees: '$360 / term',
    levy: '$30 usd',
  },
  {
    level: 'High School',
    reg: '$130 usd + laptop',
    uniform: 'Free',
    fees: '$390 / term',
    levy: '$30 usd',
  },
  {
    level: 'Boarding',
    reg: '—',
    uniform: '—',
    fees: 'Contact us',
    levy: '—',
  },
]

const GRADES = [
  'ECD A (Preschool)', 'ECD B (Preschool)',
  ...[1,2,3,4,5,6,7].map(n => `Grade ${n} (Primary)`),
  ...[1,2,3,4].map(n => `Form ${n} (High School)`),
  'Form 5 — A Level', 'Form 6 — A Level',
  'Boarding (High School)',
]

const STEPS = [
  { n: '1', title: 'Submit Application', body: 'Fill in the form with your child\'s details, contact information, and the grade they are applying for.' },
  { n: '2', title: 'Assessment & Tour', body: 'Our team will schedule a brief assessment and an in-person school tour for your family.' },
  { n: '3', title: 'Enroll & Confirm', body: 'Receive your acceptance letter and complete the enrollment process before places close.' },
]

const LEVEL_CARD_DETAILS = {
  Preschool: {
    title: 'Preschool (ECD A & B)',
    body: 'We use the Montessori style of teaching to nurture curiosity and independence. Our ECD programme offers interactive, hands-on learning in a supportive environment with a small student-to-teacher ratio, so every child receives focused attention.',
    image: '/images/ecd.jpg',
    imageAlt: 'ECD interactive class',
  },
  Primary: {
    title: 'Primary (Grade 1 – 7)',
    body: 'A strong foundation in literacy, numeracy, and values. Our primary section combines the Cambridge and ZIMSEC curricula with a caring, disciplined environment and small class sizes for personalised learning.',
    image: null,
    imageAlt: 'Primary classroom',
  },
  'High School': {
    title: 'High School (Form 1 – 6)',
    body: 'Cambridge and ZIMSEC through to A Level. We prepare students for university and life with rigorous academics, leadership opportunities, and a free laptop included with High School registration.',
    image: null,
    imageAlt: null,
  },
  Curriculum: {
    title: 'Cambridge & ZIMSEC',
    body: 'Dual curriculum options to suit your family’s goals. Both pathways are fully supported with quality teaching and resources.',
    image: null,
    imageAlt: null,
  },
  Boarding: {
    title: 'Boarding Facilities & Amenities',
    body: 'Comfortable, supervised boarding houses providing a safe home-away-from-home for students. Our boarding facilities and amenities will be showcased here with photos — contact us for details and a tour.',
    image: null,
    imageAlt: null,
  },
}

const LEVEL_CARDS = [
  { key: 'Preschool',   icon: '🎒', label: 'Preschool',   val: 'ECD A & B' },
  { key: 'Primary',     icon: '🏫', label: 'Primary',     val: 'Grade 1 – 7' },
  { key: 'High School', icon: '🎓', label: 'High School', val: 'Form 1 – 6' },
  { key: 'Curriculum',  icon: '📖', label: 'Curriculum',  val: 'Cambridge & ZIMSEC' },
  { key: 'Boarding',    icon: '🛏️', label: 'Boarding',    val: 'Facilities & amenities' },
]

export default function Admissions() {
  const [form, setForm] = useState({
    studentName: '', parentName: '', email: '', phone: '', grade: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [modalCard, setModalCard] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ studentName: '', parentName: '', email: '', phone: '', grade: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    }, 900)
  }

  return (
    <div>
      {/* ── Page Hero ──────────────────────────────────── */}
      <div className="relative min-h-[70vh] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/admissions-hero.jpg')" }}
        />
        {/* Gradient: strong navy left, lighter right so students remain visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/30" />

        {/* Gold left accent line */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-gold/70 to-transparent" />

        <div className="relative z-10 section-container w-full pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase
                             tracking-widest bg-gold/10 border border-gold/30 px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              2026 Enrollment
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-2 leading-tight">
              Begin Your
              <span className="block text-gold">Journey Here</span>
            </h1>
            <p className="text-white/70 mt-6 text-lg max-w-xl leading-relaxed">
              Join the Faith Christian College family. We offer world-class Christian education
              from ECD through to A Level — with limited places available for 2026.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 bg-crimson text-white
                              text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Reduced Fees — Limited Places
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25
                              text-white/80 text-sm px-5 py-2.5 rounded-full backdrop-blur-sm">
                Cambridge &amp; ZIMSEC Curricula
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-10 bg-cream-100 rounded-t-[2.5rem]" />
      </div>

      {/* ── Quick Level Cards ──────────────────────────── */}
      <section className="py-16 bg-cream-100">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
            {LEVEL_CARDS.map((item, i) => (
              <motion.div
                key={item.key}
                variants={FV} initial="hidden" whileInView="visible"
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => setModalCard(item.key)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setModalCard(item.key)}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl
                           transition-all duration-300 hover:-translate-y-1 cursor-pointer
                           focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-medium">{item.label}</p>
                <p className="text-navy font-bold text-sm mt-1.5">{item.val}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Level detail modal */}
      <AnimatePresence>
        {modalCard && LEVEL_CARD_DETAILS[modalCard] && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalCard(null)}
              className="fixed inset-0 bg-navy/80 backdrop-blur-sm z-50"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg max-h-[90vh]
                         overflow-y-auto bg-white rounded-2xl shadow-2xl z-50 mx-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="level-modal-title"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 id="level-modal-title" className="text-xl font-bold text-navy">
                    {LEVEL_CARD_DETAILS[modalCard].title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setModalCard(null)}
                    className="p-2 rounded-xl text-gray-400 hover:text-navy hover:bg-gray-100 transition-colors"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>
                {LEVEL_CARD_DETAILS[modalCard].image ? (
                  <div className="rounded-xl overflow-hidden mb-4">
                    <img
                      src={LEVEL_CARD_DETAILS[modalCard].image}
                      alt={LEVEL_CARD_DETAILS[modalCard].imageAlt || ''}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-40 bg-cream-100 rounded-xl flex items-center justify-center mb-4 border border-gray-200">
                    <span className="text-gray-400 text-sm">Image placeholder — add photos here</span>
                  </div>
                )}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {LEVEL_CARD_DETAILS[modalCard].body}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Fee Structure ─────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            variants={FV} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-crimson text-xs font-bold uppercase tracking-widest">2026 Fees</span>
            <h2 className="section-title mt-2">
              Affordable Quality <span className="text-crimson">Education</span>
            </h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Premium Christian education made accessible through our competitive reduced fee structure.
            </p>
          </motion.div>

          <motion.div
            variants={FV} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto rounded-2xl shadow-md"
          >
            <table className="w-full text-left min-w-[540px]">
              <thead>
                <tr className="bg-navy text-white">
                  {['Level', 'Registration', 'Uniform', 'Fees Per Term', 'Levy'].map((h) => (
                    <th key={h} className="px-6 py-4 text-sm font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEE_TABLE.map((row, i) => (
                  <tr
                    key={row.level}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-cream-100'}`}
                  >
                    <td className="px-6 py-4 font-bold text-navy">{row.level}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{row.reg}</td>
                    <td className="px-6 py-4 text-green-600 font-semibold text-sm">{row.uniform}</td>
                    <td className="px-6 py-4 text-crimson font-bold text-sm">{row.fees}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{row.levy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            variants={FV} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex items-start gap-3 bg-gold/8 border border-gold/30 rounded-2xl p-5"
          >
            <CheckCircle size={19} className="text-gold flex-shrink-0 mt-0.5" />
            <p className="text-gray-700 text-sm leading-relaxed">
              High School registration includes a <strong>free laptop</strong>.
              All levels include a <strong>free school uniform</strong>.
              <strong>Boarding</strong> fees and availability: please contact us for current rates and details.
              Fees are subject to confirmation — contact us for the latest information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Application Form ──────────────────────────── */}
      <section className="py-24 bg-cream-100">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: Info + Steps */}
            <motion.div
              variants={FV} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ duration: 0.75 }}
            >
              <span className="text-crimson text-xs font-bold uppercase tracking-widest">Apply Now</span>
              <h2 className="section-title mt-2 mb-6">
                Start Your
                <span className="block text-crimson">Application</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                Ready to join the Faith Christian College family? Complete the form and our admissions
                team will respond within 24 hours.
              </p>

              {/* Steps */}
              <div className="space-y-8 mb-10">
                {STEPS.map((s) => (
                  <div key={s.n} className="flex items-start gap-5">
                    <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="font-bold text-gold text-sm">{s.n}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{s.title}</h4>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact box */}
              <div className="bg-navy rounded-2xl p-6 text-white">
                <p className="font-semibold text-gold mb-4">Need help? Reach us directly:</p>
                <div className="space-y-3">
                  <a href="tel:+263777202035"
                     className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm">
                    <Phone size={15} className="text-gold flex-shrink-0" /> 0777 202 035
                  </a>
                  <a href="mailto:info@faithchristiancollege.ac.zw"
                     className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm break-all">
                    <Mail size={15} className="text-gold flex-shrink-0" /> info@faithchristiancollege.ac.zw
                  </a>
                  <a href="https://wa.me/263777202035" target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-3 text-[#25D366] hover:text-[#1da851] transition-colors text-sm font-medium">
                    <span>💬</span> WhatsApp: +263 777 202 035
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              variants={FV} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.2 }}
            >
              {submitted ? (
                <div className="bg-white rounded-2xl shadow-md p-12 h-full flex flex-col
                                items-center justify-center text-center">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={42} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3">Application Received!</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                    Thank you! Our admissions team will contact you within 24 hours to discuss next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 space-y-5">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-navy">Application Form</h3>
                    <p className="text-gray-400 text-xs mt-1">2026 Academic Year — All fields marked * are required</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-2 uppercase tracking-wide">
                        Student Name *
                      </label>
                      <input type="text" name="studentName" value={form.studentName}
                        onChange={handleChange} required placeholder="Student's full name"
                        className="input-field" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-2 uppercase tracking-wide">
                        Parent / Guardian *
                      </label>
                      <input type="text" name="parentName" value={form.parentName}
                        onChange={handleChange} required placeholder="Guardian's full name"
                        className="input-field" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-2 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input type="email" name="email" value={form.email}
                      onChange={handleChange} required placeholder="your@email.com"
                      className="input-field" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-2 uppercase tracking-wide">
                      Phone Number *
                    </label>
                    <input type="tel" name="phone" value={form.phone}
                      onChange={handleChange} required placeholder="+263 7XX XXX XXX"
                      className="input-field" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-2 uppercase tracking-wide">
                      Grade Applying For *
                    </label>
                    <select name="grade" value={form.grade} onChange={handleChange} required
                      className="input-field">
                      <option value="">Select a grade / level</option>
                      {GRADES.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-2 uppercase tracking-wide">
                      Additional Notes
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      rows={4} placeholder="Any additional information, special requirements, or questions…"
                      className="input-field resize-none" />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-base py-4 flex items-center justify-center gap-2
                               disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white
                                         rounded-full animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>Submit Application <ArrowRight size={17} /></>
                    )}
                  </button>
                  <p className="text-gray-400 text-xs text-center">
                    We respond within 24 hours. Limited places — apply early to avoid disappointment.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
