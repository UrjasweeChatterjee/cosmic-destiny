import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ChevronDown } from 'lucide-react'

const FacebookIcon = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
const TwitterIcon = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
const InstagramIcon = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
const YoutubeIcon = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>

const services = [
  'Select Service', 'Kundli Analysis', 'Horoscope Reading', 'Tarot Card Reading',
  'Palm Reading', 'Numerology', 'Love Compatibility', 'Career Guidance',
  'Marriage Prediction', 'Vastu Consultation', 'Gemstone Recommendation',
]

const faqs = [
  { q: 'How do I prepare for my consultation?', a: 'Have your exact birth time, date, and place ready. Make a list of your most pressing questions. Choose a quiet, comfortable space for your session.' },
  { q: 'Can I reschedule my appointment?', a: 'Yes! You can reschedule up to 24 hours before your appointment at no charge. Simply email or call us and we will find a new time that works for you.' },
  { q: 'Do you offer refunds?', a: 'We offer a full refund if requested 48 hours before the consultation. Post-session, we offer free follow-up clarifications within 7 days of your reading.' },
]

export default function Contact() {
  const [formRef, formVis] = useScrollReveal(0.1)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [chatOpen, setChatOpen] = useState(false)

  const handle = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <style>{`
        .contact-hero {
          padding: 140px 0 80px;
          text-align: center;
          background: radial-gradient(ellipse at 50% 0%, rgba(45,27,105,0.5) 0%, transparent 70%);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 48px;
          align-items: start;
        }
        .contact-info-card {
          padding: 40px 32px;
          border-radius: 24px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(20px);
          position: sticky;
          top: 100px;
        }
        .contact-form-card {
          padding: 48px 44px;
          border-radius: 24px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(20px);
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-label {
          display: block;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(200,185,240,0.6);
          margin-bottom: 8px;
          font-family: 'Inter', sans-serif;
        }
        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 14px 18px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(139,92,246,0.25);
          border-radius: 12px;
          color: white;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: #8b5cf6;
          box-shadow: 0 0 20px rgba(139,92,246,0.15);
          background: rgba(255,255,255,0.07);
        }
        .form-input::placeholder, .form-textarea::placeholder { color: rgba(200,185,240,0.35); }
        .form-select { cursor: pointer; }
        .form-select option { background: #0d0030; color: white; }
        .form-textarea { resize: vertical; min-height: 140px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .info-item:last-of-type { border-bottom: none; }
        .info-icon {
          width: 42px; height: 42px;
          border-radius: 10px;
          background: rgba(139,92,246,0.15);
          border: 1px solid rgba(139,92,246,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8b5cf6;
          flex-shrink: 0;
        }
        .map-container {
          height: 350px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(139,92,246,0.2);
          background: linear-gradient(135deg, #0d0030, #1a0040, #2d1b69);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 48px;
          position: relative;
        }
        .map-placeholder {
          text-align: center;
          z-index: 1;
        }
        .chat-bubble {
          position: fixed;
          bottom: 90px; right: 30px;
          z-index: 998;
          width: 56px; height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #6d28d9);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 8px 30px rgba(139,92,246,0.5);
          transition: all 0.3s ease;
          animation: glow-pulse 3s ease-in-out infinite;
        }
        .chat-bubble:hover { transform: scale(1.1); }
        .chat-popup {
          position: fixed;
          bottom: 160px; right: 30px;
          z-index: 997;
          width: 300px;
          padding: 24px;
          border-radius: 20px;
          background: rgba(10,0,32,0.95);
          border: 1px solid rgba(139,92,246,0.3);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          opacity: 0;
          transform: translateY(10px);
          pointer-events: none;
          transition: all 0.3s ease;
        }
        .chat-popup.open { opacity: 1; transform: translateY(0); pointer-events: auto; }
        .social-row {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }
        .social-icon {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(139,92,246,0.3);
          background: rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(200,185,240,0.7);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: rgba(139,92,246,0.2);
          border-color: #8b5cf6;
          color: #f5c842;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(139,92,246,0.3);
        }
        .faq-simple {
          margin-top: 32px;
        }
        .faq-simple-item {
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          margin-bottom: 10px;
        }
        .faq-simple-btn {
          width: 100%;
          padding: 16px 20px;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: white;
          font-size: 0.88rem;
          text-align: left;
          font-family: 'Inter', sans-serif;
        }
        .faq-simple-ans {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .faq-simple-ans.open { max-height: 200px; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } .contact-info-card { position: static; } }
        @media (max-width: 580px) { .contact-form-card { padding: 28px 20px; } .form-row { grid-template-columns: 1fr; } }
      `}</style>

      {/* Hero */}
      <div className="contact-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Reach Out</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', textAlign: 'center' }}>
            Connect with the <span className="text-gold">Cosmos</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Begin your cosmic journey today. Our master astrologers are ready to illuminate your path. Reach out for a consultation or any questions.
          </p>
        </div>
      </div>

      <section className="section" ref={formRef}>
        <div className="container">
          <div className="contact-grid">
            {/* Info Card */}
            <div className="contact-info-card" style={{
              opacity: formVis ? 1 : 0,
              transform: formVis ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.8s ease',
            }}>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.1rem', fontWeight: '600', color: '#f5c842', marginBottom: 24 }}>
                ✦ Contact Information
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin size={18} /></div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(200,185,240,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Address</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(200,185,240,0.85)' }}>123 Celestial Avenue, Andheri West, Mumbai, Maharashtra 400053</div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={18} /></div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(200,185,240,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Phone</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(200,185,240,0.85)' }}>+91 98765 43210<br />+91 87654 32109</div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Mail size={18} /></div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(200,185,240,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Email</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(200,185,240,0.85)' }}>hello@cosmicdestiny.com<br />support@cosmicdestiny.com</div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Clock size={18} /></div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(200,185,240,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Hours</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(200,185,240,0.85)' }}>Mon–Sat: 9:00 AM – 9:00 PM<br />Sun: 10:00 AM – 6:00 PM</div>
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(200,185,240,0.5)', marginBottom: 12 }}>Follow Us</div>
                <div className="social-row">
                  {[FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
                    <a key={i} href="#" className="social-icon"><Icon /></a>
                  ))}
                </div>
              </div>

              {/* FAQ in sidebar */}
              <div className="faq-simple" style={{ marginTop: 28 }}>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.9rem', color: '#f5c842', marginBottom: 16 }}>Quick FAQs</div>
                {faqs.map((f, i) => (
                  <div key={i} className="faq-simple-item">
                    <button className="faq-simple-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <span>{f.q}</span>
                      <ChevronDown size={14} style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0 }} />
                    </button>
                    <div className={`faq-simple-ans ${openFaq === i ? 'open' : ''}`}>
                      <div style={{ padding: '0 20px 16px', fontSize: '0.83rem', color: 'rgba(200,185,240,0.7)', lineHeight: 1.7 }}>{f.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <div className="contact-form-card" style={{
              opacity: formVis ? 1 : 0,
              transform: formVis ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s 0.2s ease',
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 40px' }}>
                  <div style={{ fontSize: '4rem', marginBottom: 24, animation: 'float 4s ease-in-out infinite' }}>✦</div>
                  <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.8rem', color: '#f5c842', marginBottom: 16 }}>Message Received!</h2>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: 'rgba(200,185,240,0.8)', lineHeight: 1.8, fontStyle: 'italic' }}>
                    Thank you for reaching out to Cosmic Destiny Astrology. The stars have noted your inquiry, and our master astrologer will contact you within 24 hours to guide you on your cosmic journey.
                  </p>
                  <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center', gap: 12 }}>
                    {['★', '★', '★', '★', '★'].map((s, i) => (
                      <span key={i} style={{ color: '#f5c842', fontSize: '1.5rem' }}>{s}</span>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.3rem', fontWeight: '700', color: 'white', marginBottom: 8 }}>
                    Book Your Consultation
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(200,185,240,0.6)', marginBottom: 32, fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>
                    Fill in the details below and a cosmic advisor will reach out within 24 hours.
                  </div>

                  <form onSubmit={handle}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input className="form-input" type="text" placeholder="Your full name" required
                          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input className="form-input" type="email" placeholder="your@email.com" required
                          value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input className="form-input" type="tel" placeholder="+91 98765 43210"
                          value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Select Service *</label>
                        <select className="form-select" required
                          value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                          {services.map(s => <option key={s} value={s === 'Select Service' ? '' : s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Your Message *</label>
                      <textarea className="form-textarea" placeholder="Share your questions, concerns, or what you hope to discover in your cosmic consultation..." required
                        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 24, padding: '16px', borderRadius: '12px', background: 'rgba(245,200,66,0.06)', border: '1px solid rgba(245,200,66,0.15)' }}>
                      <span style={{ color: '#f5c842', fontSize: '1rem', flexShrink: 0, marginTop: 2 }}>✦</span>
                      <div style={{ fontSize: '0.82rem', color: 'rgba(200,185,240,0.7)', lineHeight: 1.7 }}>
                        Your information is sacred and protected. We never share your personal details with third parties. All consultations are completely confidential.
                      </div>
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1rem' }}>
                      <Send size={16} /> Send Message & Book Session
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Map Section */}
          <div className="map-container" style={{ opacity: formVis ? 1 : 0, transition: 'opacity 0.8s 0.4s ease' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(13,0,48,0.9) 0%, rgba(45,27,105,0.6) 50%, rgba(13,0,48,0.8) 100%)',
            }} />
            {/* Grid lines for map effect */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />
            <div className="map-placeholder">
              <div style={{ fontSize: '4rem', marginBottom: 16, animation: 'float 5s ease-in-out infinite' }}>📍</div>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.1rem', color: '#f5c842', marginBottom: 8 }}>Cosmic Destiny Astrology</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(200,185,240,0.7)' }}>123 Celestial Avenue, Andheri West, Mumbai</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(200,185,240,0.5)', marginTop: 8 }}>Maharashtra 400053, India</div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ marginTop: 20, display: 'inline-flex' }}>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Bubble */}
      <button className="chat-bubble" onClick={() => setChatOpen(!chatOpen)} aria-label="Open live chat">
        <MessageCircle size={22} />
      </button>

      <div className={`chat-popup ${chatOpen ? 'open' : ''}`}>
        <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.9rem', color: '#f5c842', marginBottom: 8 }}>✦ Live Cosmic Support</div>
        <div style={{ fontSize: '0.82rem', color: 'rgba(200,185,240,0.7)', lineHeight: 1.7, marginBottom: 16 }}>
          Our cosmic advisors are online and ready to help you navigate your celestial journey. Average response time: 2 minutes.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', animation: 'glow-pulse 2s infinite' }} />
          <span style={{ fontSize: '0.75rem', color: '#86efac' }}>3 advisors online now</span>
        </div>
        <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '12px' }}>
          Start Chat
        </button>
      </div>
    </div>
  )
}
