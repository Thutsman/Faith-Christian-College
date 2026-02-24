import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Globe, MessageCircle, ArrowRight, Clock } from 'lucide-react'

const FV = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: 'Phone',
    value: '0777 202 035',
    href: 'tel:+263777202035',
    color: 'navy',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@faithchristiancollege.ac.zw',
    href: 'mailto:info@faithchristiancollege.ac.zw',
    color: 'crimson',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'www.faithchristiancollege.ac.zw',
    href: 'http://www.faithchristiancollege.ac.zw',
    color: 'gold',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '9 Livingstone Road, Suburbs, Bulawayo',
    href: null,
    color: 'navy',
  },
]

const HOURS = [
  { day: 'Monday – Friday', time: '7:30 AM – 4:30 PM' },
  { day: 'Saturday',        time: '8:00 AM – 12:00 PM' },
  { day: 'Sunday',          time: 'Closed' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 900)
  }

  const iconColor = (c) =>
    c === 'navy' ? 'text-navy bg-navy/10' :
    c === 'crimson' ? 'text-crimson bg-crimson/10' :
    'text-gold bg-gold/10'

  return (
    <div>
      {/* ── Page Hero ──────────────────────────────────── */}
      <div className="relative bg-navy pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-crimson/25" />
        <div className="relative z-10 section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold text-xs font-bold uppercase tracking-widest">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 leading-tight">
              Contact Us
            </h1>
            <p className="text-white/65 mt-6 text-lg max-w-xl mx-auto leading-relaxed">
              We'd love to hear from you. Reach out to our friendly admissions
              team — we're here to help.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-10 bg-cream-100 rounded-t-[2.5rem]" />
      </div>

      {/* ── Contact Cards ─────────────────────────────── */}
      <section className="py-16 bg-cream-100">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_CARDS.map((c, i) => (
              <motion.div
                key={c.label}
                variants={FV} initial="hidden" whileInView="visible"
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 ${iconColor(c.color)}`}>
                  <c.icon size={22} />
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-medium mb-2">{c.label}</p>
                {c.href ? (
                  <a href={c.href}
                     className="text-navy font-semibold text-sm hover:text-crimson transition-colors break-all leading-snug">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-navy font-semibold text-sm leading-snug">{c.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map + Form ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: Map + Info */}
            <motion.div
              variants={FV} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ duration: 0.75 }}
              className="space-y-6"
            >
              <div>
                <span className="text-crimson text-xs font-bold uppercase tracking-widest">Find Us</span>
                <h2 className="section-title mt-2 mb-2">
                  Visit Our <span className="text-crimson">Campus</span>
                </h2>
                <p className="text-gray-500 text-sm">9 Livingstone Road, Suburbs, Bulawayo, Zimbabwe</p>
              </div>

              {/* Map placeholder */}
              <div className="relative bg-navy/5 rounded-2xl overflow-hidden h-56 border border-navy/10
                              group hover:border-navy/25 transition-colors">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <MapPin size={36} className="text-crimson mb-3" />
                  <p className="font-bold text-navy">9 Livingstone Road</p>
                  <p className="text-gray-500 text-sm">Suburbs, Bulawayo, Zimbabwe</p>
                  <a
                    href="https://maps.google.com/?q=9+Livingstone+Road+Suburbs+Bulawayo+Zimbabwe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm text-crimson font-semibold hover:text-navy transition-colors
                               flex items-center gap-1"
                  >
                    Open in Google Maps <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/263777202035"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] text-white rounded-2xl p-5
                           hover:bg-[#1da851] transition-all duration-300 group shadow-md hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg leading-tight">Chat on WhatsApp</p>
                  <p className="text-white/80 text-sm">Quick responses — we're online!</p>
                </div>
                <ArrowRight
                  size={20}
                  className="ml-auto group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>

              {/* Office Hours */}
              <div className="bg-navy rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Clock size={16} className="text-gold" />
                  <h4 className="text-gold font-semibold text-sm uppercase tracking-wider">Office Hours</h4>
                </div>
                <div className="space-y-3">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex items-center justify-between text-sm">
                      <span className="text-white/55">{h.day}</span>
                      <span className={h.time === 'Closed' ? 'text-white/30' : 'text-white font-medium'}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              variants={FV} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.2 }}
            >
              <span className="text-crimson text-xs font-bold uppercase tracking-widest">Message Us</span>
              <h2 className="section-title mt-2 mb-8">
                Send a <span className="text-crimson">Message</span>
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-14 text-center"
                >
                  <div className="text-5xl mb-5">✅</div>
                  <h3 className="text-xl font-bold text-navy mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-2 uppercase tracking-wide">
                        Your Name *
                      </label>
                      <input type="text" name="name" value={form.name} onChange={handleChange}
                        required placeholder="Full name" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-2 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+263 7XX XXX XXX" className="input-field" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-2 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      required placeholder="your@email.com" className="input-field" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-2 uppercase tracking-wide">
                      Subject
                    </label>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange}
                      placeholder="e.g. Admissions enquiry for 2026" className="input-field" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-2 uppercase tracking-wide">
                      Message *
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      required rows={6} placeholder="How can we help you?"
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
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>Send Message <ArrowRight size={17} /></>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA strip ─────────────────────────── */}
      <section className="py-16 bg-navy">
        <div className="section-container">
          <motion.div
            variants={FV} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to join the Faith Christian family?
            </h2>
            <p className="text-white/55 mb-8 text-sm">
              Apply now for the 2026 intake — limited places available.
            </p>
            <a href="/admissions" className="btn-primary inline-flex items-center gap-2">
              Apply Now <ArrowRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
