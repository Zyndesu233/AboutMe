import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

const links = [
  { to: '/', label: 'HOME' },
  { to: '/it', label: 'IT-RELATED' },
  { to: '/debate', label: 'DEBATE-RELATED' },
]

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Entrance animation on mount
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      )
    }
  }, [])

  // Frosted-glass effect on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030308]/90 backdrop-blur-md border-b border-[#9b6dff]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* ── Logo ── */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            aria-label="Home"
          >
            <rect width="32" height="32" rx="6" fill="#07070f" />
            <path
              d="M16 4 L26 28 L22 28 L16 14 L10 28 L6 28 Z"
              fill="url(#nav-logo-g)"
            />
            <line
              x1="11" y1="20" x2="21" y2="20"
              stroke="url(#nav-logo-g)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="nav-logo-g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%"   stopColor="#9b6dff" />
                <stop offset="100%" stopColor="#e879a0" />
              </linearGradient>
            </defs>
          </svg>
          <span
            className="text-sm font-semibold tracking-[0.2em] text-white/80 group-hover:text-white transition-colors duration-300"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            ERIC CHAN
          </span>
        </NavLink>

        {/* ── Desktop Links ── */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `relative text-xs tracking-[0.2em] font-medium transition-all duration-300 pb-1 ${
                    isActive
                      ? 'text-white'
                      : 'text-white/50 hover:text-white/90'
                  }`
                }
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {/* Active underline */}
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-px rounded-full bg-gradient-to-r from-[#9b6dff] to-[#e879a0] transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 min-w-[44px] min-h-[44px]"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-6 bg-white/70 transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-white/70 transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-white/70 transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#07070f]/95 backdrop-blur-md border-b border-[#9b6dff]/20`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1" role="list">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `block text-sm tracking-[0.2em] py-3 border-b border-white/5 last:border-0 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#9b6dff]'
                      : 'text-white/55 hover:text-white'
                  }`
                }
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}