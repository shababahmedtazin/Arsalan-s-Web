import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RevealWrapper from '../ui/RevealWrapper'
import SectionLabel from '../ui/SectionLabel'
import MediaPlaceholder from '../ui/MediaPlaceholder'
import { galleryItems } from '../../data/gallery'

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})

  return (
    <section id="gallery" className="py-[90px] px-[5vw] bg-bg-secondary border-y border-gold-dim">
      <div className="max-w-[1100px] mx-auto">

        <RevealWrapper className="mb-12 text-center">
          <SectionLabel center>The Arsalan Experience</SectionLabel>
          <h2 className="font-bengali text-fluid-h2 font-semibold text-cream leading-tight mt-1">গ্যালারি</h2>
          <p className="font-display text-[clamp(1rem,2vw,1.3rem)] text-gold-light font-light italic mt-1">
            A glimpse inside our kitchen and dining room
          </p>
        </RevealWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {galleryItems.map((item, i) => (
            <RevealWrapper
              key={item.id}
              delay={i * 0.05}
              className={i === 0 || i === 5 ? 'col-span-2 row-span-2' : ''}
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightbox(item.src)}
                className="relative w-full overflow-hidden bg-bg border border-gold-dim cursor-pointer group rounded-3xl shadow-lg hover:shadow-gold-DEFAULT/10"
                style={{ aspectRatio: (i === 0 || i === 5) ? '1/1' : '4/3' }}
              >
                {loadedImages[item.id] === false ? (
                  <MediaPlaceholder
                    label={`Gallery Photo ${i + 1}`}
                    instruction={`Upload ${item.src.split('/').pop()} to /public/media/gallery/`}
                    aspectRatio=""
                    className="absolute inset-0 h-full w-full"
                    icon="🖼️"
                  />
                ) : (
                  <>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      onLoad={() => setLoadedImages(p => ({ ...p, [item.id]: true }))}
                      onError={() => setLoadedImages(p => ({ ...p, [item.id]: false }))}
                    />
                    
                    {/* View Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-gold-DEFAULT text-bg rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                      </div>
                    </div>

                    {item.caption && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/95 via-bg/60 to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <p className="font-display text-sm text-gold-light italic font-medium">{item.caption}</p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gold-DEFAULT/0 group-hover:bg-gold-DEFAULT/10 transition-colors duration-300" />
                  </>
                )}
              </motion.div>
            </RevealWrapper>
          ))}
        </div>

        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
              className="fixed inset-0 z-[200] bg-bg/95 backdrop-blur-xl flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl max-h-[85vh] w-full"
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={lightbox}
                  alt="Gallery image"
                  className="object-contain w-full h-full rounded-2xl border border-gold-dim"
                />
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-bg/80 text-cream hover:bg-gold-DEFAULT hover:text-bg hover:scale-105 border border-gold-DEFAULT rounded-full text-lg transition-all active:scale-95"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
