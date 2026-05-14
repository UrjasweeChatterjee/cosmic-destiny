import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

const zodiacs = [
  { sym: '♈', name: 'Aries', dates: 'Mar 21 – Apr 19', el: 'Fire', trait: 'Bold, Ambitious, Courageous', color: '#ef4444', glow: 'rgba(239,68,68,0.3)' },
  { sym: '♉', name: 'Taurus', dates: 'Apr 20 – May 20', el: 'Earth', trait: 'Patient, Reliable, Devoted', color: '#22c55e', glow: 'rgba(34,197,94,0.3)' },
  { sym: '♊', name: 'Gemini', dates: 'May 21 – Jun 20', el: 'Air', trait: 'Versatile, Curious, Adaptable', color: '#f5c842', glow: 'rgba(245,200,66,0.3)' },
  { sym: '♋', name: 'Cancer', dates: 'Jun 21 – Jul 22', el: 'Water', trait: 'Intuitive, Compassionate, Loyal', color: '#06b6d4', glow: 'rgba(6,182,212,0.3)' },
  { sym: '♌', name: 'Leo', dates: 'Jul 23 – Aug 22', el: 'Fire', trait: 'Creative, Passionate, Leader', color: '#f59e0b', glow: 'rgba(245,158,11,0.3)' },
  { sym: '♍', name: 'Virgo', dates: 'Aug 23 – Sep 22', el: 'Earth', trait: 'Analytical, Meticulous, Helpful', color: '#8b5cf6', glow: 'rgba(139,92,246,0.3)' },
  { sym: '♎', name: 'Libra', dates: 'Sep 23 – Oct 22', el: 'Air', trait: 'Diplomatic, Gracious, Fair', color: '#ec4899', glow: 'rgba(236,72,153,0.3)' },
  { sym: '♏', name: 'Scorpio', dates: 'Oct 23 – Nov 21', el: 'Water', trait: 'Powerful, Magnetic, Resourceful', color: '#dc2626', glow: 'rgba(220,38,38,0.3)' },
  { sym: '♐', name: 'Sagittarius', dates: 'Nov 22 – Dec 21', el: 'Fire', trait: 'Optimistic, Adventurous, Free', color: '#7c3aed', glow: 'rgba(124,58,237,0.3)' },
  { sym: '♑', name: 'Capricorn', dates: 'Dec 22 – Jan 19', el: 'Earth', trait: 'Disciplined, Responsible, Wise', color: '#64748b', glow: 'rgba(100,116,139,0.3)' },
  { sym: '♒', name: 'Aquarius', dates: 'Jan 20 – Feb 18', el: 'Air', trait: 'Original, Humanitarian, Visionary', color: '#0ea5e9', glow: 'rgba(14,165,233,0.3)' },
  { sym: '♓', name: 'Pisces', dates: 'Feb 19 – Mar 20', el: 'Water', trait: 'Empathetic, Artistic, Spiritual', color: '#6366f1', glow: 'rgba(99,102,241,0.3)' },
]

export default function ZodiacCards() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section" ref={ref} style={{ background: 'linear-gradient(180deg, transparent, rgba(26,0,64,0.2), transparent)' }}>
      <style>{`
        .zodiac-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          margin-top: 48px;
        }
        .zodiac-card {
          padding: 24px 16px;
          border-radius: 18px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(20px);
          text-align: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }
        .zodiac-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, var(--zc, rgba(139,92,246,0.15)) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .zodiac-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: var(--zc-border, rgba(139,92,246,0.4));
          box-shadow: 0 20px 50px var(--zc-glow, rgba(139,92,246,0.2));
        }
        .zodiac-card:hover::before { opacity: 1; }
        .zodiac-sym {
          font-size: 2.2rem;
          margin-bottom: 10px;
          display: block;
          transition: transform 0.4s ease;
        }
        .zodiac-card:hover .zodiac-sym { transform: scale(1.2) rotate(10deg); }
        .zodiac-name {
          font-family: 'Cinzel', serif;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 4px;
          transition: color 0.3s;
        }
        .zodiac-dates {
          font-size: 0.65rem;
          color: rgba(200,185,240,0.5);
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }
        .zodiac-element {
          display: inline-flex;
          padding: 3px 10px;
          border-radius: 50px;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(200,185,240,0.7);
        }
        .zodiac-trait {
          font-size: 0.7rem;
          color: rgba(200,185,240,0.5);
          margin-top: 8px;
          line-height: 1.5;
          font-style: italic;
          display: none;
        }
        .zodiac-card:hover .zodiac-trait { display: block; }
        @media (max-width: 1024px) { .zodiac-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 640px) { .zodiac-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; } }
        @media (max-width: 400px) { .zodiac-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>

      <div className="container">
        <div style={{ textAlign: 'center', opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>The Twelve Celestial Signs</div>
          <h2 className="section-title">Explore the <span className="text-gold">Zodiac</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Each zodiac sign carries unique cosmic energy, ancient wisdom, and celestial destiny. Discover yours.
          </p>
        </div>

        <div className="zodiac-grid">
          {zodiacs.map((z, i) => (
            <Link to="/services" key={z.name} className="zodiac-card" style={{
              '--zc': `${z.glow.replace('0.3', '0.15')}`,
              '--zc-border': `${z.glow.replace('0.3', '0.5')}`,
              '--zc-glow': z.glow,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.6s ${i * 0.06}s ease, transform 0.6s ${i * 0.06}s ease`,
            }}>
              <span className="zodiac-sym">{z.sym}</span>
              <div className="zodiac-name" style={{ color: z.color }}>{z.name}</div>
              <div className="zodiac-dates">{z.dates}</div>
              <span className="zodiac-element">{z.el}</span>
              <div className="zodiac-trait">{z.trait}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
