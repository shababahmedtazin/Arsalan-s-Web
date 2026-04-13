import { motion } from 'framer-motion'
import EmberParticles from '../ui/EmberParticles'
import GoldDivider from '../ui/GoldDivider'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <section id="home" className="relative min-h-svh flex items-center justify-center overflow-hidden px-[5vw]">

      <div className="absolute inset-0 z-0 bg-bg">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80"
          alt="Arsalan Charcoal Grill"
          className="w-full h-full object-cover object-center opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-video-overlay bg-gradient-to-b from-bg/20 via-bg/60 to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_0%_50%,rgba(10,8,5,0.4),transparent)] pointer-events-none" />
      </div>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_65%,rgba(200,137,42,0.1)_0%,transparent_70%)] pointer-events-none" />

      <EmberParticles />

      <div className="relative z-10 text-center max-w-[900px] mx-auto pt-28 md:pt-32">
        <motion.p
          {...fadeUp(0.3)}
          className="font-body text-[0.72rem] tracking-[0.35em] uppercase text-gold-DEFAULT mb-6"
        >
          পুরান ঢাকা · Lalbagh · Wari
        </motion.p>

        <motion.h1
          {...fadeUp(0.5)}
          className="font-bengali text-fluid-hero font-bold text-cream leading-none tracking-tight"
        >
          আর্সালান
        </motion.h1>

        <motion.p
          {...fadeUp(0.65)}
          className="font-display text-[clamp(0.95rem,2.8vw,1.7rem)] font-light italic text-gold-light tracking-[0.3em] mt-3"
        >
          Nehari & Kabab Corner
        </motion.p>

        <motion.div {...fadeUp(0.75)}>
          <GoldDivider className="my-7" />
        </motion.div>

        <motion.p
          {...fadeUp(0.88)}
          className="font-display text-fluid-sub text-cream-dim font-light leading-[1.75] max-w-[540px] mx-auto mb-10"
        >
          পাকিস্তানি ও আফগান রন্ধনশৈলীর অনন্য স্বাদ —<br />
          <span className="text-cream">খাঁটি কাবাব, নিহারি এবং বাটার নান।</span>
        </motion.p>

        <motion.div
          {...fadeUp(1.05)}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#menu"
            className="px-10 py-4 border border-gold-DEFAULT bg-transparent text-gold-DEFAULT font-body text-[0.78rem] font-medium tracking-[0.18em] uppercase rounded-full hover:bg-gold-DEFAULT hover:text-bg hover:scale-105 active:scale-95 transition-all duration-250 shadow-[0_0_30px_rgba(200,137,42,0.3)]"
          >
            View Full Menu
          </a>
          <a
            href="tel:+8801961435280"
            className="px-10 py-4 border border-gold-DEFAULT text-cream font-body text-[0.78rem] tracking-[0.18em] uppercase rounded-full hover:bg-gold-DEFAULT hover:text-bg hover:scale-105 active:scale-95 transition-all duration-250"
          >
            📞 Call to Reserve
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(1.2)}
          className="flex gap-3 justify-center flex-wrap mt-10"
        >
          {['🔥 Charcoal Grill', '📶 Free WiFi', '🛵 Takeaway Available', '🕐 Open Till 11 PM'].map(badge => (
            <span
              key={badge}
              className="font-body text-[0.65rem] tracking-[0.1em] uppercase px-3 py-1.5 border border-gold-dim/60 text-cream-dim rounded-full"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
