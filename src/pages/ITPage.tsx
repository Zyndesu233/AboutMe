import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RevealSection from '../components/RevealSection'
import GlowCard from '../components/GlowCard'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    role: 'Summer Intern — Developer Experience Team',
    company: 'Nex',
    url: 'https://www.nex.inc',
    period: 'Jun 2026 — Aug 2026',
    bullets: [
      'Nex is a game company that developed Nex Playground, an award-winning active play system.',
      'Part of the Developer Experience team, supporting developer tooling and workflows.',
    ],
    accent: '#f5c842',
    tag: 'Game Tech',
  },
  {
    role: 'Part-time Intern — Web Developer',
    company: 'Penrose',
    url: 'https://www.withpenrose.com',
    period: 'Mar 2025 — Mar 2026',
    bullets: [
      'Penrose is an American start-up developing AI agents for real-time construction schedule controls.',
      'Responsible for front-end development using the React framework.',
    ],
    accent: '#4df0e0',
    tag: 'AI · React',
  },
]

const projects = [
  {
    title: 'treeSimulator',
    href: 'https://github.com/Zyndesu233/treeSimulator',
    period: 'Mar 2026 — May 2026',
    role: 'Software Developer',
    desc: 'A command-line tool that visualises tree-like data structures with an interactive REPL. AVL trees and red-black trees are implemented in C, letting users observe live structural changes after each insert or delete.',
    tags: ['C', 'Data Structures', 'CLI', 'REPL', 'AVL Tree', 'Red-Black Tree'],
    accent: '#9b6dff',
  },
  {
    title: 'XXX Paper',
    href: '#',
    period: 'Jul 2025 — Feb 2026',
    role: 'Full Stack Developer',
    desc: 'A web-based AI essay-marking agent. The initial prototype was built with Express.js, EJS, and MongoDB; later fully reconstructed in the Next.js framework for improved performance and maintainability.',
    tags: ['Next.js', 'Express.js', 'MongoDB', 'EJS', 'AI', 'Full Stack'],
    accent: '#e879a0',
  },
  {
    title: 'Cultural Dessert',
    href: '#',
    period: 'Nov 2025 — Dec 2025',
    role: 'Front-end Developer',
    desc: 'A single-page application that allows users to search for cultural activities in Hong Kong. Built with React, React Router, and TypeScript.',
    tags: ['React', 'React Router', 'TypeScript', 'SPA'],
    accent: '#4df0e0',
  },
]

const awards = [
  {
    title: 'Second Runner-up',
    event: 'CUHK Cybersecurity CTF Competition — CUHK Division',
    year: '2024',
    desc: 'Demonstrated cybersecurity skills in web security, SQL injection, and digital forensics.',
    accent: '#f5c842',
  },
  {
    title: 'Merit',
    event: '8th La Salle – Pui Ching Programming Challenge',
    year: '2024',
    desc: 'Problem-solving in C++ with teammates; tackled dynamic programming and graph theory challenges.',
    accent: '#9b6dff',
  },
]

const techStack = [
  { name: 'C / C++',       icon: '⚙️',  accent: '#9b6dff' },
  { name: 'TypeScript',    icon: '🔷',  accent: '#4df0e0' },
  { name: 'React',         icon: '⚛️',  accent: '#e879a0' },
  { name: 'Next.js',       icon: '▲',   accent: '#9b6dff' },
  { name: 'Express.js',    icon: '🚂',  accent: '#4df0e0' },
  { name: 'MongoDB',       icon: '🍃',  accent: '#6daa45' },
  { name: 'Python',        icon: '🐍',  accent: '#f5c842' },
  { name: 'Git / GitHub',  icon: '🌿',  accent: '#e879a0' },
  { name: 'Cybersecurity', icon: '🔐',  accent: '#9b6dff' },
]

