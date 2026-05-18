import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import { Award, Star, Users, CheckCircle } from 'lucide-react'

export default function AboutAstrologer() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section" ref={ref} style={{ background: 'linear-gradient(180deg, rgba(26,0,64,0.3), transparent)' }}>
      <style>{`
        .about-wrapper {
          display: flex;
          align-items: center;
          gap: 60px;
          margin-top: 40px;
        }
        .about-image-col {
          flex: 1;
          position: relative;
        }
        .about-image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          padding-bottom: 110%;
          border: 1px solid rgba(139,92,246,0.3);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 40px rgba(139,92,246,0.2);
        }
        .about-image-wrapper img {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .about-image-wrapper:hover img {
          transform: scale(1.05);
        }
        .about-experience-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: linear-gradient(135deg, #2d1b69, #0d0030);
          border: 1px solid rgba(245,200,66,0.4);
          padding: 24px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          animation: float 6s ease-in-out infinite;
        }
        .about-text-col {
          flex: 1;
        }
        .about-text-col p {
          color: rgba(200,185,240,0.85);
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 24px;
        }
        .trust-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 36px;
        }
        .trust-point {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.03);
          padding: 16px;
          border-radius: 12px;
          border: 1px solid rgba(139,92,246,0.1);
        }
        .trust-point svg {
          color: #f5c842;
        }
        .trust-point span {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 0.95rem;
          color: white;
        }
        @media (max-width: 968px) {
          .about-wrapper { flex-direction: column; }
          .about-image-col { width: 100%; max-width: 500px; margin: 0 auto 40px; }
          .about-experience-badge { right: 20px; bottom: -20px; }
        }
        @media (max-width: 500px) {
          .trust-points { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">
        <div className="about-wrapper" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.8s ease' }}>
          <div className="about-image-col">
            <div className="about-image-wrapper">
              <img src="/images/astrologer_portrait_1779097390501.png" alt="Expert Astrologer" />
            </div>
            <div className="about-experience-badge">
              <span style={{ fontSize: '2.5rem', fontFamily: 'Cinzel, serif', fontWeight: '800', color: '#f5c842', lineHeight: '1' }}>20+</span>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c8b9f0' }}>Years of Experience</span>
            </div>
          </div>
          
          <div className="about-text-col">
            <div className="section-label">Meet The Astrologer</div>
            <h2 className="section-title">Guidance by <span className="text-gold">Master</span> Astrologer</h2>
            <p>
              With over two decades of deep spiritual practice and celestial study, our lead astrologer provides profound insights into your past, present, and future. Through the ancient science of Vedic astrology, numerology, and tarot, we decode the universe's master plan for your life.
            </p>
            <p>
              Every consultation is a personalized, confidential, and transformative experience aimed at bringing clarity, peace, and prosperity to your journey.
            </p>
            
            <div className="trust-points">
              <div className="trust-point">
                <CheckCircle size={20} />
                <span>Certified Expert</span>
              </div>
              <div className="trust-point">
                <Users size={20} />
                <span>50,000+ Clients</span>
              </div>
              <div className="trust-point">
                <Award size={20} />
                <span>Global Recognition</span>
              </div>
              <div className="trust-point">
                <Star size={20} />
                <span>99% Accuracy</span>
              </div>
            </div>

            <Link to="/about" className="btn-primary">
              Know More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
