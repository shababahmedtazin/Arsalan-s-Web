import { useState } from 'react'
import { motion } from 'framer-motion'
import RevealWrapper from '../ui/RevealWrapper'
import SectionLabel from '../ui/SectionLabel'
import MediaPlaceholder from '../ui/MediaPlaceholder'
import { signatureDishes } from '../../data/signatures'
import { formatPrice } from '../../lib/utils'

export default function Signatures() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})

  return (
    <section id="signatures" className="py-[90px] px-[5vw] bg-bg-secondary border-y border-gold-dim">
      <div className="max-w-[1100px] mx-auto">

        <RevealWrapper className="flex flex-wrap justify-between items-end gap-6 mb-14">
          <div>
            <SectionLabel>Our Signatures</SectionLabel>
            <h2 className="font-bengali text-fluid-h2 font-semibold text-cream leading-tight">বিশেষ পদসমূহ</h2>
            <p className="font-display text-[clamp(1rem,2.5vw,1.4rem)] text-gold-light font-light italic mt-1">
              The dishes Lalbagh comes for
            </p>
          </div>
          <a href="#menu"
            className="px-7 py-3 border border-gold-DEFAULT text-cream-dim font-body text-[0.78rem] tracking-[0.1em] uppercase hover:bg-gold-DEFAULT hover:text-bg hover:scale-105 active:scale-95 transition-all rounded-full">
            Full Menu →
          </a>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {signatureDishes.map((dish, i) => (
            <RevealWrapper key={dish.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(200, 137, 42, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-bg border border-gold-dim rounded-[2rem] group relative overflow-hidden flex flex-col h-full transition-colors hover:border-gold-DEFAULT/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {loadedImages[dish.id] === false ? (
                    <MediaPlaceholder
                      label={`${dish.nameEn} Photo`}
                      instruction={`Upload ${dish.imagePath.split('/').pop()} to /public/media/dishes/`}
                      aspectRatio="aspect-[4/3]"
                      icon="📸"
                    />
                  ) : (
                    <img
                      src={dish.imagePath}
                      alt={dish.imageAlt}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      onLoad={() => setLoadedImages(p => ({ ...p, [dish.id]: true }))}
                      onError={() => setLoadedImages(p => ({ ...p, [dish.id]: false }))}
                    />
                  )}
                  <span className="absolute top-3 left-3 font-display text-5xl font-bold text-white/10 leading-none select-none group-hover:text-gold-DEFAULT/20 transition-colors duration-500">
                    {dish.number}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <p className="font-bengali text-[1.2rem] font-semibold text-cream mb-1 group-hover:text-gold-light transition-colors">{dish.nameBn}</p>
                  <p className="font-display text-[0.9rem] text-gold-DEFAULT italic mb-3">{dish.nameEn}</p>
                  <p className="font-body text-[0.84rem] text-cream-dim leading-relaxed flex-1">{dish.description}</p>
                  <div className="flex items-center justify-between mt-5 pt-5 border-t border-gold-dim group-hover:border-gold-DEFAULT/30 transition-colors">
                    <span className="font-display text-[1.1rem] text-gold-light font-medium">{formatPrice(dish.price)}</span>
                    <span className="font-body text-[0.68rem] tracking-widest uppercase text-gold-DEFAULT/60 group-hover:text-gold-DEFAULT transition-colors">Signature</span>
                  </div>
                </div>
              </motion.div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
