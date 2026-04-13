import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'
import { contactInfo } from '../../data/social'

export default function Footer() {
  return (
    <footer className="border-t border-gold-dim bg-bg-secondary">
      <div className="max-w-[1100px] mx-auto px-[5vw] py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-bengali text-xl font-semibold text-gold-light mb-1">আর্সালান</h3>
          <p className="font-display italic text-cream-dim text-sm mb-4">Nehari & Kabab Corner</p>
          <p className="font-body text-[0.82rem] text-cream-dim leading-relaxed">
            Authentic Pakistani & Afghani cuisine in the heart of Old Dhaka since we first lit our tandoor.
          </p>
          <div className="flex gap-4 mt-5">
            <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer"
              className="text-cream-dim hover:text-gold-light transition-colors text-lg hover:scale-110 inline-block">
              {/* @ts-expect-error react-icons type mismatch */}
              <FaFacebook className="text-lg" />
            </a>
            <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer"
              className="text-cream-dim hover:text-gold-light transition-colors text-lg hover:scale-110 inline-block">
              {/* @ts-expect-error react-icons type mismatch */}
              <FaInstagram className="text-lg" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-body text-[0.68rem] tracking-[0.25em] uppercase text-gold-DEFAULT mb-5">Quick Links</p>
          <ul className="flex flex-col gap-3">
            {['Home', 'Signatures', 'Menu', 'Gallery', 'Our Story', 'Location', 'Contact'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="font-body text-sm text-cream-dim hover:text-gold-light transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-[0.68rem] tracking-[0.25em] uppercase text-gold-DEFAULT mb-5">Get In Touch</p>
          <div className="flex flex-col gap-4">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-cream-dim hover:text-gold-light transition-colors font-body text-sm">
              {/* @ts-expect-error react-icons type mismatch */}
              <FaPhone className="text-gold-DEFAULT flex-shrink-0" /> {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-cream-dim hover:text-gold-light transition-colors font-body text-sm">
              {/* @ts-expect-error react-icons type mismatch */}
              <FaEnvelope className="text-gold-DEFAULT flex-shrink-0" /> {contactInfo.email}
            </a>
            <div className="font-bengali text-sm text-cream-dim leading-relaxed">
              📍 {contactInfo.addressBn}
            </div>
            <div className="font-body text-sm text-cream-dim">
              🕐 {contactInfo.hours}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gold-dim px-[5vw] py-5 flex flex-wrap items-center justify-between gap-3">
        <p className="font-body text-[0.72rem] text-cream-dim">
          © {new Date().getFullYear()} Arsalan Restaurant · Lalbagh & Wari, Dhaka
        </p>
        <p className="font-body text-[0.72rem] text-gold-DEFAULT/60">
          82% of customers recommend us ⭐
        </p>
      </div>
    </footer>
  )
}
