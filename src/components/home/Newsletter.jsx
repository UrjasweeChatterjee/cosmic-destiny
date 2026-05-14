import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Send, Sparkles } from 'lucide-react'

export default function Newsletter() {
  const [ref, visible] = useScrollReveal()
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const handle = e => {
    e.preventDefault()
    if (email) { setDone(true); setEmail('') }
  }

  return (
    <section className="section" ref={ref}>
      <style>{`
        .nl-box {
          max-width: 720px;
          margin: 0 auto;
          padding: 64px 56px;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(45,27,105,0.3) 0%, rgba(29,78,216,0.1) 50%, rgba(45,27,105,0.2) 100%);
          border: 1px solid rgba(139,92,246,0.25);
          backdrop-filter: blur(20px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .nl-box::before {
          content: '';
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 60%);
          animation: rotate-slow 20s linear infinite;
        }
        .nl-form {
          display: flex;
          gap: 12px;
          max-width: 480px;
          margin: 0 auto;
        }
        .nl-input {
          flex: 1;
          padding: 16px 24px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(139,92,246,0.3);
          border-radius: 50px;
          color: white;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .nl-input:focus { border-color: #8b5cf6; box-shadow: 0 0 20px rgba(139,92,246,0.2); }
        .nl-input::placeholder { color: rgba(200,185,240,0.4); }
        .benefits {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .benefit {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: rgba(200,185,240,0.6);
        }
        .benefit::before {
          content: '✦';
          color: #f5c842;
          font-size: 0.6rem;
        }
        @media (max-width: 640px) {
          .nl-box { padding: 40px 24px; }
          .nl-form { flex-direction: column; }
        }
      `}</style>

      <div className="container" ref={ref}>
        <div className="nl-box" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>✉️</div>
            <div className="section-label" style={{ justifyContent: 'center' }}>Stay Connected</div>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: '700', color: 'white', marginBottom: 12, lineHeight: 1.2 }}>
              Receive Your <span className="text-gold">Weekly Cosmic Forecast</span>
            </h2>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: 'rgba(200,185,240,0.75)', lineHeight: 1.8, marginBottom: 36, fontStyle: 'italic' }}>
              Join 30,000+ cosmic souls receiving personalized astrology insights, moon phase alerts, and exclusive offers every week.
            </p>

            {done ? (
              <div style={{
                padding: '20px 40px',
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: '16px',
                color: '#86efac',
                fontFamily: 'Cinzel, serif',
                fontSize: '1.1rem',
              }}>
                ✦ You're now part of the Cosmic Family!
              </div>
            ) : (
              <form className="nl-form" onSubmit={handle}>
                <input
                  className="nl-input"
                  type="email"
                  placeholder="Enter your cosmic email..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap', padding: '16px 28px' }}>
                  <Sparkles size={16} /> Subscribe
                </button>
              </form>
            )}

            <div className="benefits">
              <div className="benefit">Weekly Horoscopes</div>
              <div className="benefit">Moon Phase Alerts</div>
              <div className="benefit">Exclusive Offers</div>
              <div className="benefit">Cosmic Wisdom Tips</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