export default function ITPage() {
  const heroRef = useRef<HTMLHeadingElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const subRef  = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 })
    if (heroRef.current) {
      tl.fromTo(
        heroRef.current,
        { y: 60, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
        { y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)', duration: 1.1, ease: 'power4.out' },
      )
    }
    if (subRef.current) {
      tl.fromTo(subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5',
      )
    }
    if (lineRef.current) {
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.4, ease: 'power3.out', delay: 0.9, transformOrigin: 'left center' },
      )
    }
  }, [])

  return (
    <main className="relative z-10 pt-28 pb-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* PAGE HEADER */}
        <div className="mb-24">
          <p className="text-xs tracking-[0.4em] text-[#9b6dff] mb-5 uppercase">/ IT-Related</p>
          <h1
            ref={heroRef}
            className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-none mb-6"
            style={{ fontFamily: "'Cinzel', serif", opacity: 0 }}
          >
            <span className="gradient-text">Code &amp;</span>
            <br />
            <span className="text-white">Craft</span>
          </h1>
          <div
            ref={lineRef}
            className="h-px bg-gradient-to-r from-[#9b6dff] via-[#e879a0] to-transparent mb-8"
            style={{ transform: 'scaleX(0)' }}
          />
          <p
            ref={subRef}
            className="text-white/50 max-w-xl leading-relaxed text-[clamp(1rem,1.5vw,1.15rem)]"
            style={{ opacity: 0 }}
          >
            CS student at CUHK · front-end engineer · systems tinkerer.
            I build things with code — from C data-structure libraries to
            full-stack web applications.
          </p>
        </div>

        {/* TECH STACK */}
        <RevealSection className="mb-24">
          <SectionLabel color="#4df0e0">Tech Stack</SectionLabel>
          <div className="flex flex-wrap gap-3 mt-5">
            {techStack.map(({ name, icon, accent }) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition-all duration-300 hover:scale-105"
                style={{ color: accent, borderColor: `${accent}35`, background: `${accent}0f` }}
              >
                <span aria-hidden="true">{icon}</span>
                {name}
              </span>
            ))}
          </div>
        </RevealSection>

        {/* WORK EXPERIENCE */}
        <div className="mb-24">
          <RevealSection>
            <SectionLabel color="#f5c842">Work Experience</SectionLabel>
            <SectionHeading>Where I've Worked</SectionHeading>
          </RevealSection>
          <div className="relative mt-10 space-y-6">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#9b6dff]/60 via-[#e879a0]/40 to-transparent hidden md:block" />
            {experiences.map(({ role, company, url, period, bullets, accent, tag }, i) => (
              <RevealSection key={company} delay={i * 0.12}>
                <div className="md:pl-14 relative">
                  <div
                    className="absolute left-3.5 top-6 w-3 h-3 rounded-full -translate-x-1/2 hidden md:block ring-2 ring-[#030308]"
                    style={{ background: accent }}
                  />
                  <GlowCard accentColor={accent} className="p-7">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-base font-bold text-white mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
                          {role}
                        </h3>
                        <a href={url} target="_blank" rel="noopener noreferrer"
                          className="text-sm transition-colors duration-200" style={{ color: accent }}>
                          {company} ↗
                        </a>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                        <span className="text-xs font-mono px-3 py-1 rounded-full border"
                          style={{ color: accent, borderColor: `${accent}40`, background: `${accent}12` }}>
                          {period}
                        </span>
                        <span className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full"
                          style={{ color: accent, background: `${accent}18` }}>
                          {tag}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-3 text-sm text-white/55 leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: accent }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </GlowCard>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <div className="mb-24">
          <RevealSection>
            <SectionLabel color="#e879a0">Projects</SectionLabel>
            <SectionHeading>What I've Built</SectionHeading>
          </RevealSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {projects.map(({ title, href, period, role, desc, tags, accent }, i) => (
              <RevealSection key={title} delay={i * 0.09}>
                <GlowCard accentColor={accent} className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-base font-bold text-white leading-tight" style={{ fontFamily: "'Cinzel', serif" }}>
                      {title}
                    </h3>
                    {href !== '#' && (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        aria-label={`View ${title} on GitHub`}
                        className="shrink-0 mt-0.5 transition-colors duration-200 hover:opacity-80"
                        style={{ color: accent }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[10px] tracking-widest uppercase font-mono" style={{ color: accent }}>{role}</span>
                    <span className="text-[10px] text-white/30 font-mono">{period}</span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                      <span key={tag} className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full font-mono"
                        style={{ color: accent, background: `${accent}18`, border: `1px solid ${accent}30` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* AWARDS */}
        <div className="mb-24">
          <RevealSection>
            <SectionLabel color="#9b6dff">Recognition</SectionLabel>
            <SectionHeading>Awards</SectionHeading>
          </RevealSection>
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {awards.map(({ title, event, year, desc, accent }, i) => (
              <RevealSection key={event} delay={i * 0.12}>
                <GlowCard accentColor={accent} className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <p className="text-2xl font-black" style={{ fontFamily: "'Cinzel', serif", color: accent }}>{title}</p>
                    <span className="shrink-0 text-xs font-mono px-3 py-1.5 rounded-full border"
                      style={{ color: accent, borderColor: `${accent}40`, background: `${accent}12` }}>{year}</span>
                  </div>
                  <p className="text-white/75 text-sm font-semibold mb-2">{event}</p>
                  <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                </GlowCard>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* EDUCATION CALLOUT */}
        <RevealSection className="mb-24">
          <GlowCard accentColor="#4df0e0" className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <p className="text-xs tracking-[0.4em] text-[#4df0e0] mb-3 uppercase">Education</p>
                <h3 className="text-xl font-black text-white mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
                  The Chinese University of Hong Kong
                </h3>
                <p className="text-white/55 text-sm mb-1">B.Sc. Computer Science · Aug 2024 — Present</p>
                <p className="text-white/40 text-sm">Sha Tin, New Territories, Hong Kong</p>
              </div>
              <div className="shrink-0 flex flex-col items-center gap-1">
                <p className="text-4xl font-black" style={{ fontFamily: "'Cinzel', serif", color: '#4df0e0' }}>3.509</p>
                <p className="text-xs tracking-widest text-white/40 uppercase">GPA / 4.000</p>
              </div>
            </div>
          </GlowCard>
        </RevealSection>

        {/* GITHUB CTA */}
        <RevealSection>
          <div className="rounded-2xl border border-[#9b6dff]/20 bg-[#0d0d1a]/60 p-10 md:p-14 text-center backdrop-blur-sm relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(155,109,255,0.1) 0%, transparent 70%)' }} />
            <p className="text-xs tracking-[0.4em] text-[#9b6dff] mb-3 uppercase">Open Source</p>
            <h3 className="text-2xl font-black mb-3 text-white" style={{ fontFamily: "'Cinzel', serif" }}>
              See More on GitHub
            </h3>
            <p className="text-white/45 text-sm mb-7 max-w-md mx-auto">
              Source code, experiments, and side projects live at
              <span className="text-[#9b6dff]"> github.com/Zyndesu233</span>.
            </p>
            <a href="https://github.com/Zyndesu233" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{ background: 'linear-gradient(135deg, #9b6dff, #e879a0)', color: '#fff' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              github.com/Zyndesu233
            </a>
          </div>
        </RevealSection>

      </div>
    </main>
  )
}

function SectionLabel({ children, color }: { children: React.ReactNode; color: string }) {
  return <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color }}>{children}</p>
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-black text-white" style={{ fontFamily: "'Cinzel', serif" }}>
      {children}
    </h2>
  )
}