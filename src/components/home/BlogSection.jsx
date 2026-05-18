import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'

const blogs = [
  {
    title: 'Importance of Kundli Matching in Marriages',
    image: '/images/blog_kundli_1779097456793.png',
    date: 'Oct 12, 2023',
    author: 'Astrologer Sharma',
    excerpt: 'Discover why Kundli matching remains a vital step before marriage to ensure long-lasting harmony and cosmic compatibility.'
  },
  {
    title: 'How Numerology Helps in Life & Career',
    image: '/images/blog_numerology_1779097472560.png',
    date: 'Nov 05, 2023',
    author: 'Astro Vision',
    excerpt: 'Learn the secrets of numbers and how your life path number can guide you towards your true purpose and wealth.'
  },
  {
    title: 'Best Vastu Tips for a Peaceful Home',
    image: '/images/blog_vastu_1779097507801.png',
    date: 'Dec 18, 2023',
    author: 'Vastu Expert',
    excerpt: 'Simple yet powerful Vastu modifications you can make today to attract positive energy, health, and prosperity to your home.'
  },
  {
    title: 'Career Guidance Through Astrology',
    image: '/images/blog_career_1779097524449.png',
    date: 'Jan 22, 2024',
    author: 'Astrologer Roy',
    excerpt: 'Feeling lost in your career? Find out how planetary positions in your 10th house determine your professional success.'
  }
]

export default function BlogSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section" ref={ref} style={{ background: 'var(--cosmic-void)' }}>
      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 50px;
        }
        .blog-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
        }
        .blog-card:hover {
          transform: translateY(-10px);
          border-color: rgba(139,92,246,0.3);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(139,92,246,0.1);
        }
        .blog-img-wrapper {
          position: relative;
          padding-bottom: 65%;
          overflow: hidden;
        }
        .blog-img-wrapper img {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .blog-card:hover img {
          transform: scale(1.08);
        }
        .blog-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .blog-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }
        .blog-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: rgba(200,185,240,0.6);
        }
        .blog-title {
          font-family: 'Cinzel', serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
          line-height: 1.4;
          transition: color 0.3s ease;
        }
        .blog-card:hover .blog-title {
          color: #f5c842;
        }
        .blog-excerpt {
          font-size: 0.85rem;
          color: rgba(200,185,240,0.7);
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }
        .blog-read-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.8rem;
          color: #8b5cf6;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-top: auto;
        }
        .blog-read-more:hover {
          color: #f5c842;
          gap: 12px;
        }
        @media (max-width: 1200px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">
        <div style={{ textAlign: 'center', opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Cosmic Wisdom</div>
          <h2 className="section-title">Latest <span className="text-gold">Astrology</span> Insights</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Explore our curated articles on astrology, spirituality, and cosmic living to guide your daily life.
          </p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog, i) => (
            <div key={i} className="blog-card" style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transition: `all 0.6s ${i * 0.15}s ease`
            }}>
              <div className="blog-img-wrapper">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <div className="blog-meta-item">
                    <Calendar size={12} /> {blog.date}
                  </div>
                  <div className="blog-meta-item">
                    <User size={12} /> {blog.author}
                  </div>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <Link to="#" className="blog-read-more">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
