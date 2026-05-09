import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RevealSection from '../components/RevealSection'
import GlowCard from '../components/GlowCard'

gsap.registerPlugin(ScrollTrigger)

// ── Data ──────────────────────────────────────────────────────────────────────

const awards = [
  {
    title: '最佳辯論員',
    event: '聯校新秀辯論賽',
    year: '2019',
    accent: '#f5c842',
  },
  {
    title: '最佳辯論員',
    event: '爭鳴盃',
    year: '2020',
    accent: '#e879a0',
  },
  {
    title: '亞軍',
    event: '全港 1vs1 演辯之星挑戰賽',
    year: '2020',
    accent: '#9b6dff',
  },
  {
    title: '最佳辯論員',
    event: '聯校中文辯論比賽 常規賽',
    year: '2021',
    accent: '#4df0e0',
  },
  {
    title: '最佳辯論員',
    event: '不賭思議 III 中學組',
    year: '2021',
    accent: '#f5c842',
  },
  {
    title: '總決賽亞軍 · 甲組冠軍 · 小組賽最佳辯論員',
    event: '香港辯論超級聯賽',
    year: '2022',
    accent: '#e879a0',
  },
  {
    title: '總決賽亞軍 · 甲組冠軍 · 小組賽最佳辯論員',
    event: '香港辯論超級聯賽',
    year: '2023',
    accent: '#9b6dff',
  },
  {
    title: '最佳辯論員',
    event: '奇趣盃',
    year: '2024',
    accent: '#4df0e0',
  },
]

const experiences = [
  {
    role: '學生籌委',
    org: '演辯之星',
    year: '2023',
    desc: '協辦比賽，對舉辦辯論活動相關流程有所認識。',
    accent: '#9b6dff',
  },
  {
    role: '辯論工作坊導師',
    org: '小學暑期辯論工作坊',
    year: '2024',
    desc: '教導小學生辯論技巧，製作教材，培養學生辯技。',
    accent: '#4df0e0',
  },
  {
    role: '辯論隊導師',
    org: '東華三院黃鳳翎中學',
    year: '2024',
    desc: '帶領中學辯論隊，制定訓練計劃，提升隊員整體辯論水平。',
    accent: '#e879a0',
  },
]

