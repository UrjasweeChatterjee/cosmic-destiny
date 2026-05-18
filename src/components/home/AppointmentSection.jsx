import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Calendar, User, Mail, Phone, MessageSquare, Send, Star } from 'lucide-react'

export default function AppointmentSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section" ref={ref}>
      <style>{`
        .apt-container {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 30px;
          padding: 60px;
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
        }
        .apt-bg-glow {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%);
          top: -100px; right: -100px;
          border-radius: 50%;
          pointer-events: none;
        }
        .apt-content {
          display: flex;
          gap: 60px;
          position: relative;
          z-index: 2;
        }
        .apt-text {
          flex: 1;
        }
        .apt-form-wrapper {
          flex: 1.2;
          background: rgba(3,0,20,0.6);
          padding: 40px;
          border-radius: 20px;
          border: 1px solid rgba(139,92,246,0.2);
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        .form-group {
          position: relative;
        }
        .form-group.full {
          grid-column: 1 / -1;
        }
        .form-icon {
          position: absolute;
          left: 16px;
          top: 16px;
          color: rgba(200,185,240,0.5);
        }
        .form-control {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 16px 16px 16px 48px;
          border-radius: 12px;
          color: white;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }
        .form-control:focus {
          outline: none;
          border-color: #8b5cf6;
          background: rgba(139,92,246,0.05);
          box-shadow: 0 0 15px rgba(139,92,246,0.2);
        }
        .form-control::placeholder {
          color: rgba(200,185,240,0.4);
        }
        select.form-control {
          appearance: none;
          cursor: pointer;
        }
        textarea.form-control {
          resize: vertical;
          min-height: 120px;
          padding-top: 16px;
        }
        .apt-submit {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px;
          background: var(--gradient-gold);
          color: #0d0030;
          border: none;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .apt-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(245,200,66,0.3);
        }
        @media (max-width: 968px) {
          .apt-content { flex-direction: column; }
          .apt-container { padding: 40px 20px; }
          .apt-form-wrapper { padding: 30px 20px; }
        }
        @media (max-width: 500px) {
          .form-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">
        <div className="apt-container" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.8s ease' }}>
          <div className="apt-bg-glow" />
          
          <div className="apt-content">
            <div className="apt-text">
              <div className="section-label">Book a Session</div>
              <h2 className="section-title">Schedule Your <span className="text-gold">Consultation</span></h2>
              <p className="section-subtitle">
                Take the first step towards clarity and spiritual enlightenment. Fill out the form, and our team will get in touch to confirm your appointment time.
              </p>
              
              <div style={{ marginTop: 40 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(139,92,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(200,185,240,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Call Us Now</div>
                    <div style={{ fontFamily: 'Cinzel', fontSize: '1.2rem', fontWeight: '600', color: 'white' }}>+91 98765 43210</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(245,200,66,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f5c842' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(200,185,240,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email Us</div>
                    <div style={{ fontFamily: 'Cinzel', fontSize: '1.2rem', fontWeight: '600', color: 'white' }}>info@cosmicdestiny.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="apt-form-wrapper">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-grid">
                  <div className="form-group">
                    <User size={18} className="form-icon" />
                    <input type="text" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <Phone size={18} className="form-icon" />
                    <input type="tel" className="form-control" placeholder="Phone Number" required />
                  </div>
                  <div className="form-group full">
                    <Mail size={18} className="form-icon" />
                    <input type="email" className="form-control" placeholder="Email Address" required />
                  </div>
                  <div className="form-group">
                    <Star size={18} className="form-icon" />
                    <select className="form-control" required defaultValue="">
                      <option value="" disabled hidden>Select Service</option>
                      <option value="horoscope">Horoscope Reading</option>
                      <option value="kundli">Kundli Matching</option>
                      <option value="tarot">Tarot Reading</option>
                      <option value="numerology">Numerology</option>
                      <option value="vastu">Vastu Consultation</option>
                      <option value="palmistry">Palmistry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <Calendar size={18} className="form-icon" />
                    <input type="date" className="form-control" required />
                  </div>
                  <div className="form-group full">
                    <MessageSquare size={18} className="form-icon" />
                    <textarea className="form-control" placeholder="Briefly describe your concern or question (Optional)"></textarea>
                  </div>
                </div>
                
                <button type="submit" className="apt-submit">
                  Book Appointment <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
