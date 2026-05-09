import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import ParticleCanvas from './components/ParticleCanvas'
import Home from './pages/Home'
import ITPage from './pages/ITPage'
import DebatePage from './pages/DebatePage'

// ── Inner layout — uses useLocation safely inside <BrowserRouter> ─────────────

function AppLayout() {
  const location = useLocation()
  const mainRef  = useRef<HTMLDivElement>(null)

  // Page transition on route change
  useEffect(() => {
    const el = mainRef.current
    if (!el) return

    el.style.transition = 'none'
    el.style.opacity    = '0'
    el.style.transform  = 'translateY(16px)'

    // Force reflow before re-enabling transition
    void el.offsetHeight

    el.style.transition = 'opacity 0.45s cubic-bezier(0.16,1,0.3,1), transform 0.45s cubic-bezier(0.16,1,0.3,1)'
    el.style.opacity    = '1'
    el.style.transform  = 'translateY(0)'
  }, [location.pathname])

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <>
      {/* Fixed background layers */}
      <ParticleCanvas />
      <div className="noise-overlay" aria-hidden="true" />
      <div className="scanline"     aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Animated page wrapper */}
      <div ref={mainRef} style={{ opacity: 0 }}>
        <Routes>
          <Route path="/"       element={<Home />}       />
          <Route path="/it"     element={<ITPage />}     />
          <Route path="/debate" element={<DebatePage />} />
          <Route path="*"       element={<NotFound />}   />
        </Routes>
      </div>
    </>
  )
}

// ── Root — provides the Router context ────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

// ── 404 ───────────────────────────────────────────────────────────────────────

function NotFound() {
  return (
    <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-xs tracking-[0.4em] text-[#9b6dff] mb-4 uppercase">404</p>
      <h1
        className="font-black leading-none mb-6 text-white/10"
        style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(3rem,10vw,7rem)' }}
      >
        Lost
      </h1>
      <p className="text-white/40 text-sm mb-8 max-w-xs leading-relaxed">
        This page doesn't exist. Head back and explore something that does.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-105"
        style={{ background: 'linear-gradient(135deg, #9b6dff, #e879a0)', color: '#fff' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Go Home
      </Link>
    </main>
  )
}