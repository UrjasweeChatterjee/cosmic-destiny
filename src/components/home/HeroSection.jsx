import { Link } from 'react-router-dom'
import { Star, Sparkles, ChevronDown } from 'lucide-react'

const ZODIAC = [
  { sym: '♈', name: 'Aries' }, { sym: '♉', name: 'Taurus' }, { sym: '♊', name: 'Gemini' },
  { sym: '♋', name: 'Cancer' }, { sym: '♌', name: 'Leo' }, { sym: '♍', name: 'Virgo' },
  { sym: '♎', name: 'Libra' }, { sym: '♏', name: 'Scorpio' }, { sym: '♐', name: 'Sagittarius' },
  { sym: '♑', name: 'Capricorn' }, { sym: '♒', name: 'Aquarius' }, { sym: '♓', name: 'Pisces' },
]

export default function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
      background: 'radial-gradient(ellipse at 50% 0%, rgba(45,27,105,0.6) 0%, rgba(13,0,48,0.4) 40%, transparent 70%)',
    }}>
      <style>{`
        .hero-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        /* CSS-only zodiac wheel using absolute positioning + rotate-translate trick */
        .zodiac-wheel-container {
          position: absolute;
          width: min(680px, 88vw);
          height: min(680px, 88vw);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: rotate-slow 70s linear infinite;
        }
        .zodiac-ring-1 {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(139,92,246,0.12);
        }
        .zodiac-ring-2 {
          position: absolute;
          inset: 14%;
          border-radius: 50%;
          border: 1px dashed rgba(245,200,66,0.1);
          animation: rotate-reverse 1s linear infinite;
          animation-duration: inherit;
        }
        .zodiac-ring-3 {
          position: absolute;
          inset: 32%;
          border-radius: 50%;
          border: 1px solid rgba(6,182,212,0.08);
        }
        .zodiac-sign-outer {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 28px;
          height: 28px;
          margin: -14px 0 0 -14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(0.85rem, 1.8vw, 1.2rem);
          color: rgba(245,200,66,0.55);
          cursor: default;
          transition: color 0.3s;
          /* Counter-rotate so the sign always stays upright */
          animation: rotate-reverse 70s linear infinite;
        }
        .zodiac-sign-outer:hover {
          color: #f5c842;
          text-shadow: 0 0 20px rgba(245,200,66,0.9);
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: rgba(139,92,246,0.15);
          border: 1px solid rgba(139,92,246,0.3);
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #8b5cf6;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 28px;
          animation: fadeInUp 0.8s ease both;
        }
        .hero-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(2.2rem, 6vw, 5.5rem);
          font-weight: 800;
          line-height: 1.1;
          text-align: center;
          color: white;
          margin-bottom: 12px;
          animation: fadeInUp 0.9s 0.1s ease both;
        }
        .hero-title-accent {
          display: block;
          background: linear-gradient(135deg, #f5c842 0%, #ffd700 40%, #8b5cf6 80%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 2.5vw, 1.4rem);
          color: rgba(200,185,240,0.85);
          text-align: center;
          max-width: 620px;
          line-height: 1.85;
          margin: 0 auto 44px;
          animation: fadeInUp 1s 0.2s ease both;
          font-style: italic;
        }
        .hero-cta {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          animation: fadeInUp 1s 0.3s ease both;
        }
        .hero-moon {
          position: absolute;
          top: 8%;
          right: 8%;
          width: clamp(70px, 11vw, 130px);
          height: clamp(70px, 11vw, 130px);
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #f0eaff, #c0c0c0 40%, #4a3a7a 80%, #1a0040 100%);
          box-shadow: 0 0 40px rgba(192,192,192,0.25), 0 0 80px rgba(139,92,246,0.12), inset -8px -8px 16px rgba(0,0,0,0.4);
          animation: floatSlow 8s ease-in-out infinite;
        }
        .hero-scroll {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: rgba(200,185,240,0.45);
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          cursor: pointer;
        }
        .scroll-chevron {
          animation: bounce-y 2s ease-in-out infinite;
        }
        @keyframes bounce-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .sparkle-dot {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-stat-divider {
          width: 1px;
          height: 32px;
          background: rgba(139,92,246,0.3);
        }
        @media (max-width: 480px) {
          .hero-moon { top: 12%; right: 4%; }
        }
      `}</style>

      {/* Glow blobs */}
      <div className="hero-glow" style={{
        width: '700px', height: '700px',
        background: 'radial-gradient(circle, rgba(91,33,182,0.18) 0%, transparent 70%)',
        top: '-100px', left: '50%', transform: 'translateX(-50%)',
      }} />
      <div className="hero-glow" style={{
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(245,200,66,0.07) 0%, transparent 70%)',
        bottom: '5%', right: '5%',
      }} />
      <div className="hero-glow" style={{
        width: '250px', height: '250px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
        top: '20%', left: '5%',
      }} />

      {/* Moon */}
      <div className="hero-moon" />

      {/* Sparkle dots */}
      {[
        { top: '15%', left: '18%', c: '#f5c842', s: 4, d: 2.5, dl: 0 },
        { top: '25%', left: '82%', c: '#8b5cf6', s: 3, d: 3.5, dl: 0.5 },
        { top: '70%', left: '12%', c: '#06b6d4', s: 2, d: 4, dl: 1 },
        { top: '60%', left: '88%', c: '#f5c842', s: 3, d: 2, dl: 1.5 },
        { top: '80%', left: '55%', c: '#8b5cf6', s: 2, d: 3, dl: 0.8 },
        { top: '35%', left: '6%', c: '#06b6d4', s: 4, d: 3.5, dl: 2 },
      ].map((p, i) => (
        <div key={i} className="sparkle-dot" style={{
          width: p.s, height: p.s,
          background: p.c,
          top: p.top, left: p.left,
          animation: `twinkle ${p.d}s ease-in-out ${p.dl}s infinite`,
          opacity: 0.7,
          boxShadow: `0 0 ${p.s * 3}px ${p.c}`,
        }} />
      ))}

      {/* CSS Zodiac Wheel — pure CSS positioning, no window.innerWidth */}
      <div className="zodiac-wheel-container" aria-hidden="true">
        <div className="zodiac-ring-1" />
        <div className="zodiac-ring-2" />
        <div className="zodiac-ring-3" />
        {ZODIAC.map((z, i) => {
          const deg = (i / 12) * 360 - 90  // start from top
          return (
            <div key={z.name} className="zodiac-sign-outer" title={z.name} style={{
              transform: `rotate(${deg}deg) translateX(min(316px, 43vw)) rotate(${-deg}deg)`,
            }}>
              {z.sym}
            </div>
          )
        })}
      </div>

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px' }}>
        <div className="hero-badge">
          <Star size={12} fill="currentColor" /> Ancient Wisdom · Modern Guidance <Star size={12} fill="currentColor" />
        </div>

        <h1 className="hero-title">
          Unlock Your
          <span className="hero-title-accent">Cosmic Destiny</span>
        </h1>

        <p className="hero-subtitle">
          Discover the secrets written in the stars. Our master astrologers decode the universe's grand design to illuminate your path, reveal your purpose, and guide your sacred journey.
        </p>

        <div className="hero-cta">
          <Link to="/contact" className="btn-primary">
            <Sparkles size={16} /> Book Consultation
          </Link>
          <Link to="/services" className="btn-secondary">
            <Star size={16} /> Explore Horoscope
          </Link>
        </div>

        {/* Trust stats */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          marginTop: 52,
          flexWrap: 'wrap',
          animation: 'fadeInUp 1s 0.5s ease both',
        }}>
          {[
            { val: '50K+', label: 'Happy Clients' },
            null,
            { val: '20+', label: 'Years Experience' },
            null,
            { val: '99%', label: 'Satisfaction Rate' },
          ].map((stat, i) =>
            stat ? (
              <div key={stat.val} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.7rem', fontWeight: '800', color: '#f5c842', lineHeight: 1 }}>{stat.val}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(200,185,240,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 4 }}>{stat.label}</div>
              </div>
            ) : (
              <div key={i} className="hero-stat-divider" />
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span>Scroll</span>
        <span className="scroll-chevron"><ChevronDown size={16} /></span>
      </div>
    </section>
  )
}
