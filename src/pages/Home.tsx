import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RevealSection from '../components/RevealSection'
import GlowCard from '../components/GlowCard'

gsap.registerPlugin(ScrollTrigger)

// ── Data ──────────────────────────────────────────────────────────────────────

const skills = [
  { name: 'TypeScript / React', level: 82, color: '#4df0e0' },
  { name: 'C / C++',            level: 75, color: '#9b6dff' },
  { name: 'Next.js',            level: 70, color: '#e879a0' },
  { name: 'Node / Express',     level: 72, color: '#f5c842' },
  { name: 'Python',             level: 68, color: '#4df0e0' },
]

const pages = [
  {
    to: '/it',
    label: 'IT-Related',
    desc: 'Work experience, projects, awards, and the tech stack I use day-to-day.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18"   />
      </svg>
    ),
    accent: '#9b6dff',
  },
  {
    to: '/debate',
    label: 'Debate-Related',
    desc: 'Tournament achievements, selected motions, and debate philosophy.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    accent: '#e879a0',
  },
]

const contacts = [
  { label: 'GitHub',   href: 'https://github.com/Zyndesu233',         color: '#9b6dff' },
  { label: 'LinkedIn', href: 'https://linkedin.com',                   color: '#4df0e0' },
  { label: 'Email',    href: 'mailto:ericchansuiki@gmail.com',         color: '#e879a0' },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function Home() {
  const bgRef        = useRef<HTMLDivElement>(null)
  const titleRef     = useRef<HTMLHeadingElement>(null)
  const taglineRef   = useRef<HTMLParagraphElement>(null)
  const ctaRef       = useRef<HTMLDivElement>(null)
  const scrollDotRef = useRef<HTMLDivElement>(null)

  // ── Hero entrance timeline ──────────────────────────────────────────────
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { y: 70, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
        { y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)', duration: 1.1, ease: 'power4.out' },
      )
    }
    if (taglineRef.current) {
      tl.fromTo(
        taglineRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.55',
      )
    }
    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.45',
      )
    }

    // Scroll indicator line draws in after titles settle
    if (scrollDotRef.current) {
      gsap.fromTo(
        scrollDotRef.current,
        { scaleY: 0 },
        { scaleY: 1, duration: 1.2, ease: 'power2.out', delay: 1.7, transformOrigin: 'top center' },
      )
    }
  }, [])

  // ── Parallax hero background on scroll ─────────────────────────────────
  useEffect(() => {
    const el = bgRef.current
    if (!el) return
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.28}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="relative z-10">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Parallax radial glows */}
        <div ref={bgRef} className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(155,109,255,0.11) 0%, rgba(232,121,160,0.05) 45%, transparent 70%)',
              filter: 'blur(48px)',
            }}
          />
          <div
            className="absolute top-1/4 right-1/3 w-[360px] h-[360px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(77,240,224,0.07) 0%, transparent 70%)',
              filter: 'blur(32px)',
              animation: 'float 9s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-1/4 left-1/4 w-[280px] h-[280px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(232,121,160,0.06) 0%, transparent 70%)',
              filter: 'blur(28px)',
              animation: 'float 12s ease-in-out infinite reverse',
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

          <p className="text-xs tracking-[0.5em] text-[#9b6dff] mb-7 font-medium uppercase">
            — Portfolio —
          </p>

          <h1
            ref={titleRef}
            className="font-black leading-none mb-4"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(3rem, 11vw, 8.5rem)',
              opacity: 0,
            }}
          >
            <span className="glitch gradient-text" data-text="ERIC CHAN">
              ERIC CHAN
            </span>
          </h1>

          <p
            className="text-xs tracking-[0.4em] text-white/30 mb-8 uppercase"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            陳瑞奇
          </p>

          <p
            ref={taglineRef}
            className="text-white/55 mb-12 mx-auto leading-relaxed"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              maxWidth: '38rem',
              opacity: 0,
            }}
          >
            CS student at <span className="text-[#4df0e0]">CUHK</span> ·
            Front-end engineer · Systems tinkerer.
            <br />
            Based in <span className="text-[#e879a0]">Hong Kong</span>.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center" style={{ opacity: 0 }}>
            {pages.map(({ to, label, accent }) => (
              <Link
                key={to}
                to={to}
                className="group relative px-8 py-3 rounded-full text-sm font-semibold tracking-[0.15em] uppercase overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ border: `1px solid ${accent}55`, color: accent }}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  style={{ background: `${accent}15` }}
                  aria-hidden="true"
                />
                <span className="relative">{label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.35em] text-white/25 uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#9b6dff]/50 to-transparent overflow-hidden">
            <div
              ref={scrollDotRef}
              className="w-full h-full bg-[#9b6dff]"
              style={{ transform: 'scaleY(0)', transformOrigin: 'top' }}
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <RevealSection>
            <p className="text-xs tracking-[0.4em] text-[#4df0e0] mb-4 uppercase">About Me</p>
            <h2
              className="font-black mb-6 leading-tight"
              style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Building Things,<br />Breaking Things
            </h2>
            <p className="text-white/55 leading-relaxed mb-4 text-sm">
              I'm a first-year Computer Science student at The Chinese University
              of Hong Kong with a GPA of 3.509. I've interned as a web developer
              at an AI start-up and a game company, shipping real features in
              React and Next.js.
            </p>
            <p className="text-white/55 leading-relaxed text-sm">
              Outside of work, I compete in cybersecurity CTFs, solve algorithmic
              challenges in C++, and build side projects that let me explore
              whatever I'm curious about that week.
            </p>
          </RevealSection>

          <RevealSection delay={0.15}>
            <p className="text-xs tracking-[0.4em] text-[#9b6dff] mb-5 uppercase">Skills</p>
            <div className="space-y-5">
              {skills.map(s => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── EXPLORE PAGES ─────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <RevealSection>
            <p className="text-xs tracking-[0.4em] text-[#e879a0] mb-3 uppercase">Explore</p>
            <h2
              className="font-black mb-14 leading-tight"
              style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              My Worlds
            </h2>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-6">
            {pages.map(({ to, label, desc, icon, accent }, i) => (
              <RevealSection key={to} delay={i * 0.15}>
                <Link to={to} className="block group">
                  <GlowCard accentColor={accent} className="p-8 h-full">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: accent, background: `${accent}18` }}
                    >
                      {icon}
                    </div>
                    <h3
                      className="text-lg font-bold mb-3 text-white"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {label}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed mb-6">{desc}</p>
                    <span
                      className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold transition-all duration-300 group-hover:gap-3"
                      style={{ color: accent }}
                    >
                      Explore
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </GlowCard>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <RevealSection>
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

            <div>
              <p className="text-xs tracking-[0.4em] text-[#f5c842] mb-2 uppercase">Contact</p>
              <h2
                className="font-black"
                style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
              >
                Let's Connect
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {contacts.map(({ label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{ color, borderColor: `${color}40`, background: `${color}0f` }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="py-6 px-6 border-t border-white/5 text-center">
        <p className="text-xs text-white/20 tracking-widest uppercase">
          © {new Date().getFullYear()} Eric Chan · Built with React, Vite &amp; Tailwind CSS
        </p>
      </footer>

    </main>
  )
}

// ── Skill Bar ─────────────────────────────────────────────────────────────────

interface SkillBarProps {
  name: string
  level: number
  color: string
}

function SkillBar({ name, level, color }: SkillBarProps) {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return

    gsap.fromTo(
      el,
      { width: '0%' },
      {
        width: `${level}%`,
        duration: 1.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [level])

  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-white/65 font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-px w-full rounded-full bg-white/10">
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{
            width: 0,
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 8px ${color}55`,
          }}
        />
      </div>
    </div>
  )
}