import { useRef } from 'react'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  accentColor?: string
}

export default function GlowCard({ children, className = '', accentColor = '#9b6dff' }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--glow-x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--glow-y', `${e.clientY - rect.top}px`)
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--glow-x', '50%')
    card.style.setProperty('--glow-y', '50%')
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-xl border border-white/10 bg-[#0d0d1a]/80 backdrop-blur-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${className}`}
      style={{ '--glow-x': '50%', '--glow-y': '50%' } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl"
        style={{ background: `radial-gradient(300px circle at var(--glow-x) var(--glow-y), ${accentColor}18, transparent 60%)` }}
      />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}60, transparent)` }} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}