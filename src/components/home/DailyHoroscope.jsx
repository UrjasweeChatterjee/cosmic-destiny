import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const today = new Date()
const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']

const horoscopes = {
  '♈ Aries': { el: '🔥', color: '#ef4444', desc: 'The cosmic energies align in your favor today. Mars, your ruling planet, ignites your ambitions. A powerful opportunity arises in career matters. Trust your instincts and take bold action.', lucky: '7, 14, 21', color_str: 'Crimson Red', planet: 'Mars' },
  '♉ Taurus': { el: '🌍', color: '#22c55e', desc: 'Venus blesses your relationships with harmonious energy. Financial matters look promising. A meaningful conversation today could open unexpected doors. Embrace stability while remaining open to growth.', lucky: '2, 11, 20', color_str: 'Emerald Green', planet: 'Venus' },
  '♊ Gemini': { el: '💨', color: '#f59e0b', desc: 'Mercury ignites your communication skills brilliantly. Ideas flow freely and conversations spark inspiration. The universe encourages you to share your thoughts authentically with the world.', lucky: '5, 13, 23', color_str: 'Golden Yellow', planet: 'Mercury' },
  '♋ Cancer': { el: '💧', color: '#06b6d4', desc: 'The Moon, your ruling celestial body, enhances your intuition magnificently. Family matters require your loving attention today. Trust the emotional wisdom that arises from your heart\'s deep center.', lucky: '3, 12, 21', color_str: 'Pearl White', planet: 'Moon' },
  '♌ Leo': { el: '🔥', color: '#f5c842', desc: 'The Sun shines brilliantly upon your natural charisma today. Creative endeavors flourish under this golden cosmic light. Your leadership qualities are recognized and admired by all who encounter you.', lucky: '1, 10, 19', color_str: 'Royal Gold', planet: 'Sun' },
  '♍ Virgo': { el: '🌍', color: '#8b5cf6', desc: 'Mercury sharpens your analytical mind to perfection. Details that others miss become clear pathways for you. Health routines established today will yield remarkable long-term benefits for your wellbeing.', lucky: '6, 15, 24', color_str: 'Deep Violet', planet: 'Mercury' },
}

const signs = Object.keys(horoscopes)

export default function DailyHoroscope() {
  const [ref, visible] = useScrollReveal()
  const [selected, setSelected] = useState(signs[0])
  const h = horoscopes[selected]

  return (
    <section className="section" ref={ref}>
      <style>{`
        .horoscope-section {
          background: linear-gradient(180deg, transparent 0%, rgba(45,27,105,0.05) 50%, transparent 100%);
        }
        .horoscope-date-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 48px;
          font-family: 'Cinzel', serif;
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          color: rgba(200,185,240,0.6);
        }
        .horoscope-date-bar::before, .horoscope-date-bar::after {
          content: '';
          height: 1px;
          width: 60px;
          background: linear-gradient(90deg, transparent, rgba(245,200,66,0.4));
        }
        .horoscope-date-bar::after {
          background: linear-gradient(90deg, rgba(245,200,66,0.4), transparent);
        }
        .sign-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 40px;
        }
        .sign-tab {
          padding: 10px 18px;
          border-radius: 50px;
          border: 1px solid rgba(139,92,246,0.2);
          background: rgba(255,255,255,0.03);
          color: rgba(200,185,240,0.7);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
        }
        .sign-tab:hover {
          background: rgba(139,92,246,0.15);
          border-color: rgba(139,92,246,0.4);
          color: white;
          transform: translateY(-2px);
        }
        .sign-tab.active {
          background: rgba(139,92,246,0.2);
          border-color: #8b5cf6;
          color: #f5c842;
          box-shadow: 0 4px 20px rgba(139,92,246,0.3);
        }
        .horoscope-card {
          max-width: 800px;
          margin: 0 auto;
          padding: 48px;
          border-radius: 24px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
        }
        .horoscope-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, var(--accent-color, #8b5cf6), transparent);
        }
        .horoscope-sign-icon {
          font-size: 4rem;
          margin-bottom: 16px;
          display: block;
          text-align: center;
        }
        .horoscope-meta {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .horoscope-meta-item {
          text-align: center;
          padding: 12px 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
        }
        .horoscope-meta-label {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(200,185,240,0.5);
          margin-bottom: 6px;
        }
        .horoscope-meta-value {
          font-family: 'Cinzel', serif;
          font-size: 0.95rem;
          color: #f5c842;
          font-weight: 600;
        }
        .star-rating {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-top: 16px;
        }
        .star-rating span {
          color: #f5c842;
          font-size: 1rem;
        }
      `}</style>

      <div className="container horoscope-section">
        <div style={{ textAlign: 'center', marginBottom: 16, opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Daily Cosmic Guidance</div>
          <h2 className="section-title" style={{ color: 'white' }}>
            Your Daily <span className="text-gold">Horoscope</span>
          </h2>
        </div>

        <div className="horoscope-date-bar">
          <span>✦</span>
          <span>{dayNames[today.getDay()]}, {monthNames[today.getMonth()]} {today.getDate()}, {today.getFullYear()}</span>
          <span>✦</span>
        </div>

        <div className="sign-tabs" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.8s 0.2s ease' }}>
          {signs.map(sign => (
            <button key={sign} className={`sign-tab ${selected === sign ? 'active' : ''}`} onClick={() => setSelected(sign)}>
              {sign}
            </button>
          ))}
        </div>

        <div className="horoscope-card" style={{
          '--accent-color': h.color,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s 0.3s ease, transform 0.8s 0.3s ease',
        }}>
          <div style={{ position: 'absolute', top: 20, right: 20, fontSize: '5rem', opacity: 0.05 }}>
            {selected.split(' ')[0]}
          </div>

          <span className="horoscope-sign-icon">{h.el}</span>

          <h3 style={{
            fontFamily: 'Cinzel, serif', fontSize: '1.8rem', fontWeight: '700',
            textAlign: 'center', marginBottom: 8, color: h.color,
          }}>
            {selected}
          </h3>

          <div className="star-rating">
            {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
          </div>

          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.15rem', color: 'rgba(200,185,240,0.9)',
            lineHeight: 1.9, textAlign: 'center',
            marginTop: 24, fontStyle: 'italic',
          }}>
            "{h.desc}"
          </p>

          <div className="horoscope-meta">
            <div className="horoscope-meta-item">
              <div className="horoscope-meta-label">Lucky Numbers</div>
              <div className="horoscope-meta-value">{h.lucky}</div>
            </div>
            <div className="horoscope-meta-item">
              <div className="horoscope-meta-label">Lucky Color</div>
              <div className="horoscope-meta-value">{h.color_str}</div>
            </div>
            <div className="horoscope-meta-item">
              <div className="horoscope-meta-label">Ruling Planet</div>
              <div className="horoscope-meta-value">{h.planet}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
