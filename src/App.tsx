import { useState, useEffect } from 'react'
import './App.css'
import { siteContent } from './content'

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <nav className={`navbar container ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          NAT 20 <span>LABS</span>
        </div>
        <div className="nav-links">
          <a href="#services" className="nav-link">Services</a>
          <a href="#seo" className="nav-link">SEO</a>
          <a href="#portfolio" className="nav-link">Work</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero container">
          <div className="hero-badge reveal">Freelance Web Dev & SEO</div>
          <h1 className="reveal reveal-delay-1">{siteContent.hero.title}</h1>
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

        <section id="contact" className="section container" style={{ textAlign: 'center' }}>
          <div className="glass" style={{ padding: '6rem 2rem', borderRadius: '32px' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Ready to level up?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>Let's discuss how we can grow your business together through technical excellence and strategic SEO.</p>
            <a href="mailto:hello@nat20labs.com" className="btn btn-primary">Get in Touch</a>
          </div>
        </section>
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
