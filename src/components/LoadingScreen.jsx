export default function LoadingScreen({ loading }) {
  return (
    <div className={`loading-screen ${loading ? '' : 'hidden'}`}>
      <style>{`
        .loader-zodiac {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: #f5c842;
          border-right-color: #8b5cf6;
          animation: rotate-slow 1.2s linear infinite;
          position: relative;
        }
        .loader-zodiac::before {
          content: '✦';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-size: 2rem;
          color: #f5c842;
          animation: glow-pulse 1.5s ease-in-out infinite;
        }
        .loader-zodiac::after {
          content: '';
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          border: 1px solid transparent;
          border-bottom-color: rgba(245,200,66,0.4);
          animation: rotate-reverse 2s linear infinite;
        }
        .loading-title {
          font-family: 'Cinzel', serif;
          font-size: 1.4rem;
          font-weight: 700;
          background: linear-gradient(135deg, #f5c842, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.15em;
          text-align: center;
        }
        .loading-dots {
          display: flex;
          gap: 8px;
        }
        .loading-dots span {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #8b5cf6;
          animation: dotPulse 1.2s ease-in-out infinite;
        }
        .loading-dots span:nth-child(2) { animation-delay: 0.2s; background: #f5c842; }
        .loading-dots span:nth-child(3) { animation-delay: 0.4s; background: #06b6d4; }
        @keyframes dotPulse {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
      <div className="loader-zodiac" />
      <div className="loading-title">Cosmic Destiny Astrology</div>
      <div className="loading-dots">
        <span /><span /><span />
      </div>
    </div>
  )
}
