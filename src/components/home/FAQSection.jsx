import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: 'How accurate are the astrology readings?', a: 'Our Vedic astrology readings are based on precise birth chart calculations using exact birth time, date, and location. Our master astrologers have a verified accuracy rate of 92%, and many predictions have been corroborated by clients months after their consultations.' },
  { q: 'What information do I need to provide for a reading?', a: 'For the most accurate reading, you will need to provide your exact birth date, precise birth time (to the minute if possible), and birth location (city/country). The birth time is crucial for calculating your rising sign and house placements.' },
  { q: 'How long does a consultation session last?', a: 'Standard consultations are 45–60 minutes. Comprehensive life path readings take 90 minutes. Premium Kundli Analysis with all aspects covered typically runs 2 hours. All sessions are recorded for your future reference.' },
  { q: 'Can astrology predict specific future events?', a: 'Astrology reveals planetary cycles and energetic tendencies rather than fixed outcomes. It identifies favorable and challenging periods, highlighting where to focus your energy for maximum results. Your free will always plays a significant role in shaping outcomes.' },
  { q: 'Do you offer online consultations?', a: 'Yes! We serve clients across 60+ countries through secure video consultations via Zoom and Google Meet. Online sessions are equally effective as in-person sessions and can be scheduled 24/7 to accommodate different time zones.' },
  { q: 'What is the difference between Vedic and Western astrology?', a: 'Vedic (Jyotish) astrology is the ancient Indian system using the sidereal zodiac and is more predictive in nature. Western astrology uses the tropical zodiac and focuses on psychological insights. Our astrologers are proficient in both systems and tailor the approach to your needs.' },
]

function FAQItem({ faq, idx }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      borderRadius: '16px',
      background: open ? 'rgba(139,92,246,0.08)' : 'var(--glass-bg)',
      border: `1px solid ${open ? 'rgba(139,92,246,0.3)' : 'var(--glass-border)'}`,
      backdropFilter: 'blur(10px)',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      marginBottom: 12,
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%',
        padding: '24px 28px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        textAlign: 'left',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.75rem', color: open ? '#f5c842' : '#8b5cf6', minWidth: 28 }}>
            {String(idx + 1).padStart(2, '0')}
          </span>
          <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.95rem', fontWeight: '600', color: 'white' }}>
            {faq.q}
          </span>
        </div>
        <span style={{
          width: 32, height: 32, borderRadius: '50%',
          border: `1px solid ${open ? 'rgba(245,200,66,0.4)' : 'rgba(139,92,246,0.3)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: open ? '#f5c842' : '#8b5cf6',
          flexShrink: 0, transition: 'all 0.3s ease',
          background: open ? 'rgba(245,200,66,0.1)' : 'rgba(139,92,246,0.1)',
        }}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div style={{
        maxHeight: open ? '300px' : 0,
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
      }}>
        <div style={{
          padding: '0 28px 24px 68px',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.05rem',
          color: 'rgba(200,185,240,0.8)',
          lineHeight: 1.8,
          fontStyle: 'italic',
        }}>
          {faq.a}
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section" ref={ref}>
      <style>{`.faq-layout { display: grid; grid-template-columns: 1fr 2fr; gap: 64px; align-items: start; } @media (max-width: 768px) { .faq-layout { grid-template-columns: 1fr; gap: 32px; } }`}</style>
      <div className="container">
        <div className="faq-layout">
          <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease', position: 'sticky', top: 100 }}>
            <div className="section-label">Wisdom &amp; Clarity</div>
            <h2 className="section-title">Frequently Asked <span className="text-gold">Questions</span></h2>
            <p className="section-subtitle" style={{ fontSize: '0.95rem' }}>
              Have questions about your cosmic journey? Find answers here or reach out for a personalized consultation.
            </p>
            <div style={{ marginTop: 32, padding: 24, borderRadius: 16, background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)' }}>
              <div style={{ fontSize: '2rem', marginBottom: 12 }}>💫</div>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.9rem', color: '#f5c842', marginBottom: 8 }}>Still have questions?</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(200,185,240,0.7)', lineHeight: 1.7 }}>
                Our cosmic experts are available 24/7 to guide you on your sacred journey.
              </div>
            </div>
          </div>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease' }}>
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} idx={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
