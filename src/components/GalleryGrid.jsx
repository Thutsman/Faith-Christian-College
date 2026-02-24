import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const IMAGES = [
  { src: '/images/hero.jpg',            alt: 'High School Students — Faith Christian College' },
  { src: '/images/admissions-hero.jpg', alt: 'Students in School Uniform — Navy & Gold Blazers' },
  { src: '/images/ecd.jpg',             alt: 'ECD Classroom — Early Childhood Education' },
  { src: '/images/classroom.jpg',       alt: 'High School Classroom Environment' },
  { src: '/images/flyer.jpg',           alt: '2026 Intake Information' },
  { src: '/images/brochure.jpg',        alt: 'School Subjects & Sports Brochure' },
]

export default function GalleryGrid() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
        {IMAGES.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(img)}
            className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group shadow-md"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-all duration-300
                            flex flex-col items-center justify-center gap-2">
              <ZoomIn
                size={28}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300
                           drop-shadow-lg"
              />
              <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100
                            transition-opacity duration-300 text-center px-4 leading-snug">
                {img.alt}
              </p>
            </div>
            {/* Gold corner accent */}
            <div className="absolute top-3 right-3 w-2 h-2 bg-gold rounded-full opacity-0
                            group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-md flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 bg-white/15 hover:bg-white/25 text-white
                         p-2.5 rounded-full transition-colors"
            >
              <X size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img
                src={selected.src}
                alt={selected.alt}
                className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
              <p className="text-white/60 text-sm text-center mt-4">{selected.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
