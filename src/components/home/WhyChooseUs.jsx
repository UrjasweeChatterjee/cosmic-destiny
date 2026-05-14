import { useScrollReveal } from '../../hooks/useScrollReveal'
import { ShieldCheck, Clock, Globe, Heart, Star, Zap } from 'lucide-react'

const reasons = [
  { icon: ShieldCheck, title: 'Vedic Accuracy', desc: 'Our readings are based on authentic Vedic astrology traditions passed down through generations of master astrologers.' },
  { icon: Clock, title: '20+ Years Expertise', desc: 'Two decades of guiding thousands of souls through life\'s cosmic crossroads with precision and spiritual insight.' },
  { icon: Globe, title: 'Global Reach', desc: 'Serving clients across 60+ countries with multilingual consultations available around the clock, every day.' },
  { icon: Heart, title: 'Personalized Readings', desc: 'Every chart is uniquely analyzed. No generic predictions — your cosmic story is unlike anyone else\'s in the universe.' },
  { icon: Star, title: 'Certified Astrologers', desc: 'Our panel consists of internationally certified and award-winning astrologers with proven track records.' },
  { icon: Zap, title: 'Instant Clarity', desc: 'Get actionable cosmic insights immediately. We translate complex celestial language into clear, life-changing guidance.' },
]

export default function WhyChooseUs() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section" ref={ref}>
      <style>{`
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 60px;
        }
        .why-card {
          padding: 36px 28px;
          border-radius: 20px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(20px);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .why-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: radial-gradient(circle at 0% 0%, rgba(139,92,246,0.08) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .why-card:hover {
          border-color: rgba(139,92,246,0.3);
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(91,33,182,0.15);
        }
        .why-card:hover::before { opacity: 1; }
        .why-icon {
          width: 56px; height: 56px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(139,92,246,0.2), rgba(91,33,182,0.1));
          border: 1px solid rgba(139,92,246,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: #8b5cf6;
          transition: all 0.3s ease;
        }
        .why-card:hover .why-icon {
          background: linear-gradient(135deg, rgba(245,200,66,0.2), rgba(201,162,39,0.1));
          border-color: rgba(245,200,66,0.4);
          color: #f5c842;
          box-shadow: 0 8px 24px rgba(245,200,66,0.2);
        }
        .why-title {
          font-family: 'Cinzel', serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: white;
          margin-bottom: 12px;
        }
        .why-desc {
          font-size: 0.9rem;
          color: rgba(200,185,240,0.7);
          line-height: 1.8;
        }
        @media (max-width: 900px) { .why-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px) { .why-grid { grid-template-columns: 1fr; } }
        .why-intro { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-bottom: 0; }
        @media (max-width: 768px) { .why-intro { grid-template-columns: 1fr; gap: 32px; } }
      `}</style>

      <div className="container">
        <div className="why-intro" style={{
          opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease',
        }}>
          <div>
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title">The <span className="text-gold">Trusted</span> Choice for Cosmic Guidance</h2>
            <p className="section-subtitle">
              With over two decades of experience and 50,000+ happy souls guided, Cosmic Destiny Astrology is your most trusted partner in navigating the celestial blueprint of your life.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{
              padding: '40px',
              background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(45,27,105,0.2))',
              borderRadius: '24px',
              border: '1px solid rgba(139,92,246,0.2)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '5rem', marginBottom: 16, animation: 'float 6s ease-in-out infinite' }}>☯</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontStyle: 'italic', color: 'rgba(200,185,240,0.8)', lineHeight: 1.8 }}>
                "As above, so below. The cosmos within mirrors the cosmos without. We help you read both."
              </div>
              <div style={{ marginTop: 16, fontFamily: 'Cinzel, serif', fontSize: '0.8rem', color: '#f5c842', letterSpacing: '0.1em' }}>— Ancient Hermetic Wisdom</div>
            </div>
          </div>
        </div>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div key={r.title} className="why-card" style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transition: `opacity 0.7s ${0.1 + i * 0.1}s ease, transform 0.7s ${0.1 + i * 0.1}s ease`,
            }}>
              <div className="why-icon"><r.icon size={24} /></div>
              <div className="why-title">{r.title}</div>
              <div className="why-desc">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
