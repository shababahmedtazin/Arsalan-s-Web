import { motion } from 'framer-motion'

interface Props {
  onClose: () => void
  links: { label: string; href: string }[]
}

export default function MobileMenu({ onClose, links }: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 bg-bg/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      <motion.div
        initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 280 }}
        className="fixed top-0 right-0 bottom-0 w-[75vw] max-w-[320px] bg-bg-secondary border-l border-gold-dim z-50 flex flex-col p-8 pt-20 gap-2"
      >
        <p className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-gold-DEFAULT mb-4">Menu</p>
        {links.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 + 0.1 }}
          >
            <a
              href={link.href}
              onClick={onClose}
              className="block font-body text-[1.1rem] tracking-wide text-cream hover:text-gold-light transition-colors py-3 border-b border-gold-dim/50"
            >
              {link.label}
            </a>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="mt-auto"
        >
          <a
            href="tel:+8801961435280"
            className="flex items-center gap-3 text-cream-dim hover:text-gold-light transition-colors font-body text-sm mb-4"
            onClick={onClose}
          >
            📞 +880 1961-435280
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="block w-full py-3.5 border border-gold-DEFAULT bg-transparent text-gold-DEFAULT hover:bg-gold-DEFAULT hover:text-bg hover:scale-105 active:scale-95 font-body text-sm font-medium tracking-[0.12em] uppercase text-center rounded-full transition-all"
          >
            Reserve a Table
          </a>
        </motion.div>
      </motion.div>
    </>
  )
}
