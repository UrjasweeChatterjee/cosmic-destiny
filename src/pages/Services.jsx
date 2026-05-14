import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import { Star, Filter } from 'lucide-react'

const allServices = [
  {
    id: 1, icon: '🔯', name: 'Kundli Analysis', cat: 'Vedic',
    desc: 'Comprehensive birth chart analysis revealing planetary positions, doshas, yogas, and life predictions across 12 life areas.',
    long: 'The Kundli (birth chart) is the cosmic map of your life. Our expert astrologers analyze all 12 houses, planetary aspects, and special yogas to provide a complete life blueprint covering career, relationships, health, and spiritual evolution.',
    price: '₹1,499', duration: '60 mins', rating: 4.9, reviews: 2340,
    features: ['Complete Janma Kundali', 'Dasha Analysis', 'Gochara Predictions', 'Remedies Suggested', 'PDF Report Included'],
    color: '#8b5cf6',
  },
  {
    id: 2, icon: '🌙', name: 'Horoscope Reading', cat: 'Vedic',
    desc: 'Detailed yearly, monthly, and weekly horoscope based on your natal chart and current planetary transits.',
    long: 'Our detailed horoscope readings go far beyond sun sign forecasts. We analyze the precise transits of all planets through your natal houses, identifying the most auspicious periods for love, career, health, and financial decisions.',
    price: '₹999', duration: '45 mins', rating: 4.8, reviews: 3120,
    features: ['Yearly Overview', 'Monthly Forecasts', 'Planetary Transits', 'Lucky Periods', 'Auspicious Dates'],
    color: '#f5c842',
  },
  {
    id: 3, icon: '🃏', name: 'Tarot Card Reading', cat: 'Mystical',
    desc: 'Deep intuitive tarot readings revealing hidden truths, future possibilities, and subconscious patterns.',
    long: 'Our certified tarot masters use both the Major and Minor Arcana to provide profound insights into your current situation and future possibilities. Each card drawn opens a window into the archetypal energies influencing your life journey.',
    price: '₹799', duration: '45 mins', rating: 4.9, reviews: 1890,
    features: ['Celtic Cross Spread', 'Past/Present/Future', 'Love Readings', 'Career Path', 'Spiritual Guidance'],
    color: '#ec4899',
  },
  {
    id: 4, icon: '✋', name: 'Palm Reading', cat: 'Mystical',
    desc: 'Ancient palmistry revealing your life line, heart line, fate line, and the destiny written in your hands.',
    long: 'Palmistry (Hasta Samudrika Shastra) is a profound science of reading the topography of the hand. Our palmists analyze the lines, mounts, and shapes of both hands to reveal insights about your past, present potential, and karmic destiny.',
    price: '₹699', duration: '30 mins', rating: 4.7, reviews: 1250,
    features: ['Life Line Analysis', 'Heart & Head Lines', 'Fate Line Reading', 'Mount Analysis', 'Health Indicators'],
    color: '#06b6d4',
  },
  {
    id: 5, icon: '🔢', name: 'Numerology', cat: 'Mystical',
    desc: 'Discover the mystical power of numbers governing your destiny, personality, relationships, and life cycles.',
    long: 'Numerology is the divine science of numbers and their cosmic vibrations. We calculate your Life Path Number, Destiny Number, Soul Urge Number, and more to reveal the numerical blueprint of your life and karmic purpose.',
    price: '₹599', duration: '45 mins', rating: 4.8, reviews: 980,
    features: ['Life Path Number', 'Destiny Number', 'Name Analysis', 'Lucky Numbers', 'Annual Cycles'],
    color: '#f59e0b',
  },
  {
    id: 6, icon: '💑', name: 'Love Compatibility', cat: 'Relationships',
    desc: 'Cosmic compatibility analysis for couples revealing karmic connections, strengths, challenges, and soulmate potential.',
    long: 'Our Guna Milan and synastry analysis compares two birth charts to reveal the depth of karmic connection, areas of harmony, potential challenges, and the overall compatibility score of the relationship across 8 key life areas.',
    price: '₹1,199', duration: '60 mins', rating: 4.9, reviews: 2670,
    features: ['Guna Milan (36 Points)', 'Synastry Analysis', 'Mangal Dosha', 'Emotional Compatibility', 'Long-term Prospects'],
    color: '#ef4444',
  },
  {
    id: 7, icon: '💼', name: 'Career Guidance', cat: 'Life Areas',
    desc: 'Planetary analysis of your career house, 10th lord, and dashas to identify the most promising career paths.',
    long: 'Your birth chart contains specific planetary combinations that point toward your natural talents and ideal career paths. We analyze your 10th house, its lord, planetary dashas, and ashtakavarga to guide you toward maximum professional fulfillment.',
    price: '₹1,099', duration: '45 mins', rating: 4.8, reviews: 1540,
    features: ['Career Aptitude', 'Business vs Job', 'Best Time to Switch', 'Foreign Opportunities', 'Financial Growth'],
    color: '#22c55e',
  },
  {
    id: 8, icon: '💍', name: 'Marriage Prediction', cat: 'Relationships',
    desc: 'Timing of marriage, partner characteristics, and relationship patterns revealed through Vedic chart analysis.',
    long: 'Marriage is one of the most significant karmic events in life. Our marriage prediction analysis examines your 7th house, Venus, Jupiter (for women), and Mars (for men), along with Navamsa chart to reveal timing, partner traits, and relationship karma.',
    price: '₹1,299', duration: '60 mins', rating: 4.9, reviews: 2100,
    features: ['Marriage Timing', 'Partner Characteristics', 'Navamsa Analysis', 'Dosha Check', 'Remedies Included'],
    color: '#7c3aed',
  },
  {
    id: 9, icon: '🏠', name: 'Vastu Consultation', cat: 'Life Areas',
    desc: 'Ancient Vastu Shastra analysis aligning your living and working space with positive cosmic energies.',
    long: 'Vastu Shastra is the ancient Indian science of spatial arrangement and directional alignment. Our Vastu experts analyze your home or office floor plan and suggest adjustments to harmonize the five elements, promoting health, prosperity, and peace.',
    price: '₹1,999', duration: '90 mins', rating: 4.7, reviews: 870,
    features: ['Floor Plan Analysis', 'Direction Mapping', 'Element Balancing', 'Remedial Measures', 'On-site Visit Available'],
    color: '#0ea5e9',
  },
  {
    id: 10, icon: '💎', name: 'Gemstone Recommendation', cat: 'Remedies',
    desc: 'Personalized gemstone prescription based on your birth chart to strengthen beneficial planetary influences.',
    long: 'Gemstones are cosmic antennas that can amplify planetary energies in your favor. Our astrologers analyze your birth chart to identify which gemstones will strengthen your beneficial planets and recommend the specific stone, metal, weight, and wearing procedure.',
    price: '₹499', duration: '30 mins', rating: 4.8, reviews: 1340,
    features: ['Chart Analysis', 'Stone Recommendation', 'Metal & Finger Guidance', 'Auspicious Time to Wear', 'Mantra Included'],
    color: '#64748b',
  },
]

