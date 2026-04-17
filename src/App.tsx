import './App.css'
import { siteContent } from './content'

function App() {
  return (
    <div className="app">
      <nav className="navbar container">
        <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)' }}>
          NAT 20 <span style={{ color: '#fff' }}>LABS</span>
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
          <div className="reveal">
            <h1>{siteContent.hero.title}</h1>
            <p>{siteContent.hero.subtitle}</p>
            <button className="btn btn-primary">{siteContent.hero.cta}</button>
          </div>
        </section>

        <section id="services" className="container">
          <div className="section-title">
            <h2>Our Core Expertise</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Tailored solutions for modern businesses.</p>
          </div>
          <div className="grid">
            {siteContent.services.map((service, index) => (
              <div className="card" key={index}>
                <h3>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="seo" className="container">
          <div className="seo-highlight reveal">
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{siteContent.seoSection.title}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                {siteContent.seoSection.description}
              </p>
              <ul style={{ listStyle: 'none', color: 'var(--accent)' }}>
                {siteContent.seoSection.highlights.map((item, index) => (
                  <li key={index}>✓ {item}</li>
                ))}
              </ul>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ 
                fontSize: '8rem', 
                fontWeight: 900, 
                color: 'var(--accent-glow)',
                textShadow: '0 0 20px var(--accent)'
              }}>
                20
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="container">
          <div className="section-title">
            <h2>Selected Work</h2>
            <p style={{ color: 'var(--text-secondary)' }}>A glimpse into our recent successful rolls.</p>
          </div>
          <div className="grid">
            {siteContent.portfolio.map((project) => (
              <div className="card" key={project.id}>
                <div style={{ height: '200px', background: 'var(--bg-primary)', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  {project.imageLabel}
                </div>
                <h3>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="container" style={{ textAlign: 'center' }}>
          <div className="section-title">
            <h2>Ready to level up?</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Let's discuss how we can grow your business together.</p>
          </div>
          <a href="mailto:hello@nat20labs.com" className="btn btn-primary">Get in Touch</a>
        </section>
      </main>

      <footer className="container">
        <p>&copy; {new Date().getFullYear()} Nat 20 Labs. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Modern Web Development & SEO Strategy</p>
      </footer>
    </div>
  )
}

export default App
