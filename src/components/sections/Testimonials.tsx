import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RevealWrapper from '../ui/RevealWrapper'
import SectionLabel from '../ui/SectionLabel'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(p => (p + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const sourceIcon = { facebook: '📘', google: '🔍', direct: '💬' }

  return (
    <section id="reviews" className="py-[90px] px-[5vw]">
      <div className="max-w-[860px] mx-auto text-center">
        <RevealWrapper>
          <SectionLabel center>What People Say</SectionLabel>
          <h2 className="font-bengali text-fluid-h2 font-semibold text-cream leading-tight mt-1">রিভিউ</h2>
          <p className="font-display text-[clamp(1rem,2vw,1.3rem)] text-gold-light font-light italic">
            82% of our customers recommend us
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.2} className="mt-14 relative min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg-secondary border border-gold-dim p-10 relative rounded-3xl shadow-[0_10px_30px_rgba(200,137,42,0.05)] hover:shadow-[0_15px_40px_rgba(200,137,42,0.1)] transition-shadow duration-500"
            >
              <span className="absolute top-4 left-6 font-display text-7xl text-gold-DEFAULT/10 leading-none select-none font-bold group-hover:text-gold-DEFAULT/20 transition-colors">"</span>

              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <motion.span 
                    key={i} 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="text-gold-DEFAULT text-sm"
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              <p className="font-display text-[clamp(1.1rem,2.5vw,1.4rem)] text-cream font-light italic leading-[1.7] mb-6 relative z-10">
                "{testimonials[active].text}"
              </p>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm">{sourceIcon[testimonials[active].source]}</span>
                <span className="font-body text-[0.82rem] text-cream-dim font-medium">
                  {testimonials[active].name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${i === active ? 'w-8 bg-gold-DEFAULT' : 'w-2 bg-gold-dim hover:bg-gold-DEFAULT/50'}`}
              />
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
