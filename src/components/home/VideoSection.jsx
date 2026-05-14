import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Play } from 'lucide-react'
import { useState } from 'react'

export default function VideoSection() {
  const [ref, visible] = useScrollReveal()
  const [playing, setPlaying] = useState(false)

  return (
    <section className="section" ref={ref} style={{ background: 'linear-gradient(180deg, transparent, rgba(29,78,216,0.04), transparent)' }}>
      <style>{`
        .video-wrapper {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          aspect-ratio: 16/7;
          max-width: 1000px;
          margin: 56px auto 0;
          cursor: pointer;
          box-shadow: 0 30px 100px rgba(0,0,0,0.5), 0 0 60px rgba(139,92,246,0.15);
          border: 1px solid rgba(139,92,246,0.2);
        }
        .video-bg {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
        }
        .video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(13,0,48,0.7) 0%, rgba(45,27,105,0.5) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          transition: opacity 0.3s;
        }
        .video-overlay:hover { background: linear-gradient(135deg, rgba(13,0,48,0.5) 0%, rgba(45,27,105,0.35) 100%); }
        .play-btn {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(245,200,66,0.9), rgba(201,162,39,0.9));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0d0030;
          transition: all 0.3s ease;
          animation: glow-pulse 3s ease-in-out infinite;
        }
        .play-btn:hover { transform: scale(1.15); }
        .video-bg-art {
          width: 100%; height: 100%;
          background: linear-gradient(135deg, #0d0030 0%, #1a0040 30%, #2d1b69 60%, #0d0030 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8rem;
          opacity: 0.3;
        }
        .highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 800px;
          margin: 40px auto 0;
        }
        .highlight-item {
          text-align: center;
          padding: 20px;
          border-radius: 14px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(10px);
        }
        @media (max-width: 640px) {
          .highlights { grid-template-columns: 1fr; }
          .video-wrapper { aspect-ratio: 16/10; }
        }
      `}</style>

      <div className="container">
        <div style={{ textAlign: 'center', opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>See Our Work</div>
          <h2 className="section-title">Witness the <span className="text-gold">Cosmic Journey</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Watch how thousands of lives have been transformed through the ancient art and science of astrology.
          </p>
        </div>

        <div className="video-wrapper" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
          transition: 'opacity 0.9s 0.2s ease, transform 0.9s 0.2s ease',
        }} onClick={() => setPlaying(!playing)}>
          <div className="video-bg-art">✦</div>
          <div className="video-overlay">
            <div className="play-btn"><Play size={28} fill="currentColor" /></div>
            <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.2rem', color: 'white', letterSpacing: '0.1em' }}>
              Cosmic Destiny – Our Story
            </div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(200,185,240,0.7)' }}>2:45 mins · Watch how we've changed lives</div>
          </div>
        </div>

        <div className="highlights" style={{
          opacity: visible ? 1 : 0, transition: 'opacity 0.8s 0.4s ease',
        }}>
          {[
            { icon: '🌟', val: '50K+', label: 'Lives Transformed' },
            { icon: '📚', val: '20+', label: 'Years of Wisdom' },
            { icon: '🌍', val: '60+', label: 'Countries Reached' },
          ].map(h => (
            <div key={h.label} className="highlight-item">
              <div style={{ fontSize: '1.8rem', marginBottom: 8 }}>{h.icon}</div>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.4rem', fontWeight: '700', color: '#f5c842' }}>{h.val}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(200,185,240,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