const skills = [
  {
    title: '多語表達',
    body: '操流利廣東話、普通話及英文，能因應場合靈活切換語言，確保論點清晰傳達。',
    accent: '#9b6dff',
  },
  {
    title: '教學設計',
    body: '具備製作辯論教材的經驗，明白如何將複雜的辯論概念拆解，令學員易於掌握。',
    accent: '#e879a0',
  },
  {
    title: '賽事組織',
    body: '曾擔任籌委，熟悉辯論比賽的籌備流程，包括賽制設計、時間安排及現場協調。',
    accent: '#4df0e0',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function DebatePage() {
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

        {/* ── PAGE HEADER ───────────────────────────────────── */}
        <div className="mb-24">
          <p className="text-xs tracking-[0.4em] text-[#e879a0] mb-5 uppercase">
            / Debate-Related
          </p>
          <h1
            ref={heroRef}
            className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-none mb-6"
            style={{ fontFamily: "'Cinzel', serif", opacity: 0 }}
          >
            <span className="gradient-text">辯論 &amp;</span>
            <br />
            <span className="text-white">Debate</span>
          </h1>
          <div
            ref={lineRef}
            className="h-px bg-gradient-to-r from-[#e879a0] via-[#9b6dff] to-transparent mb-8"
            style={{ transform: 'scaleX(0)' }}
          />
          <p
            ref={subRef}
            className="text-white/50 max-w-xl leading-relaxed text-[clamp(1rem,1.5vw,1.15rem)]"
            style={{ opacity: 0 }}
          >
            中文辯論導師 · 多屆最佳辯論員得主 · 香港辯論超級聯賽冠軍。
            <br />
            畢業於荃灣官立中學，現為香港中文大學學生。
          </p>
        </div>

        {/* ── COACHING EXPERIENCE ───────────────────────────── */}
        <div className="mb-24">
          <RevealSection>
            <SectionLabel color="#4df0e0">相關經驗 / Experience</SectionLabel>
            <SectionHeading>Teaching &amp; Organising</SectionHeading>
          </RevealSection>

          <div className="relative mt-10 space-y-6">
            {/* Vertical timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#e879a0]/60 via-[#9b6dff]/40 to-transparent hidden md:block" />

            {experiences.map(({ role, org, year, desc, accent }, i) => (
              <RevealSection key={`${org}-${year}`} delay={i * 0.12}>
                <div className="md:pl-14 relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-3.5 top-6 w-3 h-3 rounded-full -translate-x-1/2 hidden md:block ring-2 ring-[#030308]"
                    style={{ background: accent }}
                  />
                  <GlowCard accentColor={accent} className="p-7">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div>
                        <h3
                          className="text-base font-bold text-white mb-1"
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
                          {role}
                        </h3>
                        <p className="text-sm" style={{ color: accent }}>{org}</p>
                      </div>
                      <span
                        className="shrink-0 text-xs font-mono px-3 py-1.5 rounded-full border self-start"
                        style={{ color: accent, borderColor: `${accent}40`, background: `${accent}12` }}
                      >
                        {year}
                      </span>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                  </GlowCard>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* ── AWARDS ────────────────────────────────────────── */}
        <div className="mb-24">
          <RevealSection>
            <SectionLabel color="#f5c842">相關獎項 / Awards</SectionLabel>
            <SectionHeading>Competition Record</SectionHeading>
          </RevealSection>

          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {awards.map(({ title, event, year, accent }, i) => (
              <RevealSection key={`${event}-${year}`} delay={i * 0.07}>
                <GlowCard accentColor={accent} className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p
                        className="font-black text-lg leading-snug mb-1"
                        style={{ fontFamily: "'Cinzel', serif", color: accent }}
                      >
                        {title}
                      </p>
                      <p className="text-white/60 text-sm">{event}</p>
                    </div>
                    <span
                      className="shrink-0 text-xs font-mono px-3 py-1.5 rounded-full border"
                      style={{ color: accent, borderColor: `${accent}40`, background: `${accent}12` }}
                    >
                      {year}
                    </span>
                  </div>
                </GlowCard>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* ── SKILLS ────────────────────────────────────────── */}
        <div className="mb-24">
          <RevealSection>
            <SectionLabel color="#9b6dff">個人技能 / Skills</SectionLabel>
            <SectionHeading>What I Bring</SectionHeading>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {skills.map(({ title, body, accent }, i) => (
              <RevealSection key={title} delay={i * 0.12}>
                <GlowCard accentColor={accent} className="p-6 h-full">
                  <div
                    className="w-8 h-1 rounded-full mb-4"
                    style={{ background: accent }}
                  />
                  <h3
                    className="text-base font-bold mb-3 text-white"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{body}</p>
                </GlowCard>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* ── QUOTE ─────────────────────────────────────────── */}
        <RevealSection>
          <div className="rounded-2xl border border-[#e879a0]/20 bg-[#0d0d1a]/60 p-10 md:p-14 backdrop-blur-sm text-center relative overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(232,121,160,0.08) 0%, transparent 70%)' }}
            />
            <p
              className="text-[clamp(1.1rem,2.5vw,1.8rem)] font-black leading-snug mb-4 text-white/90 italic"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              "辯論不是為了取勝，而是為了尋找真理。"
            </p>
            <p className="text-xs tracking-widest text-[#e879a0] uppercase mb-8">
              — 個人信念
            </p>

            {/* Contact strip */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-xs tracking-[0.4em] text-white/30 uppercase mb-4">聯絡 / Contact</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="mailto:ericchansuiki@gmail.com"
                  className="px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 hover:scale-105"
                  style={{ color: '#e879a0', borderColor: '#e879a040', background: '#e879a00f' }}
                >
                  ericchansuiki@gmail.com
                </a>
                <a
                  href="tel:67330816"
                  className="px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 hover:scale-105"
                  style={{ color: '#9b6dff', borderColor: '#9b6dff40', background: '#9b6dff0f' }}
                >
                  6733 0816
                </a>
              </div>
            </div>
          </div>
        </RevealSection>

      </div>
    </main>
  )
}

// ── Helper sub-components ─────────────────────────────────────────────────────

function SectionLabel({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color }}>
      {children}
    </p>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[clamp(1.5rem,3vw,2.5rem)] font-black text-white"
      style={{ fontFamily: "'Cinzel', serif" }}
    >
      {children}
    </h2>
  )
}