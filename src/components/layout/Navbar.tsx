import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MobileMenu from './MobileMenu'

const links = [
  { label: 'Signature', href: '#signatures' },
  { label: 'Full Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Our Story', href: '#story' },
  { label: 'Find Us', href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Fixed Logo - Top Left */}
      <div 
        className={`fixed left-[5vw] z-[60] flex items-center transition-all duration-500 ${
          scrolled ? 'top-4 h-[48px]' : 'top-6 h-[56px]'
        }`}
      >
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(200,137,42,0.4)]">
            <img
              src="/media/logo/logo-white.png"
              alt="Arsalan Logo"
              className="object-contain w-full h-full"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bengali text-[1.3rem] md:text-[1.5rem] font-bold text-gold-light tracking-wide leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              আর্সালান
            </span>
            <span className="font-body text-[0.55rem] tracking-[0.3em] uppercase text-gold-DEFAULT/80 mt-1 hidden md:block">
              Authentic Biryani
            </span>
          </div>
        </a>
      </div>

      {/* Desktop Navigation Capsule */}
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 px-8 flex items-center justify-between transition-all duration-500 rounded-full border border-gold-dim/20 ${
          scrolled
            ? 'top-4 h-[48px] bg-bg/85 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-gold-dim/40'
            : 'top-6 h-[56px] bg-bg/20 backdrop-blur-md'
        } hidden lg:flex`}
      >
        {/* Center Section: Links (Desktop) */}
        <ul className="flex gap-8 list-none">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-[0.75rem] tracking-[0.12em] uppercase text-cream-dim hover:text-gold-light transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-DEFAULT group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="w-px h-4 bg-gold-dim/30 mx-6" />

        {/* Right Section: Reserve Button (Desktop) */}
        <a
          href="#contact"
          className="px-6 py-1.5 border border-gold-DEFAULT text-gold-light font-body text-[0.7rem] tracking-[0.1em] uppercase hover:bg-gold-DEFAULT hover:text-bg hover:scale-105 active:scale-95 transition-all duration-250 rounded-full whitespace-nowrap"
        >
          Reserve Table
        </a>
      </motion.nav>

      {/* Mobile Navigation Bar */}
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed right-[5vw] z-50 flex items-center transition-all duration-500 lg:hidden ${
          scrolled ? 'top-4 h-[48px]' : 'top-6 h-[56px]'
        }`}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center gap-3 px-5 h-full bg-bg/80 backdrop-blur-xl rounded-full border border-gold-dim/30 active:scale-95 transition-all group shadow-lg"
          aria-label="Toggle menu"
        >
          <span className="font-body text-[0.65rem] tracking-[0.2em] uppercase text-cream font-medium pt-0.5">
            {menuOpen ? 'Close' : 'Menu'}
          </span>
          <div className="flex flex-col gap-[4px] items-center justify-center">
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                className="block h-[1.2px] bg-gold-light origin-center"
                animate={
                  menuOpen
                    ? i === 0 ? { y: 5.2, rotate: 45, width: 16 }
                    : i === 1 ? { opacity: 0, width: 16 }
                    : { y: -5.2, rotate: -45, width: 16 }
                    : { y: 0, rotate: 0, opacity: 1, width: i === 1 ? 10 : 16 }
                }
                transition={{ duration: 0.3 }}
                style={{ width: i === 1 ? 10 : 16 }}
              />
            ))}
          </div>
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} links={links} />}
      </AnimatePresence>
    </>
  )
}
