import { motion } from 'framer-motion'
import RevealWrapper from '../ui/RevealWrapper'
import SectionLabel from '../ui/SectionLabel'
import { contactInfo } from '../../data/social'

export default function ContactCTA() {
  return (
    <section id="contact" className="py-[110px] px-[5vw] bg-bg-secondary border-t border-gold-dim relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(200,137,42,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-[720px] mx-auto text-center relative z-10">
        <div className="flex justify-center">
          <SectionLabel center>Come Visit</SectionLabel>
        </div>

        <RevealWrapper>
          <h2 className="font-bengali text-[clamp(2rem,6vw,4.2rem)] font-bold text-cream leading-tight mt-2">
            আজই আসুন<br />
            <span className="text-gradient-gold">স্বাদের জগতে</span>
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <p className="font-display text-[1.15rem] text-cream-dim font-light italic leading-[1.75] mt-5 mb-12">
            Authentic Pakistani & Afghani flavours at Lalbagh and Wari —<br />
            in the beating heart of Old Dhaka.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.2} className="flex gap-4 justify-center flex-wrap">
          <motion.a
            href={`tel:${contactInfo.phone}`}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 border border-gold-DEFAULT bg-transparent text-gold-DEFAULT font-body text-[0.8rem] font-medium tracking-[0.18em] uppercase rounded-full hover:bg-gold-DEFAULT hover:text-bg hover:scale-105 transition-all shadow-[0_0_40px_rgba(200,137,42,0.25)]"
          >
            📞 Call to Reserve
          </motion.a>
          <motion.a
            href={contactInfo.facebook}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 border border-gold-DEFAULT text-cream font-body text-[0.8rem] tracking-[0.18em] uppercase rounded-full hover:bg-gold-DEFAULT hover:text-bg hover:scale-105 transition-all"
          >
            📘 Follow on Facebook
          </motion.a>
        </RevealWrapper>

        <RevealWrapper delay={0.3} className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-14 text-left">
          {[
            { icon: '📞', label: 'Call Us', value: contactInfo.phone, sub: 'Reservations & orders', href: `tel:${contactInfo.phone}` },
            { icon: '📍', label: 'Visit Us', value: 'Lalbagh & Wari', sub: 'Two branches in Dhaka' },
            { icon: '✉️', label: 'Email Us', value: contactInfo.email, sub: 'We reply same day', href: `mailto:${contactInfo.email}` },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ borderColor: 'rgba(200,137,42,0.45)', y: -4 }}
              className="p-6 border border-gold-dim bg-bg transition-all duration-250 rounded-3xl hover:shadow-[0_10px_30px_rgba(200,137,42,0.1)]"
            >
              <div className="text-2xl mb-3">{card.icon}</div>
              <p className="font-body text-[0.65rem] tracking-[0.22em] uppercase text-gold-DEFAULT mb-1.5">{card.label}</p>
              {card.href ? (
                <a href={card.href} className="font-bengali text-[0.9rem] text-cream hover:text-gold-light transition-colors block">
                  {card.value}
                </a>
              ) : (
                <p className="font-bengali text-[0.9rem] text-cream">{card.value}</p>
              )}
              <p className="font-body text-[0.72rem] text-cream-dim mt-1">{card.sub}</p>
            </motion.div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}
