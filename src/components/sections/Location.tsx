import RevealWrapper from '../ui/RevealWrapper'
import SectionLabel from '../ui/SectionLabel'
import { contactInfo } from '../../data/social'
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaWifi } from 'react-icons/fa'
import { MdLocationOn, MdAccessTime } from 'react-icons/md'

export default function Location() {
  return (
    <section id="location" className="py-[90px] px-[5vw]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <RevealWrapper direction="left" className="flex flex-col gap-8">
          {contactInfo.branches?.map((branch, idx) => (
            <div key={idx} className="aspect-[16/9] border border-gold-dim rounded-[2rem] overflow-hidden relative group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(200,137,42,0.1)] transition-all duration-300">
              <div className="w-full h-full bg-bg-secondary flex flex-col items-center justify-center gap-4 text-cream-dim p-6 text-center">
                {/* @ts-expect-error react-icons type mismatch */}
                <MdLocationOn className="text-4xl text-gold-DEFAULT mb-2" />
                <div>
                  <h3 className="font-display text-xl text-gold-light mb-2">{branch.name}</h3>
                  <p className="font-bengali text-lg text-cream leading-relaxed">{branch.addressBn}</p>
                  <p className="font-body text-sm text-cream-dim mt-1">{branch.address}</p>
                </div>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-2.5 border border-gold-DEFAULT text-gold-light text-[0.75rem] font-body tracking-widest uppercase hover:bg-gold-DEFAULT hover:text-bg hover:scale-105 active:scale-95 transition-all rounded-full inline-flex items-center gap-2"
                >
                  <MdLocationOn /> Open in Maps
                </a>
              </div>
            </div>
          ))}
        </RevealWrapper>

        <RevealWrapper direction="right" delay={0.15}>
          <SectionLabel>Find Us</SectionLabel>
          <h2 className="font-bengali text-fluid-h2 font-semibold text-cream leading-tight">আমাদের ঠিকানা</h2>
          <p className="font-display text-[clamp(1rem,2.5vw,1.4rem)] text-gold-light font-light italic mt-1 mb-10">
            Where to find Arsalan
          </p>

          <div className="flex flex-col gap-7">
            {[
              // @ts-expect-error react-icons type mismatch
              { icon: <MdLocationOn className="text-gold-DEFAULT text-xl flex-shrink-0 mt-0.5" />, label: 'Address', mainBn: contactInfo.addressBn, sub: contactInfo.address },
              // @ts-expect-error react-icons type mismatch
              { icon: <MdAccessTime className="text-gold-DEFAULT text-xl flex-shrink-0 mt-0.5" />, label: 'Hours', mainBn: contactInfo.hoursBn, sub: contactInfo.hours },
              // @ts-expect-error react-icons type mismatch
              { icon: <FaPhone className="text-gold-DEFAULT text-lg flex-shrink-0 mt-0.5" />, label: 'Phone', mainBn: contactInfo.phone, sub: 'Call to reserve or enquire', link: `tel:${contactInfo.phone}` },
              // @ts-expect-error react-icons type mismatch
              { icon: <FaEnvelope className="text-gold-DEFAULT text-lg flex-shrink-0 mt-0.5" />, label: 'Email', mainBn: contactInfo.email, sub: 'We reply within the day', link: `mailto:${contactInfo.email}` },
              // @ts-expect-error react-icons type mismatch
              { icon: <FaWifi className="text-gold-DEFAULT text-lg flex-shrink-0 mt-0.5" />, label: 'Amenities', mainBn: 'Free WiFi · Dine-in · Takeaway', sub: 'Catering available for events' },
            ].map(item => (
              <div key={item.label} className="flex gap-4 pl-5 border-l-2 border-gold-dim">
                {item.icon}
                <div>
                  <p className="font-body text-[0.65rem] tracking-[0.25em] uppercase text-gold-DEFAULT mb-1.5">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="font-bengali text-[1rem] text-cream font-medium hover:text-gold-light transition-colors leading-relaxed">
                      {item.mainBn}
                    </a>
                  ) : (
                    <p className="font-bengali text-[1rem] text-cream font-medium leading-relaxed">{item.mainBn}</p>
                  )}
                  <p className="font-body text-[0.8rem] text-cream-dim mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-4 mt-2 pl-5">
              <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-[0.78rem] text-cream-dim hover:text-gold-light transition-colors">
                <FaInstagram /> @official_arsalan_bd
              </a>
              <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-[0.78rem] text-cream-dim hover:text-gold-light transition-colors">
                <FaFacebook /> Facebook
              </a>
            </div>
          </div>

          <a
            href="#location"
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 border border-gold-DEFAULT bg-transparent text-gold-DEFAULT font-body text-[0.78rem] font-medium tracking-[0.15em] uppercase rounded-full hover:bg-gold-DEFAULT hover:text-bg hover:scale-105 active:scale-95 transition-all"
          >
            <MdLocationOn /> View Locations
          </a>
        </RevealWrapper>
      </div>
    </section>
  )
}
