import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X, Star } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .navbar.scrolled {
          padding: 12px 0;
          background: rgba(3, 0, 20, 0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(139,92,246,0.2);
          box-shadow: 0 4px 32px rgba(0,0,0,0.4);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-icon {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f5c842, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          animation: glow-pulse 3s ease-in-out infinite;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .logo-main {
          font-family: 'Cinzel', serif;
          font-size: 1.1rem;
          font-weight: 700;
          background: linear-gradient(135deg, #f5c842, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }
        .logo-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          color: rgba(200,185,240,0.7);
          text-transform: uppercase;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
          list-style: none;
        }
        .nav-links a {
          text-decoration: none;
          color: rgba(200,185,240,0.85);
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          padding: 8px 18px;
          border-radius: 50px;
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-links a:hover {
          color: white;
          background: rgba(139,92,246,0.15);
        }
        .nav-links a.active {
          color: #f5c842;
          background: rgba(245,200,66,0.1);
          border: 1px solid rgba(245,200,66,0.2);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .theme-toggle {
          width: 42px; height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(139,92,246,0.3);
          background: rgba(255,255,255,0.05);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8b5cf6;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        .theme-toggle:hover {
          background: rgba(139,92,246,0.2);
          border-color: #8b5cf6;
          color: #f5c842;
          transform: rotate(20deg);
        }
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: linear-gradient(135deg, #f5c842, #c9a227);
          color: #0d0030;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(245,200,66,0.4);
        }
        .hamburger {
          display: none;
          width: 42px; height: 42px;
          border-radius: 10px;
          border: 1px solid rgba(139,92,246,0.3);
          background: rgba(255,255,255,0.05);
          cursor: pointer;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }
        .hamburger:hover {
          background: rgba(139,92,246,0.2);
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(3,0,20,0.97);
          backdrop-filter: blur(30px);
          z-index: 999;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          text-decoration: none;
          color: white;
          font-family: 'Cinzel', serif;
          font-size: 1.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
          text-align: center;
        }
        .mobile-menu a:hover { color: #f5c842; }
        .mobile-menu a.active { color: #f5c842; }
        .mobile-close {
          position: absolute;
          top: 24px; right: 24px;
          width: 48px; height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(139,92,246,0.3);
          background: rgba(255,255,255,0.05);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        @media (max-width: 900px) {
          .nav-links, .nav-cta { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <div className="logo-icon">✦</div>
            <div className="logo-text">
              <span className="logo-main">Cosmic Destiny</span>
              <span className="logo-sub">Astrology</span>
            </div>
          </Link>

          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link to={link.path} className={pathname === link.path ? 'active' : ''}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/contact" className="nav-cta">
              <Star size={14} /> Book Now
            </Link>
            <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>
          <X size={22} />
        </button>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: '3rem' }}>✦</div>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', color: '#f5c842', letterSpacing: '0.2em' }}>COSMIC DESTINY</div>
        </div>
        {navLinks.map(link => (
          <Link key={link.path} to={link.path} className={pathname === link.path ? 'active' : ''}>
            {link.label}
          </Link>
        ))}
        <Link to="/contact" className="nav-cta" style={{ marginTop: 16, fontSize: '1rem', padding: '14px 40px' }}>
          Book Consultation
        </Link>
      </div>
    </>
  )
}