const categories = ['All', 'Vedic', 'Mystical', 'Relationships', 'Life Areas', 'Remedies']

const pricing = [
  { name: 'Seeker', price: '₹2,999', period: '/month', features: ['1 Kundli Reading', '4 Daily Horoscopes', 'Email Support', 'PDF Reports'], popular: false, color: '#8b5cf6' },
  { name: 'Devotee', price: '₹5,999', period: '/month', features: ['2 Full Consultations', 'Unlimited Horoscopes', 'Priority Support', 'Love Compatibility', 'Monthly Forecast', 'Gemstone Guide'], popular: true, color: '#f5c842' },
  { name: 'Cosmic Elite', price: '₹12,999', period: '/month', features: ['5 Sessions/Month', 'All Services Access', '24/7 VIP Support', 'Personalized Remedies', 'Vastu Consultation', 'Annual Life Plan', 'Dedicated Astrologer'], popular: false, color: '#06b6d4' },
]

function ServiceCard({ s, i, visible }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div style={{
      padding: '32px 28px',
      borderRadius: '20px',
      background: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      backdropFilter: 'blur(20px)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.4s ease',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(40px)',
      display: 'flex',
      flexDirection: 'column',
    }} className="svc-card">
      <style>{`.svc-card:hover { transform: translateY(-6px) !important; border-color: rgba(139,92,246,0.25) !important; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }`}</style>
      <div style={{
        position: 'absolute', top: 0, right: 0, width: 80, height: 80,
        background: `radial-gradient(circle at 100% 0%, ${s.color}20, transparent 70%)`,
      }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${s.color}, transparent)`, opacity: 0.6 }} />

      <div style={{ fontSize: '2.6rem', marginBottom: 16 }}>{s.icon}</div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: '600', color: 'white' }}>{s.name}</h3>
        <span style={{ fontSize: '0.7rem', padding: '3px 10px', borderRadius: 50, background: `${s.color}20`, border: `1px solid ${s.color}40`, color: s.color }}>{s.cat}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
        <Star size={12} fill="#f5c842" color="#f5c842" />
        <span style={{ fontSize: '0.8rem', color: '#f5c842', fontWeight: '600' }}>{s.rating}</span>
        <span style={{ fontSize: '0.75rem', color: 'rgba(200,185,240,0.5)' }}>({s.reviews.toLocaleString()} reviews)</span>
      </div>

      <p style={{ fontSize: '0.88rem', color: 'rgba(200,185,240,0.75)', lineHeight: 1.7, marginBottom: 16, flex: 1 }}>
        {expanded ? s.long : s.desc}
      </p>

      {expanded && (
        <ul style={{ listStyle: 'none', marginBottom: 16 }}>
          {s.features.map(f => (
            <li key={f} style={{ fontSize: '0.8rem', color: 'rgba(200,185,240,0.7)', padding: '4px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: s.color, fontSize: '0.6rem' }}>✦</span> {f}
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => setExpanded(!expanded)} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        color: s.color, fontSize: '0.8rem', textAlign: 'left', marginBottom: 16,
        fontFamily: 'Inter, sans-serif',
      }}>
        {expanded ? '− Show Less' : '+ More Details'}
      </button>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.4rem', fontWeight: '700', color: s.color }}>{s.price}</div>
          <div style={{ fontSize: '0.7rem', color: 'rgba(200,185,240,0.5)' }}>{s.duration}</div>
        </div>
        <Link to="/contact" style={{
          padding: '10px 22px',
          borderRadius: '50px',
          border: `1px solid ${s.color}60`,
          background: `${s.color}15`,
          color: 'white',
          fontSize: '0.8rem',
          fontWeight: '600',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
        }} className="book-btn">
          Book Now
        </Link>
      </div>
    </div>
  )
}

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [ref, visible] = useScrollReveal(0.05)
  const [pricingRef, pricingVis] = useScrollReveal()

  const filtered = activeFilter === 'All' ? allServices : allServices.filter(s => s.cat === activeFilter)

  return (
    <div>
      <style>{`
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        .filter-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin: 40px 0;
        }
        .filter-tab {
          padding: 10px 22px;
          border-radius: 50px;
          border: 1px solid rgba(139,92,246,0.25);
          background: rgba(255,255,255,0.03);
          color: rgba(200,185,240,0.7);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .filter-tab:hover { background: rgba(139,92,246,0.15); color: white; border-color: rgba(139,92,246,0.4); }
        .filter-tab.active {
          background: rgba(139,92,246,0.2);
          border-color: #8b5cf6;
          color: #f5c842;
          box-shadow: 0 4px 20px rgba(139,92,246,0.25);
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        .pricing-card {
          padding: 40px 32px;
          border-radius: 24px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(20px);
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .pricing-card.popular {
          background: linear-gradient(135deg, rgba(245,200,66,0.1), rgba(201,162,39,0.05));
          border-color: rgba(245,200,66,0.4);
          transform: scale(1.04);
          box-shadow: 0 20px 60px rgba(245,200,66,0.15), 0 0 60px rgba(139,92,246,0.1);
        }
        .pricing-card:hover { transform: scale(1.06) !important; }
        .pricing-popular-badge {
          position: absolute;
          top: 0; left: 50%;
          transform: translate(-50%, -50%);
          padding: 6px 20px;
          background: linear-gradient(135deg, #f5c842, #c9a227);
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 700;
          color: #0d0030;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .pricing-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          font-size: 0.88rem;
          color: rgba(200,185,240,0.8);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .pricing-feature::before { content: '✦'; color: #f5c842; font-size: 0.55rem; }
        .book-btn:hover { background: rgba(139,92,246,0.3) !important; }
        @media (max-width: 1100px) { .svc-grid { grid-template-columns: repeat(2, 1fr); } .pricing-grid { grid-template-columns: 1fr; } }
        @media (max-width: 640px) { .svc-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* Hero */}
      <div style={{
        padding: '140px 0 80px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(45,27,105,0.5) 0%, transparent 70%)',
      }}>
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Sacred Offerings</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', textAlign: 'center' }}>
            Our <span className="text-gold">Cosmic Services</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Explore our comprehensive range of astrological and metaphysical services, each crafted to illuminate a different facet of your cosmic journey.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section" ref={ref}>
        <div className="container">
          {/* Filter */}
          <div style={{ textAlign: 'center', marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 4, color: 'rgba(200,185,240,0.5)', fontSize: '0.8rem' }}>
              <Filter size={14} /> Filter by Category
            </div>
          </div>
          <div className="filter-tabs">
            {categories.map(c => (
              <button key={c} className={`filter-tab ${activeFilter === c ? 'active' : ''}`} onClick={() => setActiveFilter(c)}>
                {c}
              </button>
            ))}
          </div>

          <div className="svc-grid">
            {filtered.map((s, i) => (
              <ServiceCard key={s.id} s={s} i={i} visible={visible} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" ref={pricingRef} style={{ background: 'linear-gradient(180deg, transparent, rgba(45,27,105,0.05), transparent)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 8, opacity: pricingVis ? 1 : 0, transition: 'opacity 0.8s ease' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Membership Plans</div>
            <h2 className="section-title">Choose Your <span className="text-gold">Cosmic Plan</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
              Get unlimited access to cosmic guidance with our premium membership plans.
            </p>
          </div>

          <div className="pricing-grid">
            {pricing.map((plan, i) => (
              <div key={plan.name} className={`pricing-card ${plan.popular ? 'popular' : ''}`} style={{
                opacity: pricingVis ? 1 : 0,
                transition: `opacity 0.7s ${i * 0.15}s ease`,
              }}>
                {plan.popular && <div className="pricing-popular-badge">Most Popular ✦</div>}
                <div style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: plan.color, marginBottom: 16, fontFamily: 'Inter, sans-serif', marginTop: plan.popular ? 16 : 0 }}>{plan.name}</div>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '2.8rem', fontWeight: '800', color: 'white', lineHeight: 1 }}>
                  {plan.price}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(200,185,240,0.5)', marginBottom: 32 }}>{plan.period}</div>
                <div style={{ textAlign: 'left', marginBottom: 32 }}>
                  {plan.features.map(f => <div key={f} className="pricing-feature">{f}</div>)}
                </div>
                <Link to="/contact" className={plan.popular ? 'btn-primary' : 'btn-secondary'} style={{ display: 'block', textAlign: 'center' }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews CTA */}
      <section className="section">
        <div className="container">
          <div style={{
            padding: '56px',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, rgba(45,27,105,0.3), rgba(29,78,216,0.1))',
            border: '1px solid rgba(139,92,246,0.2)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: 20 }}>⭐</div>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'white', marginBottom: 12 }}>
              Join <span className="text-gold">50,000+</span> Satisfied Clients
            </h2>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: 'rgba(200,185,240,0.75)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px', fontStyle: 'italic', lineHeight: 1.8 }}>
              Experience the transformative power of authentic Vedic astrology. Your cosmic destiny awaits.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary"><Star size={16} /> Book Consultation</Link>
              <Link to="/about" className="btn-secondary">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
