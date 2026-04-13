import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RevealWrapper from '../ui/RevealWrapper'
import SectionLabel from '../ui/SectionLabel'
import { menuItems, menuCategories } from '../../data/menu'
import { formatPrice, getSpiceEmojis, cn } from '../../lib/utils'
import type { MenuCategory } from '../../types'

export default function MenuSection() {
  const [active, setActive] = useState<MenuCategory>('kebabs')
  const filtered = menuItems.filter(i => i.category === active)

  return (
    <section id="menu" className="py-[90px] px-[5vw]">
      <div className="max-w-[1100px] mx-auto">

        <RevealWrapper className="mb-10">
          <SectionLabel>What We Serve</SectionLabel>
          <h2 className="font-bengali text-fluid-h2 font-semibold text-cream leading-tight">সম্পূর্ণ মেনু</h2>
          <p className="font-display text-[clamp(1rem,2.5vw,1.4rem)] text-gold-light font-light italic mt-1">Full Menu — Lalbagh's finest</p>
        </RevealWrapper>

        <RevealWrapper delay={0.1} className="flex flex-wrap gap-2 mb-12">
          {menuCategories.map(cat => (
            <motion.button
              key={cat.id}
              onClick={() => setActive(cat.id as MenuCategory)}
              whileTap={{ scale: 0.96 }}
              className={cn(
                'px-5 py-2.5 font-body text-[0.75rem] tracking-[0.1em] uppercase border rounded-full transition-all duration-250 active:scale-95',
                active === cat.id
                  ? 'bg-gold-DEFAULT text-bg border-gold-DEFAULT font-medium'
                  : 'text-cream-dim border-gold-DEFAULT hover:bg-gold-DEFAULT hover:text-bg'
              )}
            >
              {cat.icon} {cat.labelBn} · {cat.labelEn}
            </motion.button>
          ))}
        </RevealWrapper>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold-dim border border-gold-dim rounded-[2rem] overflow-hidden"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ 
                  x: 8,
                  backgroundColor: 'rgba(200, 137, 42, 0.08)',
                }}
                whileTap={{ scale: 0.99 }}
                transition={{ 
                  delay: i * 0.04,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className="bg-bg-secondary p-6 flex justify-between items-start gap-4 transition-colors duration-300 group cursor-default border-l-2 border-transparent hover:border-gold-DEFAULT"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <p className="font-bengali text-[1rem] font-medium text-cream">{item.nameBn}</p>
                    {item.isBestseller && (
                      <span className="font-body text-[0.58rem] tracking-wider uppercase px-2 py-0.5 bg-gold-DEFAULT/15 text-gold-DEFAULT border border-gold-DEFAULT/30 rounded-full">
                        Bestseller
                      </span>
                    )}
                    {item.isVegetarian && (
                      <span className="font-body text-[0.58rem] tracking-wider uppercase px-2 py-0.5 bg-green-900/20 text-green-400 border border-green-700/30 rounded-full">
                        Veg
                      </span>
                    )}
                  </div>
                  <p className="font-display text-[0.82rem] text-gold-DEFAULT italic mb-2">{item.nameEn}</p>
                  <p className="font-body text-[0.79rem] text-cream-dim leading-relaxed">{item.description}</p>
                  {item.spiceLevel && (
                    <p className="text-[0.7rem] mt-2 opacity-70">{getSpiceEmojis(item.spiceLevel)}</p>
                  )}
                </div>
                <span className="font-display text-[1rem] text-gold-light whitespace-nowrap pt-0.5 flex-shrink-0">
                  {item.price === 0 ? 'As per MRP' : formatPrice(item.price)}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <RevealWrapper delay={0.2} className="mt-8 text-center">
          <div className="inline-block mb-4 px-6 py-3 bg-gold-DEFAULT/10 border border-gold-DEFAULT/30 rounded-full">
            <p className="font-body text-[0.75rem] text-gold-light tracking-wide uppercase">
              <span className="font-medium">Catering Services:</span> We cater for Cookouts · Business Parties · Birthday Parties · Live B.B.Q · Weddings & More — Call +8801961435280
            </p>
          </div>
          <p className="font-body text-[0.75rem] text-cream-dim/60 tracking-wide">
            Prices in BDT (৳) · All items halal · Free WiFi available · Takeaway welcome
          </p>
        </RevealWrapper>
      </div>
    </section>
  )
}
