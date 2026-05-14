import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 24px',
      position: 'relative',
      zIndex: 1,
    }}>
      <style>{`
        .nf-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
      `}</style>

      {/* Glowing orb background */}
      <div className="nf-glow" style={{
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(91,33,182,0.15) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      }} />

      {/* Orbiting symbols */}
      <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto 40px' }}>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          border: '1px solid rgba(139,92,246,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '5rem',
            background: 'linear-gradient(135deg, #f5c842, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 30px rgba(245,200,66,0.4))',
          }}>404</span>
        </div>
        {['♈','♉','♊','♋'].map((s, i) => (
          <span key={i} style={{
            position: 'absolute',
            top: '50%', left: '50%',
            fontSize: '1rem',
            color: 'rgba(245,200,66,0.5)',
            animation: `orbit ${4 + i}s linear ${i * 1}s infinite`,
            transformOrigin: '0 0',
          }}>{s}</span>
        ))}
      </div>

      <div className="section-label" style={{ justifyContent: 'center', marginBottom: 16 }}>
        Lost in the Cosmos
      </div>

      <h1 style={{
        fontFamily: 'Cinzel, serif',
        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
        fontWeight: '700',
        color: 'white',
        marginBottom: 16,
        lineHeight: 1.2,
      }}>
        This Page Has <span style={{
          background: 'linear-gradient(135deg, #f5c842, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>Drifted Beyond</span> the Stars
      </h1>

      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.1rem',
        color: 'rgba(200,185,240,0.7)',
        lineHeight: 1.8,
        maxWidth: '500px',
        marginBottom: 40,
        fontStyle: 'italic',
      }}>
        Even the most skilled astrologer cannot locate this page in the celestial chart. The cosmic winds have carried it to another dimension.
      </p>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="btn-primary">
          ✦ Return to Earth
        </Link>
        <Link to="/contact" className="btn-secondary">
          Seek Cosmic Guidance
        </Link>
      </div>

      <div style={{
        marginTop: 48,
        display: 'flex',
        gap: 24,
        opacity: 0.4,
        fontSize: '1.5rem',
      }}>
        {['♈','♉','♊','♋','♌','♍'].map((s,i) => (
          <span key={i} style={{ animation: `twinkle ${2 + i * 0.3}s ease-in-out infinite` }}>{s}</span>
        ))}
      </div>
    </div>
  )
}
