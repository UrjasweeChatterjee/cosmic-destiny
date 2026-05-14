import { useScrollReveal, useCounter } from '../../hooks/useScrollReveal'

const stats = [
  { value: 50000, suffix: '+', label: 'Happy Clients', symbol: '✦' },
  { value: 20, suffix: '+', label: 'Years Experience', symbol: '☽' },
  { value: 60, suffix: '+', label: 'Countries Served', symbol: '✧' },
  { value: 99, suffix: '%', label: 'Satisfaction Rate', symbol: '⋆' },
  { value: 10, suffix: 'K+', label: 'Consultations', symbol: '♦' },
  { value: 15, suffix: '+', label: 'Expert Astrologers', symbol: '★' },
]

function StatItem({ stat, start }) {
  const count = useCounter(stat.value, 2000, start)
  return (
    <div style={{
      textAlign: 'center',
      padding: '32px 24px',
      borderRadius: '20px',
      background: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      backdropFilter: 'blur(20px)',
      transition: 'all 0.4s ease',
      position: 'relative',
      overflow: 'hidden',
    }} className="stat-card">
      <div style={{
        position: 'absolute', top: 10, right: 14,
        fontSize: '1.2rem', opacity: 0.08, color: '#f5c842',
      }}>{stat.symbol}</div>
      <div style={{
        fontFamily: 'Cinzel, serif',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: '800',
        background: 'linear-gradient(135deg, #f5c842, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1,
        marginBottom: 8,
      }}>
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div style={{
        fontSize: '0.8rem',
        color: 'rgba(200,185,240,0.65)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        fontFamily: 'Inter, sans-serif',
      }}>
        {stat.label}
      </div>
    </div>
  )
}

export default function StatsCounter() {
  const [ref, visible] = useScrollReveal()

  return (
    <section style={{ padding: '80px 0', position: 'relative', zIndex: 1 }} ref={ref}>
      <style>{`
        .stat-card:hover {
          transform: translateY(-6px);
          border-color: rgba(245,200,66,0.3) !important;
          box-shadow: 0 20px 50px rgba(91,33,182,0.2);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
        }
        @media (max-width: 1100px) { .stats-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 640px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>

      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(45,27,105,0.15) 0%, rgba(29,78,216,0.05) 50%, rgba(45,27,105,0.1) 100%)',
        borderTop: '1px solid rgba(139,92,246,0.1)',
        borderBottom: '1px solid rgba(139,92,246,0.1)',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Numbers</div>
          <h2 className="section-title">Trusted by <span className="text-gold">Thousands</span> Across the Globe</h2>
        </div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={stat.label} style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'scale(1)' : 'scale(0.8)',
              transition: `opacity 0.6s ${i * 0.1}s ease, transform 0.6s ${i * 0.1}s ease`,
            }}>
              <StatItem stat={stat} start={visible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
