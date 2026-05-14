import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

const services = [
  { icon: '🔯', name: 'Kundli Analysis', desc: 'Complete birth chart analysis revealing your cosmic blueprint, life purpose, and planetary influences.', price: '₹1,499', color: '#8b5cf6' },
  { icon: '🌙', name: 'Horoscope Reading', desc: 'Detailed celestial forecast for love, career, health and finance based on planetary transits.', price: '₹999', color: '#f5c842' },
  { icon: '🃏', name: 'Tarot Card Reading', desc: 'Ancient tarot wisdom unlocking hidden truths, future possibilities, and transformational guidance.', price: '₹799', color: '#ec4899' },
  { icon: '✋', name: 'Palm Reading', desc: 'Your hands reveal the cosmic story written before birth. Decode life lines, fate lines, and destiny.', price: '₹699', color: '#06b6d4' },
  { icon: '🔢', name: 'Numerology', desc: 'Discover the mystical power of numbers that govern your destiny, personality, and life path.', price: '₹599', color: '#f59e0b' },
  { icon: '💑', name: 'Love Compatibility', desc: 'Cosmic compatibility analysis for relationships, revealing soulmate connections and karmic bonds.', price: '₹1,199', color: '#ef4444' },
]

export default function FeaturedServices() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section" ref={ref}>
      <style>{`
        .fs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 56px;
        }
        .fs-card {
          padding: 36px 28px;
          border-radius: 20px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
        }
        .fs-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--fsc, #8b5cf6);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .fs-card:hover {
          transform: translateY(-8px);
          border-color: rgba(139,92,246,0.2);
          box-shadow: 0 24px 60px rgba(0,0,0,0.3), 0 0 40px var(--fsg, rgba(139,92,246,0.1));
        }
        .fs-card:hover::after { opacity: 1; }
        .fs-icon {
          font-size: 2.8rem;
          margin-bottom: 20px;
          display: block;
          transition: transform 0.4s ease;
        }
        .fs-card:hover .fs-icon { transform: scale(1.15) rotate(-5deg); }
        .fs-name {
          font-family: 'Cinzel', serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 12px;
        }
        .fs-desc {
          font-size: 0.9rem;
          color: rgba(200,185,240,0.7);
          line-height: 1.8;
          flex: 1;
          margin-bottom: 24px;
        }
        .fs-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }
        .fs-price {
          font-family: 'Cinzel', serif;
          font-size: 1.3rem;
          font-weight: 700;
        }
        .fs-btn {
          padding: 10px 22px;
          border-radius: 50px;
          border: 1px solid rgba(139,92,246,0.4);
          background: rgba(139,92,246,0.1);
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          letter-spacing: 0.05em;
        }
        .fs-btn:hover {
          background: rgba(139,92,246,0.25);
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(139,92,246,0.3);
        }
        @media (max-width: 900px) { .fs-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px) { .fs-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20,
          opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
          <div>
            <div className="section-label">Sacred Offerings</div>
            <h2 className="section-title">Our <span className="text-gold">Featured</span> Services</h2>
          </div>
          <Link to="/services" className="btn-secondary" style={{ marginBottom: 16 }}>View All Services →</Link>
        </div>

        <div className="fs-grid">
          {services.map((s, i) => (
            <div key={s.name} className="fs-card" style={{
              '--fsc': s.color,
              '--fsg': `${s.color}22`,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transition: `opacity 0.7s ${i * 0.1}s ease, transform 0.7s ${i * 0.1}s ease`,
            }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 80, height: 80,
                background: `radial-gradient(circle at 100% 0%, ${s.color}15, transparent 70%)` }} />
              <span className="fs-icon">{s.icon}</span>
              <div className="fs-name">{s.name}</div>
              <div className="fs-desc">{s.desc}</div>
              <div className="fs-footer">
                <span className="fs-price" style={{ color: s.color }}>{s.price}</span>
                <Link to="/contact" className="fs-btn">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
