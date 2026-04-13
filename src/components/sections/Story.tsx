import RevealWrapper from '../ui/RevealWrapper'
import SectionLabel from '../ui/SectionLabel'

const stats = [
  { num: '5+', labelBn: 'বছরের অভিজ্ঞতা', labelEn: 'Years Serving Lalbagh' },
  { num: '20+', labelBn: 'মেনু আইটেম', labelEn: 'Menu Items' },
  { num: '82%', labelBn: 'গ্রাহক সন্তুষ্ট', labelEn: 'Customer Approval' },
]

export default function Story() {
  return (
    <section id="story" className="py-[90px] px-[5vw] bg-bg-secondary border-y border-gold-dim">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <RevealWrapper direction="left">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-bengali text-fluid-h2 font-semibold text-cream leading-tight">আমাদের গল্প</h2>
            <p className="font-display text-[clamp(1rem,2.5vw,1.4rem)] text-gold-light font-light italic mt-1 mb-6">
              Born in Lalbagh, Old Dhaka
            </p>
            <div className="space-y-4">
              <p className="font-body text-[0.95rem] text-cream-dim leading-[1.9]">
                আর্সালান লালবাগের ঢাকেশ্বরী রোডে প্রতিষ্ঠিত হয়েছিল একটি স্বপ্ন নিয়ে — পুরান ঢাকার মানুষের কাছে পাকিস্তানি ও আফগান খাবারের খাঁটি স্বাদ পৌঁছে দেওয়া।
              </p>
              <p className="font-body text-[0.95rem] text-cream-dim leading-[1.9]">
                With branches in Lalbagh (Dhakeshwari Road) and Wari (Larmini Street) — Arsalan has become a neighbourhood institution. Every recipe is cooked without compromise.
              </p>
              <p className="font-body text-[0.95rem] text-cream-dim leading-[1.9]">
                Our nihari simmers from the night before. Our kebabs are grilled on live charcoal, and our naan comes straight out of the same tandoor every single day.
              </p>
              <p className="font-body text-[0.95rem] text-gold-light leading-[1.9] font-medium">
                We've recently reached new heights — and we're just getting started.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper direction="right" delay={0.2}>
            <blockquote className="font-display text-[clamp(1.4rem,3vw,2.1rem)] text-cream font-light italic leading-[1.55] pl-8 border-l-2 border-gold-DEFAULT">
              "আগুনের ওপর রান্না করা খাবারে একটা আলাদা আত্মা থাকে। সেই আত্মাই আর্সালানের পরিচয়।"
            </blockquote>
            <p className="mt-5 pl-8 font-body text-[0.8rem] text-cream-dim tracking-wide">
              — Arsalan Kitchen, Lalbagh
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper delay={0.3} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="py-10 px-6 text-center border border-gold-dim rounded-[2rem] bg-bg hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(200,137,42,0.1)] transition-all duration-300">
              <p className="font-display text-[clamp(2.5rem,5vw,3.8rem)] text-gold-light font-medium leading-none">{stat.num}</p>
              <p className="font-bengali text-[0.85rem] text-cream-dim mt-2">{stat.labelBn}</p>
              <p className="font-body text-[0.7rem] text-cream-dim/50 mt-0.5 tracking-wide uppercase">{stat.labelEn}</p>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}
