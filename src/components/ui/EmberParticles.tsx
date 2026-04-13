import { useEffect, useRef } from 'react'

export default function EmberParticles() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const count = window.innerWidth < 768 ? 14 : 28
    const frag = document.createDocumentFragment()

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div')
      const size = 1 + Math.random() * 2.5
      const drift = (Math.random() - 0.5) * 100
      p.style.cssText = `
        position:absolute;
        width:${size}px; height:${size}px;
        background:${Math.random() > 0.6 ? '#e8a83e' : '#c8892a'};
        border-radius:50%;
        left:${Math.random() * 100}%;
        bottom:${Math.random() * 15}%;
        --drift:${drift}px;
        opacity:0;
        animation:emberFloat ${7 + Math.random() * 9}s linear ${Math.random() * 10}s infinite;
        pointer-events:none;
        will-change:transform,opacity;
      `
      frag.appendChild(p)
    }
    el.appendChild(frag)

    if (!document.getElementById('ember-kf')) {
      const s = document.createElement('style')
      s.id = 'ember-kf'
      s.textContent = `
        @keyframes emberFloat {
          0% { transform:translateY(0) translateX(0);opacity:0; }
          8% { opacity:0.9; }
          80% { opacity:0.3; }
          100% { transform:translateY(-85vh) translateX(var(--drift));opacity:0; }
        }
      `
      document.head.appendChild(s)
    }

    return () => { el.innerHTML = '' }
  }, [])

  return <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none z-[1]" />
}
