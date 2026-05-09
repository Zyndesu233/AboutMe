import { useEffect, useRef } from 'react'

// ── Types ─────────────────────────────────────────────────────────────────────

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  alphaDir: number   // +1 fading in, -1 fading out (twinkle effect)
  color: string
}

// ── Constants ─────────────────────────────────────────────────────────────────

const PARTICLE_COUNT = 90
const COLORS = ['#9b6dff', '#e879a0', '#4df0e0', '#f5c842', '#ffffff']
const COLOR_WEIGHTS = [35, 25, 25, 10, 5] // probability weights (must sum to 100)
const MAX_SPEED = 0.35
const CONNECTION_DISTANCE = 120  // px — particles closer than this get connected
const CONNECTION_OPACITY  = 0.08 // max opacity of connection lines

// ── Weighted random color picker ──────────────────────────────────────────────

function pickColor(): string {
  const roll = Math.random() * 100
  let cumulative = 0
  for (let i = 0; i < COLORS.length; i++) {
    cumulative += COLOR_WEIGHTS[i]
    if (roll < cumulative) return COLORS[i]
  }
  return COLORS[0]
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []

    // ── Resize handler ──────────────────────────────────────────────────────
    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    // ── Spawn particles ─────────────────────────────────────────────────────
    const spawnParticles = () => {
      particles = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x:        Math.random() * canvas.width,
          y:        Math.random() * canvas.height,
          vx:       (Math.random() - 0.5) * MAX_SPEED * 2,
          vy:       (Math.random() - 0.5) * MAX_SPEED * 2,
          radius:   Math.random() * 1.6 + 0.4,
          alpha:    Math.random() * 0.5 + 0.1,
          alphaDir: Math.random() > 0.5 ? 1 : -1,
          color:    pickColor(),
        })
      }
    }
    spawnParticles()

    // ── Main draw loop ──────────────────────────────────────────────────────
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update + draw each particle
      for (const p of particles) {
        // Move
        p.x += p.vx
        p.y += p.vy

        // Wrap edges
        if (p.x < 0)             p.x = canvas.width
        if (p.x > canvas.width)  p.x = 0
        if (p.y < 0)             p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Twinkle — slowly pulse alpha
        p.alpha += p.alphaDir * 0.002
        if (p.alpha >= 0.65) { p.alpha = 0.65; p.alphaDir = -1 }
        if (p.alpha <= 0.05) { p.alpha = 0.05; p.alphaDir =  1 }

        // Draw glow dot
        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.fillStyle   = p.color
        ctx.shadowBlur  = 10
        ctx.shadowColor = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      // Draw connection lines between nearby particles
      ctx.save()
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DISTANCE) {
            // Fade line out as particles move apart
            const opacity = CONNECTION_OPACITY * (1 - dist / CONNECTION_DISTANCE)
            ctx.globalAlpha  = opacity
            ctx.strokeStyle  = a.color
            ctx.lineWidth    = 0.5
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      ctx.restore()

      animId = requestAnimationFrame(draw)
    }
    draw()

    // ── Cleanup ─────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      aria-hidden="true"
      role="presentation"
    />
  )
}