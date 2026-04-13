import React from 'react'

export default function SectionLabel({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-3 ${center ? 'justify-center' : ''}`}>
      <span className="block w-7 h-px bg-gold-DEFAULT flex-shrink-0" />
      <span className="font-body text-[0.68rem] tracking-[0.3em] uppercase text-gold-DEFAULT">
        {children}
      </span>
    </div>
  )
}
