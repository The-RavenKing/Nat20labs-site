import { useState, useEffect, lazy, Suspense } from 'react'
import { siteContent } from './content'
import { blogPosts } from './content/blog'
import type { BlogPost } from './content/blog'

// Lazy load the markdown component
const ReactMarkdown = lazy(() => import('react-markdown'));

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [selectedPost]); // Re-run if we navigate back to home

  return (
    <div className="app">
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
              <div className="hero-badge">Freelance Web Dev & SEO</div>
              <h1 className="hero-title">{siteContent.hero.title}</h1>
              <p>{siteContent.hero.subtitle}</p>
              <div>
                <button className="btn btn-primary">{siteContent.hero.cta}</button>
              </div>
            </section>

            <section id="services" className="section container">
              <div className="section-header reveal">
                <span className="section-tag" style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>Expertise</span>
                <h2 style={{ fontSize: '3rem', marginBottom: '4rem' }}>Our Core Services</h2>
              </div>
              <div className="services-grid">
                {siteContent.services.map((service, index) => (
                  <div className="service-card glass reveal" key={index}>
                    <div className="service-icon">
                      {index === 0 && '⚡'}
                      {index === 1 && '📈'}
                      {index === 2 && '🔍'}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="seo" className="section container">
              <div className="seo-feature glass reveal" style={{ padding: '4rem', borderRadius: '24px' }}>
                <div style={{ flex: 1 }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>Data-Driven</span>
                  <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: 1.1 }}>{siteContent.seoSection.title}</h2>
                  <p style={{ marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>{siteContent.seoSection.description}</p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {siteContent.seoSection.highlights.map((item, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                        <span style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ flex: 1, textAlign: 'center', fontSize: '12rem', fontWeight: 900, color: 'transparent', WebkitTextStroke: '2px var(--accent)', opacity: 0.15 }}>
                  20
                </div>
              </div>
            </section>

            <section id="portfolio" className="section container">
              <div className="section-header reveal">
                <span style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>Portfolio</span>
                <h2 style={{ fontSize: '3rem', marginBottom: '4rem' }}>Selected Case Studies</h2>
              </div>
              <div className="grid">
                {siteContent.portfolio.map((project) => (
                  <div className="project-card glass reveal" key={project.id} style={{ borderRadius: '24px', overflow: 'hidden' }}>
                    <div style={{ height: '240px', background: 'rgba(2, 6, 23, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                      {project.imageLabel}
                    </div>
                    <div style={{ padding: '2rem' }}>
                      <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>{project.tag}</span>
                      <h3 style={{ fontSize: '1.75rem', margin: '0.5rem 0' }}>{project.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="insights" className="section container">
              <div className="section-header reveal">
                <span style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>Insights</span>
                <h2 style={{ fontSize: '3rem', marginBottom: '4rem' }}>Latest Strategy</h2>
              </div>
              <div className="grid">
                {blogPosts.map((post) => (
                  <div className="card glass reveal" key={post.id} style={{ cursor: 'pointer' }} onClick={() => setSelectedPost(post)}>
                    <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>{post.category}</span>
                    <h3 style={{ margin: '1rem 0' }}>{post.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{post.excerpt}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="section container" style={{ textAlign: 'center' }}>
              <div className="glass reveal" style={{ padding: '6rem 2rem', borderRadius: '32px' }}>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Ready to level up?</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-secondary)' }}>Let's discuss how we can grow your business together through technical excellence and strategic SEO.</p>
                <a href="mailto:karl@nat20labs.com" className="btn btn-primary">Get in Touch</a>
              </div>
            </section>
          </>
        ) : (
          <article className="container section reveal active" style={{ maxWidth: '800px' }}>
            <button onClick={() => setSelectedPost(null)} className="btn" style={{ color: 'var(--accent)', padding: 0, marginBottom: '2rem' }}>← Back to Home</button>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>{selectedPost.title}</h1>
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <span>Writer: <strong>{selectedPost.author}</strong></span>
              <span>{selectedPost.date}</span>
              <span>{selectedPost.readTime}</span>
            </div>
            <div className="markdown-content">
              <Suspense fallback={<div>Loading Insight...</div>}>
                <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
              </Suspense>
            </div>
            <div style={{ marginTop: '4rem', padding: '2rem', borderTop: '1px solid var(--border)' }}>
              <button onClick={() => { setSelectedPost(null); window.location.hash = '#contact'; }} className="btn btn-primary">Work with Nat 20 Labs</button>
            </div>
          </article>
        )}
      </main>

      <footer className="container" style={{ padding: '4rem 0', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo">NAT 20 <span>LABS</span></div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>&copy; {new Date().getFullYear()} Nat 20 Labs. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
