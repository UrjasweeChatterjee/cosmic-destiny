import { useScrollReveal, useCounter } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import { Award, Heart, Globe, Star, Users, Clock } from 'lucide-react'

const astrologers = [
  { name: 'Dr. Rajesh Sharma', title: 'Vedic Astrology Master', exp: '25 Years', spec: 'Kundli & Predictions', emoji: '🧙‍♂️', sign: '♌' },
  { name: 'Priti Devi', title: 'Tarot & Numerology Expert', exp: '18 Years', spec: 'Tarot & Numerology', emoji: '🔮', sign: '♍' },
  { name: 'Anand Joshi', title: 'Palmist & Vastu Consultant', exp: '22 Years', spec: 'Palm Reading & Vastu', emoji: '✋', sign: '♏' },
  { name: 'Dr. Meera Krishnan', title: 'Jyotish Vidwan', exp: '30 Years', spec: 'Marriage & Career', emoji: '🌙', sign: '♋' },
]

const timeline = [
  { year: '2005', event: 'Founded by Dr. Rajesh Sharma in Mumbai with a vision to make authentic Vedic astrology accessible to all.' },
  { year: '2008', event: 'Expanded to online consultations, reaching clients across India and neighboring countries.' },
  { year: '2012', event: 'Launched multilingual services — Hindi, English, Tamil, Telugu — serving over 10,000 clients.' },
  { year: '2016', event: 'Opened offices in Delhi, Bangalore, and a global office in London, UK.' },
  { year: '2020', event: 'Launched the digital platform with AI-assisted chart generation and instant readings.' },
  { year: '2025', event: 'Celebrating 20 years with 50,000+ transformed lives across 60+ countries worldwide.' },
]

