import { useState, useEffect, lazy, Suspense } from 'react'
import './App.css'
import './BlogStyles.css'
import { siteContent } from './content'
import { blogPosts } from './content/blog'
import type { BlogPost } from './content/blog'

// Lazy load the markdown component to reduce initial bundle size
const ReactMarkdown = lazy(() => import('react-markdown'));

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Nat 20 Labs",
          "image": "https://nat20labs.com/logo.png",
          "@id": "https://nat20labs.com",
          "url": "https://nat20labs.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressRegion": "Greater London",
            "addressCountry": "GB"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.5074,
            "longitude": -0.1278
          }
        })}
      </script>

      <header>
        <nav className={`navbar container ${scrolled ? 'scrolled' : ''}`}>
          <div className="logo">
            NAT 20 <span>LABS</span>
          </div>
          <div className="nav-links">
            <a href="#services" className="nav-link">Services</a>
            <a href="#seo" className="nav-link">SEO</a>
            <a href="#portfolio" className="nav-link">Work</a>
            <a href="#insights" className="nav-link">Insights</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {!selectedPost ? (
          <>
            <section className="hero container">
              <div className="hero-badge reveal">Freelance Web Dev & SEO</div>
              <h1 className="hero-title">{siteContent.hero.title}</h1>
              <p className="reveal reveal-delay-2">{siteContent.hero.subtitle}</p>
              <div className="reveal reveal-delay-2">
                <button className="btn btn-primary">{siteContent.hero.cta}</button>
              </div>
            </section>

            <section id="services" className="section container">
              <div className="section-header reveal">
                <span className="section-tag">Expertise</span>
                <h2>Our Core Services</h2>
              </div>
              <div className="services-grid">
                {siteContent.services.map((service, index) => (
                  <div className="service-card glass reveal" key={index} style={{ animationDelay: `${0.2 * index}s` }}>
                    <div className="service-icon">
                      {index === 0 && '⚡'}
                      {index === 1 && '📈'}
                      {index === 2 && '🔍'}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="seo" className="section container">
              <div className="seo-feature">
                <div className="reveal">
                  <span className="section-tag">Data-Driven Growth</span>
                  <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>{siteContent.seoSection.title}</h2>
                  <p style={{ marginBottom: '2.5rem' }}>{siteContent.seoSection.description}</p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {siteContent.seoSection.highlights.map((item, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                        <span style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="seo-stat reveal" style={{ textAlign: 'center' }}>
                  20
                </div>
              </div>
            </section>

            <section id="portfolio" className="section container">
              <div className="section-header reveal">
                <span className="section-tag">Portfolio</span>
                <h2>Selected Case Studies</h2>
              </div>
              <div className="portfolio-grid">
                {siteContent.portfolio.map((project, index) => (
                  <div className="project-card reveal" key={project.id} style={{ animationDelay: `${0.2 * index}s` }}>
                    <div className="project-image">
                      <span style={{ fontSize: '1.5rem', fontWeight: 700, opacity: 0.5 }}>{project.imageLabel}</span>
                    </div>
                    <div className="project-info">
                      <span className="section-tag" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>{project.tag}</span>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                      <p style={{ fontSize: '0.95rem' }}>{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="insights" className="section container">
              <div className="section-header reveal">
                <span className="section-tag">Insights</span>
                <h2>Latest from Nat 20 Labs</h2>
              </div>
              <div className="grid">
                {blogPosts.map((post) => (
                  <div className="card glass reveal" key={post.id} style={{ cursor: 'pointer', textAlign: 'left' }} onClick={() => setSelectedPost(post)}>
                    <span className="section-tag" style={{ fontSize: '0.75rem' }}>{post.category}</span>
                    <h3>{post.title}</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>{post.excerpt}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="section container" style={{ textAlign: 'center' }}>
              <div className="glass" style={{ padding: '6rem 2rem', borderRadius: '32px' }}>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Ready to level up?</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>Let's discuss how we can grow your business together through technical excellence and strategic SEO.</p>
                <a href="mailto:karl@nat20labs.com" className="btn btn-primary">Get in Touch</a>
              </div>
            </section>
          </>
        ) : (
          <article className="container section reveal" style={{ maxWidth: '800px', textAlign: 'left' }}>
            <button 
              onClick={() => setSelectedPost(null)}
              className="section-tag"
              style={{ background: 'none', border: 'none', cursor: 'pointer', marginBottom: '2rem' }}
            >
              ← Back to Home
            </button>
            <span className="section-tag">{selectedPost.category}</span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{selectedPost.title}</h1>
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <span>Writer: <strong>{selectedPost.author}</strong></span>
              <span>{selectedPost.date}</span>
              <span>{selectedPost.readTime}</span>
            </div>
            <div className="markdown-content">
              <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading Insight...</div>}>
                <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
              </Suspense>
            </div>
            <div style={{ marginTop: '4rem', padding: '2rem', borderTop: '1px solid var(--border)' }}>
              <p>Liked this article? Let's discuss how these strategies apply to your business.</p>
              <button onClick={() => { setSelectedPost(null); window.location.hash = '#contact'; }} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                Work with Nat 20 Labs
              </button>
            </div>
          </article>
        )}
      </main>

      <footer className="container">
        <div className="footer-content">
          <div className="logo">NAT 20 <span>LABS</span></div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#services" className="nav-link">Services</a>
            <a href="#seo" className="nav-link">SEO</a>
            <a href="#portfolio" className="nav-link">Work</a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          <p>&copy; {new Date().getFullYear()} Nat 20 Labs. All rights reserved.</p>
          <p>Modern Web Development & SEO Strategy</p>
        </div>
      </footer>
    </div>
  )
}

export default App
