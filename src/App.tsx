import './App.css'

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
            <h1>Critical Success for Your Digital Presence</h1>
            <p>We build high-performance websites and dominate search rankings. Precision engineering meets strategic SEO.</p>
            <button className="btn btn-primary">Start Your Project</button>
          </div>
        </section>

        <section id="services" className="container">
          <div className="section-title">
            <h2>Our Core Expertise</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Tailored solutions for modern businesses.</p>
          </div>
          <div className="grid">
            <div className="card">
              <h3>Web Development</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Custom-built, lightning-fast React applications optimized for conversion and scalability.</p>
            </div>
            <div className="card">
              <h3>SEO Management</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Data-driven strategies to boost your visibility and drive organic growth that lasts.</p>
            </div>
            <div className="card">
              <h3>Technical Audit</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Deep dives into your current infrastructure to identify bottlenecks and growth opportunities.</p>
            </div>
          </div>
        </section>

        <section id="seo" className="container">
          <div className="seo-highlight reveal">
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>SEO is more than just keywords.</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                At Nat 20 Labs, we treat SEO as an engineering problem. We optimize site architecture, performance, and semantic structure to ensure search engines love your site as much as your users do.
              </p>
              <ul style={{ listStyle: 'none', color: 'var(--accent)' }}>
                <li>✓ Core Web Vitals Optimization</li>
                <li>✓ Semantic HTML & Schema Markup</li>
                <li>✓ Strategic Content Roadmap</li>
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
            <div className="card">
              <div style={{ height: '200px', background: 'var(--bg-primary)', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: 'var(--text-secondary)' }}>
                E-Commerce Titan
              </div>
              <h3>Nexus Shop</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>High-conversion storefront with 99+ PageSpeed score and integrated SEO strategy.</p>
            </div>
            <div className="card">
              <div style={{ height: '200px', background: 'var(--bg-primary)', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: 'var(--text-secondary)' }}>
                SaaS Dashboard
              </div>
              <h3>DataStream AI</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Real-time analytics platform built for scale and technical excellence.</p>
            </div>
            <div className="card">
              <div style={{ height: '200px', background: 'var(--bg-primary)', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: 'var(--text-secondary)' }}>
                SEO Case Study
              </div>
              <h3>Growth Engine</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Increased organic traffic by 400% through technical SEO and content architecture.</p>
            </div>
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