function StatBadge({ val, suf, label, start }) {
  const count = useCounter(val, 2000, start)
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'Cinzel, serif', fontSize: '2.5rem', fontWeight: '800', background: 'linear-gradient(135deg, #f5c842, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        {count.toLocaleString()}{suf}
      </div>
      <div style={{ fontSize: '0.75rem', color: 'rgba(200,185,240,0.55)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4 }}>{label}</div>
    </div>
  )
}

export default function About() {
  const [heroRef, heroVis] = useScrollReveal(0.1)
  const [statsRef, statsVis] = useScrollReveal()
  const [teamRef, teamVis] = useScrollReveal()
  const [timeRef, timeVis] = useScrollReveal()
  const [philRef, philVis] = useScrollReveal()

  return (
    <div>
      <style>{`
        .about-hero {
          min-height: 60vh;
          display: flex;
          align-items: center;
          padding: 140px 0 80px;
          background: radial-gradient(ellipse at 50% 0%, rgba(45,27,105,0.5) 0%, transparent 70%);
          text-align: center;
          position: relative;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 48px;
        }
        .team-card {
          padding: 36px 24px;
          border-radius: 20px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(20px);
          text-align: center;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .team-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #f5c842, #8b5cf6);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .team-card:hover {
          transform: translateY(-8px);
          border-color: rgba(245,200,66,0.3);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .team-card:hover::before { opacity: 1; }
        .team-avatar {
          width: 88px; height: 88px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(139,92,246,0.3), rgba(245,200,66,0.2));
          border: 2px solid rgba(245,200,66,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin: 0 auto 20px;
          transition: transform 0.4s;
        }
        .team-card:hover .team-avatar { transform: scale(1.1); }
        .timeline-item {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 32px;
          margin-bottom: 32px;
          position: relative;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: 49px;
          top: 40px;
          bottom: -32px;
          width: 1px;
          background: linear-gradient(180deg, rgba(139,92,246,0.4), transparent);
        }
        .timeline-item:last-child::before { display: none; }
        .timeline-year {
          font-family: 'Cinzel', serif;
          font-size: 1.1rem;
          font-weight: '700';
          color: #f5c842;
          text-align: right;
          padding-top: 20px;
        }
        .timeline-content {
          padding: 20px 24px;
          border-radius: 16px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(10px);
          font-size: '0.95rem';
          color: rgba(200,185,240,0.8);
          line-height: 1.7;
          transition: all 0.3s ease;
        }
        .timeline-content:hover {
          border-color: rgba(139,92,246,0.3);
          transform: translateX(4px);
        }
        .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
        }
        .phil-card {
          padding: 32px 24px;
          border-radius: 18px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(20px);
          text-align: center;
          transition: all 0.4s ease;
        }
        .phil-card:hover {
          border-color: rgba(139,92,246,0.3);
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(91,33,182,0.15);
        }
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 40px;
        }
        .trust-item {
          padding: 24px 20px;
          border-radius: 16px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          text-align: center;
          transition: all 0.3s ease;
        }
        .trust-item:hover { border-color: rgba(245,200,66,0.3); transform: translateY(-4px); }
        .mission-vision {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 40px;
        }
        @media (max-width: 1100px) { .team-grid { grid-template-columns: repeat(2, 1fr); } .trust-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) {
          .team-grid, .philosophy-grid, .mission-vision { grid-template-columns: 1fr; }
          .trust-grid { grid-template-columns: repeat(2, 1fr); }
          .timeline-item { grid-template-columns: 70px 1fr; gap: 16px; }
        }
      `}</style>

      {/* Hero */}
      <div className="about-hero" ref={heroRef}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ opacity: heroVis ? 1 : 0, transform: heroVis ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.8s ease' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Sacred Story</div>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', textAlign: 'center' }}>
              About <span className="text-gold">Cosmic Destiny</span>
            </h1>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
              Born from a deep reverence for ancient Vedic wisdom and a passion for illuminating the human journey, we have been the guiding stars for thousands of souls navigating life's cosmic tapestry.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div style={{ opacity: heroVis ? 1 : 0, transition: 'opacity 0.8s 0.2s ease' }}>
              <div className="section-label">Our Origin</div>
              <h2 className="section-title">A Story Written <span className="text-gold">in the Stars</span></h2>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: 'rgba(200,185,240,0.8)', lineHeight: 1.9, marginBottom: 20 }}>
                Founded in 2005 by visionary astrologer Dr. Rajesh Sharma, Cosmic Destiny Astrology emerged from a sacred calling — to bridge the ancient cosmic science of Jyotish with the modern seeker's journey.
              </p>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: 'rgba(200,185,240,0.8)', lineHeight: 1.9 }}>
                What began as a small consultation practice in Mumbai has blossomed into a globally revered astrology institution, touching lives across six continents with the timeless wisdom of the celestial spheres.
              </p>
              <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">Book Consultation</Link>
                <Link to="/services" className="btn-secondary">Our Services</Link>
              </div>
            </div>
            <div style={{ position: 'relative', opacity: heroVis ? 1 : 0, transition: 'opacity 0.8s 0.4s ease' }}>
              <div style={{
                padding: 48, borderRadius: 28,
                background: 'linear-gradient(135deg, rgba(45,27,105,0.3), rgba(13,0,48,0.5))',
                border: '1px solid rgba(139,92,246,0.2)',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '6rem', animation: 'float 8s ease-in-out infinite', marginBottom: 20 }}>🌌</div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontStyle: 'italic', color: 'rgba(200,185,240,0.9)', lineHeight: 1.8 }}>
                  "The stars compel, they do not control. We help you understand the language of the cosmos and make empowered choices aligned with your soul's purpose."
                </div>
                <div style={{ marginTop: 20, fontFamily: 'Cinzel, serif', fontSize: '0.85rem', color: '#f5c842', letterSpacing: '0.1em' }}>— Dr. Rajesh Sharma, Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: 'linear-gradient(180deg, transparent, rgba(45,27,105,0.05), transparent)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Purpose</div>
            <h2 className="section-title">Mission & <span className="text-gold">Vision</span></h2>
          </div>
          <div className="mission-vision">
            {[
              { icon: '🎯', title: 'Our Mission', text: 'To deliver the most accurate, compassionate, and transformative astrological guidance available — making the ancient wisdom of Jyotish accessible to every soul seeking cosmic clarity and direction.' },
              { icon: '🔭', title: 'Our Vision', text: 'To be the world\'s most trusted cosmic guidance platform, where every individual can connect with the timeless intelligence of the universe to live a life of authentic purpose, abundant love, and profound peace.' },
            ].map(mv => (
              <div key={mv.title} style={{
                padding: '40px 36px',
                borderRadius: '24px',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                backdropFilter: 'blur(20px)',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 20 }}>{mv.icon}</div>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.3rem', fontWeight: '700', color: '#f5c842', marginBottom: 16 }}>{mv.title}</h3>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', color: 'rgba(200,185,240,0.8)', lineHeight: 1.9, fontStyle: 'italic' }}>{mv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" ref={statsRef}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
            padding: '48px 40px',
            borderRadius: 28,
            background: 'linear-gradient(135deg, rgba(45,27,105,0.2), rgba(29,78,216,0.1))',
            border: '1px solid rgba(139,92,246,0.2)',
            backdropFilter: 'blur(20px)',
            opacity: statsVis ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}>
            <StatBadge val={50000} suf="+" label="Happy Clients" start={statsVis} />
            <StatBadge val={20} suf="+" label="Years Experience" start={statsVis} />
            <StatBadge val={15} suf="+" label="Expert Astrologers" start={statsVis} />
            <StatBadge val={60} suf="+" label="Countries Served" start={statsVis} />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" ref={teamRef}>
        <div className="container">
          <div style={{ textAlign: 'center', opacity: teamVis ? 1 : 0, transition: 'opacity 0.8s ease' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>The Cosmic Council</div>
            <h2 className="section-title">Meet Our <span className="text-gold">Master Astrologers</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
              World-class astrologers with decades of experience and thousands of verified success stories.
            </p>
          </div>
          <div className="team-grid">
            {astrologers.map((a, i) => (
              <div key={a.name} className="team-card" style={{
                opacity: teamVis ? 1 : 0,
                transform: teamVis ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ${i * 0.12}s ease, transform 0.7s ${i * 0.12}s ease`,
              }}>
                <div style={{ position: 'absolute', top: 12, right: 14, fontSize: '1.3rem', opacity: 0.15 }}>{a.sign}</div>
                <div className="team-avatar">{a.emoji}</div>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: '600', color: 'white', marginBottom: 6 }}>{a.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#f5c842', letterSpacing: '0.05em', marginBottom: 12 }}>{a.title}</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.7rem', padding: '4px 12px', borderRadius: 50, background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#8b5cf6' }}>{a.exp}</span>
                  <span style={{ fontSize: '0.7rem', padding: '4px 12px', borderRadius: 50, background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.2)', color: '#f5c842' }}>{a.spec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" ref={timeRef} style={{ background: 'linear-gradient(180deg, transparent, rgba(29,78,216,0.03), transparent)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
            <div style={{ opacity: timeVis ? 1 : 0, transition: 'opacity 0.8s ease', position: 'sticky', top: 100 }}>
              <div className="section-label">Our Journey</div>
              <h2 className="section-title">Two Decades of <span className="text-gold">Cosmic Service</span></h2>
              <p className="section-subtitle" style={{ fontSize: '0.95rem' }}>
                From a humble Mumbai practice to a globally recognized astrology institution — our journey mirrors the cosmic cycles we study.
              </p>
            </div>
            <div style={{ opacity: timeVis ? 1 : 0, transform: timeVis ? 'translateX(0)' : 'translateX(40px)', transition: 'opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease' }}>
              {timeline.map((t, i) => (
                <div key={t.year} className="timeline-item">
                  <div className="timeline-year">{t.year}</div>
                  <div className="timeline-content">{t.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section" ref={philRef}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48, opacity: philVis ? 1 : 0, transition: 'opacity 0.8s ease' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Beliefs</div>
            <h2 className="section-title">Spiritual <span className="text-gold">Philosophy</span></h2>
          </div>
          <div className="philosophy-grid">
            {[
              { icon: '☯', title: 'As Above, So Below', text: 'The macrocosm of the universe is reflected in the microcosm of each individual soul. Your birth chart is the cosmic signature of your unique existence.' },
              { icon: '🌊', title: 'Karmic Wisdom', text: 'Every planetary position at your birth carries karmic significance — lessons from past lives, gifts, challenges, and the sacred contract of your soul\'s evolution.' },
              { icon: '✨', title: 'Free Will & Destiny', text: 'The stars illuminate the path, but you walk it. Astrology empowers you to make conscious choices that align with your highest cosmic purpose and potential.' },
            ].map((p, i) => (
              <div key={p.title} className="phil-card" style={{
                opacity: philVis ? 1 : 0,
                transform: philVis ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.7s ${i * 0.15}s ease, transform 0.7s ${i * 0.15}s ease`,
              }}>
                <div style={{ fontSize: '3rem', marginBottom: 20 }}>{p.icon}</div>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: '600', color: '#f5c842', marginBottom: 14 }}>{p.title}</div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', color: 'rgba(200,185,240,0.75)', lineHeight: 1.8, fontStyle: 'italic' }}>{p.text}</div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div style={{ marginTop: 60, opacity: philVis ? 1 : 0, transition: 'opacity 0.8s 0.4s ease' }}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.3rem', color: 'white' }}>Why Clients <span className="text-gold">Trust Us</span></h3>
            </div>
            <div className="trust-grid">
              {[
                { icon: <Award size={24} />, label: 'Award Winning' },
                { icon: <Heart size={24} />, label: '99% Satisfaction' },
                { icon: <Globe size={24} />, label: '60+ Countries' },
                { icon: <Clock size={24} />, label: '24/7 Support' },
              ].map(t => (
                <div key={t.label} className="trust-item">
                  <div style={{ color: '#f5c842', marginBottom: 10 }}>{t.icon}</div>
                  <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.85rem', color: 'white' }}>{t.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
