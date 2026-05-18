import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Sparkles, Sun, Moon, Link as LinkIcon } from 'lucide-react'

const gemstones = [
  {
    name: 'Ruby (Manik)',
    image: '/images/gemstone_ruby_1779097344070.png',
    planet: 'Sun',
    benefits: 'Boosts leadership, fame, vitality, and career growth.',
    color: '#ef4444'
  },
  {
    name: 'Yellow Sapphire',
    image: '/images/gemstone_yellow_sapphire_1779097406504.png',
    planet: 'Jupiter',
    benefits: 'Attracts wealth, wisdom, academic success, and marriage.',
    color: '#f5c842'
  },
  {
    name: 'Blue Sapphire',
    image: '/images/gemstone_blue_sapphire_1779097426224.png',
    planet: 'Saturn',
    benefits: 'Brings fast results, discipline, protection, and career stability.',
    color: '#3b82f6'
  },
  {
    name: 'Emerald (Panna)',
    image: '/images/gemstone_emerald_1779097360789.png',
    planet: 'Mercury',
    benefits: 'Enhances intelligence, communication, memory, and business.',
    color: '#10b981'
  }
]

export default function GemstoneSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section" ref={ref} style={{ background: 'var(--deep-space)' }}>
      <style>{`
        .gem-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 50px;
        }
        .gem-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .gem-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, var(--gem-color, rgba(255,255,255,0.1)) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s;
          pointer-events: none;
        }
        .gem-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255,255,255,0.2);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px var(--gem-color, rgba(255,255,255,0.1));
        }
        .gem-card:hover::before { opacity: 0.15; }
        .gem-img-wrapper {
          position: relative;
          padding-bottom: 75%;
          overflow: hidden;
          background: #020617;
        }
        .gem-img-wrapper img {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .gem-card:hover img {
          transform: scale(1.1);
        }
        .gem-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
          position: relative;
          z-index: 1;
        }
        .gem-planet {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: rgba(200,185,240,0.8);
          background: rgba(255,255,255,0.05);
          padding: 4px 12px;
          border-radius: 50px;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .gem-title {
          font-family: 'Cinzel', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }
        .gem-benefits {
          font-size: 0.85rem;
          color: rgba(200,185,240,0.7);
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }
        .gem-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          color: white;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .gem-btn:hover {
          background: var(--gradient-gold);
          color: #020617;
          border-color: transparent;
        }
        @media (max-width: 1200px) { .gem-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .gem-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="container">
        <div style={{ textAlign: 'center', opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Vedic Remedies</div>
          <h2 className="section-title">Astrological <span className="text-gold">Gemstones</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Balance your planetary energies and attract positivity with 100% authentic, unheated, and lab-certified gemstones suggested by our expert astrologers.
          </p>
        </div>

        <div className="gem-grid">
          {gemstones.map((gem, i) => (
            <div key={i} className="gem-card" style={{
              '--gem-color': gem.color,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transition: `all 0.6s ${i * 0.15}s ease`
            }}>
              <div className="gem-img-wrapper">
                <img src={gem.image} alt={gem.name} />
              </div>
              <div className="gem-content">
                <div>
                  <span className="gem-planet">
                    <Sparkles size={12} /> Ruling Planet: {gem.planet}
                  </span>
                </div>
                <h3 className="gem-title">{gem.name}</h3>
                <p className="gem-benefits">{gem.benefits}</p>
                <a href="#contact" className="gem-btn">
                  Consult for Gemstone
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
