import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  { name: 'Priya Sharma', location: 'Mumbai, India', sign: '♋', rating: 5, text: 'The kundli analysis was absolutely life-changing. The astrologer predicted my career shift months before it happened. The accuracy is simply remarkable. I have since referred all my family members to Cosmic Destiny.', avatar: '👩' },
  { name: 'Rahul Mehta', location: 'Delhi, India', sign: '♌', rating: 5, text: 'My marriage compatibility reading saved my relationship. The astrologer identified the cosmic challenges between us and gave us actionable guidance. We are now happily married and eternally grateful!', avatar: '👨' },
  { name: 'Sophie Anderson', location: 'London, UK', sign: '♍', rating: 5, text: 'As a skeptic, I was amazed by how accurate the reading was. The tarot session revealed patterns I had never consciously acknowledged. The spiritual insight I received was profound and transformative.', avatar: '👩‍🦱' },
  { name: 'Arjun Nair', location: 'Bangalore, India', sign: '♏', rating: 5, text: 'The numerology consultation helped me choose the right business name and launch date. My startup has grown 300% since following the cosmic guidance. Best investment I ever made in myself.', avatar: '🧑' },
  { name: 'Yuki Tanaka', location: 'Tokyo, Japan', sign: '♒', rating: 5, text: 'I had consultations across three countries and this was by far the most accurate and insightful. The online session was seamless and the astrologer\'s knowledge of Vedic and Western systems is unmatched.', avatar: '👩‍🦰' },
]

export default function Testimonials() {
  const [ref, visible] = useScrollReveal()
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx(i => (i + 1) % testimonials.length)
  const t = testimonials[idx]

  return (
    <section className="section" ref={ref} style={{ background: 'linear-gradient(180deg, transparent, rgba(45,27,105,0.05), transparent)' }}>
      <style>{`
        .testi-card {
          max-width: 800px;
          margin: 0 auto;
          padding: 56px;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
          border: 1px solid rgba(139,92,246,0.2);
          backdrop-filter: blur(20px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .testi-quote {
          position: absolute;
          top: 20px; left: 32px;
          font-size: 8rem;
          color: rgba(139,92,246,0.08);
          font-family: 'Cinzel', serif;
          line-height: 1;
        }
        .testi-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 32px;
        }
        .testi-nav-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(139,92,246,0.3);
          background: rgba(255,255,255,0.05);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }
        .testi-nav-btn:hover {
          background: rgba(139,92,246,0.2);
          border-color: #8b5cf6;
          transform: scale(1.1);
        }
        .testi-dots {
          display: flex;
          gap: 8px;
        }
        .testi-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(139,92,246,0.3);
          cursor: pointer;
          transition: all 0.3s;
        }
        .testi-dot.active {
          background: #f5c842;
          width: 24px;
          border-radius: 3px;
        }
        .testi-avatar {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(139,92,246,0.3), rgba(245,200,66,0.3));
          border: 2px solid rgba(245,200,66,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin: 0 auto 20px;
        }
        .testi-all-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 48px;
        }
        .testi-mini {
          padding: 24px;
          border-radius: 16px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        .testi-mini:hover {
          border-color: rgba(245,200,66,0.3);
          transform: translateY(-4px);
        }
        @media (max-width: 900px) { .testi-all-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px) {
          .testi-card { padding: 36px 24px; }
          .testi-all-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56, opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Client Stories</div>
          <h2 className="section-title">Voices from the <span className="text-gold">Cosmic Community</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Thousands of souls have found clarity, peace, and direction through our cosmic guidance.
          </p>
        </div>

        <div className="testi-card" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease',
        }}>
          <div className="testi-quote">"</div>
          <div className="testi-avatar">{t.avatar}</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 20 }}>
            {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="#f5c842" color="#f5c842" />)}
          </div>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontStyle: 'italic',
            color: 'rgba(200,185,240,0.9)',
            lineHeight: 1.9,
            marginBottom: 28,
            position: 'relative',
          }}>
            "{t.text}"
          </p>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: '600', color: '#f5c842', marginBottom: 4 }}>{t.name}</div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(200,185,240,0.5)' }}>{t.location} · {t.sign}</div>
        </div>

        <div className="testi-nav">
          <button className="testi-nav-btn" onClick={prev}><ChevronLeft size={18} /></button>
          <div className="testi-dots">
            {testimonials.map((_, i) => (
              <div key={i} className={`testi-dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} />
            ))}
          </div>
          <button className="testi-nav-btn" onClick={next}><ChevronRight size={18} /></button>
        </div>
      </div>
    </section>
  )
}
