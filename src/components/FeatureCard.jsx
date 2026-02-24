import { motion } from 'framer-motion'

export default function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="card group cursor-default border border-transparent hover:border-gold/20"
    >
      {/* Icon container */}
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5
                      bg-gradient-to-br from-navy/8 to-crimson/5
                      group-hover:bg-gradient-to-br group-hover:from-navy group-hover:to-crimson/80
                      transition-all duration-400">
        <Icon
          size={26}
          className="text-navy group-hover:text-gold transition-colors duration-300"
        />
      </div>

      {/* Gold accent line */}
      <div className="w-8 h-0.5 bg-gold/40 rounded-full mb-4 group-hover:w-16 transition-all duration-300" />

      <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-crimson transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
