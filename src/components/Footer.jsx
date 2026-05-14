import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const FacebookIcon = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
const TwitterIcon = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
const InstagramIcon = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
const YoutubeIcon = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>

const zodiacSigns = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓']

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) { setSubscribed(true); setEmail('') }
  }

  return (
    <footer style={{ position: 'relative', zIndex: 2 }}>
      <style>{`
        .footer-main {
          background: linear-gradient(180deg, rgba(3,0,20,0) 0%, rgba(10,0,32,0.98) 20%, #030014 100%);
          padding: 80px 0 0;
          position: relative;
          overflow: hidden;
        }
        .footer-divider-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.5), rgba(245,200,66,0.5), rgba(139,92,246,0.5), transparent);
          margin-bottom: 60px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 48px;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .footer-brand .logo-main {
          font-family: 'Cinzel', serif;
          font-size: 1.4rem;
          font-weight: 700;
          background: linear-gradient(135deg, #f5c842, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }
        .footer-brand p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          color: rgba(200,185,240,0.7);
          line-height: 1.8;
          margin-bottom: 24px;
        }
        .social-links {
          display: flex;
          gap: 12px;
        }
        .social-link {
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
        .social-link:hover {
          background: rgba(139,92,246,0.2);
          border-color: #8b5cf6;
          color: #f5c842;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(139,92,246,0.3);
        }
        .footer-heading {
          font-family: 'Cinzel', serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #f5c842;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(245,200,66,0.2);
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-links a {
          text-decoration: none;
          color: rgba(200,185,240,0.7);
          font-size: 0.9rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-links a::before {
          content: '✦';
          font-size: 0.5rem;
          color: #8b5cf6;
          opacity: 0.6;
        }
        .footer-links a:hover { color: #f5c842; padding-left: 4px; }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          color: rgba(200,185,240,0.7);
          font-size: 0.9rem;
        }
        .footer-contact-item svg {
          color: #8b5cf6;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .newsletter-form {
          display: flex;
          gap: 8px;
          margin-top: 16px;
        }
        .newsletter-input {
          flex: 1;
          padding: 12px 18px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(139,92,246,0.3);
          border-radius: 50px;
          color: white;
          font-size: 0.85rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .newsletter-input:focus { border-color: #8b5cf6; }
        .newsletter-input::placeholder { color: rgba(200,185,240,0.4); }
        .newsletter-btn {
          width: 46px; height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f5c842, #c9a227);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0d0030;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .newsletter-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(245,200,66,0.4);
        }
        .zodiac-strip {
          display: flex;
          justify-content: center;
          gap: 20px;
          padding: 24px;
          background: rgba(255,255,255,0.02);
          border-top: 1px solid rgba(139,92,246,0.15);
          flex-wrap: wrap;
        }
        .zodiac-strip span {
          font-size: 1.2rem;
          opacity: 0.4;
          transition: all 0.3s ease;
          cursor: default;
        }
        .zodiac-strip span:hover { opacity: 1; transform: scale(1.4); }
        .footer-bottom {
          background: rgba(0,0,0,0.3);
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1280px;
          margin: 0 auto;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-bottom-text {
          font-size: 0.8rem;
          color: rgba(200,185,240,0.4);
        }
        .footer-bottom-links {
          display: flex;
          gap: 20px;
        }
        .footer-bottom-links a {
          text-decoration: none;
          font-size: 0.8rem;
          color: rgba(200,185,240,0.4);
          transition: color 0.3s;
        }
        .footer-bottom-links a:hover { color: #f5c842; }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 580px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { justify-content: center; text-align: center; }
        }
      `}</style>

      <div className="footer-main">
        <div className="footer-divider-line" />

        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="logo-main">✦ Cosmic Destiny Astrology</div>
            <p>
              Guiding souls through the cosmic tapestry since 2005. We blend ancient wisdom with modern insight to illuminate your path to destiny.
            </p>
            <div className="social-links">
              {[
                { Icon: FacebookIcon, href: '#' },
                { Icon: TwitterIcon, href: '#' },
                { Icon: InstagramIcon, href: '#' },
                { Icon: YoutubeIcon, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="social-link" target="_blank" rel="noopener noreferrer">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-heading">Quick Links</div>
            <ul className="footer-links">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
                { to: '/services', label: 'Book Consultation' },
              ].map(link => (
                <li key={link.to + link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="footer-heading">Our Services</div>
            <ul className="footer-links">
              {['Kundli Analysis', 'Horoscope Reading', 'Tarot Cards', 'Palm Reading', 'Numerology', 'Love Compatibility', 'Vastu Consultation'].map(s => (
                <li key={s}><Link to="/services">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <div className="footer-heading">Get In Touch</div>
            <div className="footer-contact-item"><MapPin size={16} /><span>123 Celestial Avenue, Mumbai, Maharashtra 400001</span></div>
            <div className="footer-contact-item"><Phone size={16} /><span>+91 98765 43210</span></div>
            <div className="footer-contact-item"><Mail size={16} /><span>hello@cosmicdestiny.com</span></div>

            <div style={{ marginTop: 24 }}>
              <div style={{ fontSize: '0.8rem', color: 'rgba(200,185,240,0.6)', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Newsletter
              </div>
              {subscribed ? (
                <div style={{ color: '#f5c842', fontSize: '0.9rem', padding: '12px 0', fontStyle: 'italic' }}>
                  ✦ Thank you for subscribing!
                </div>
              ) : (
                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <input
                    className="newsletter-input"
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="newsletter-btn"><Send size={16} /></button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Zodiac Strip */}
        <div style={{ marginTop: 60 }}>
          <div className="zodiac-strip">
            {zodiacSigns.map((s, i) => (
              <span key={i} title={['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'][i]}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(139,92,246,0.1)', marginTop: 0 }}>
          <div className="footer-bottom">
            <div className="footer-bottom-text">
              © 2025 Cosmic Destiny Astrology. All rights reserved. Crafted with ✦ and cosmic energy.
            </div>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
