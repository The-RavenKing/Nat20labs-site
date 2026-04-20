import { useState, useEffect, lazy, Suspense } from 'react'
import { siteContent } from './content'
import { blogPosts } from './content/blog'
import type { BlogPost } from './content/blog'

// Lazy load the markdown component
const ReactMarkdown = lazy(() => import('react-markdown'));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (selectedPost) {
      document.title = `${selectedPost.title} | Nat 20 Labs Insights`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', selectedPost.excerpt);
      }
      
      // Add BlogPosting Schema
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'blog-schema';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": selectedPost.title,
        "description": selectedPost.excerpt,
        "author": {
          "@type": "Person",
          "name": selectedPost.author
        },
        "datePublished": selectedPost.date,
        "image": "https://nat20labs.com/logo-v2-new.webp",
        "publisher": {
          "@type": "Organization",
          "name": "Nat 20 Labs",
          "logo": {
            "@type": "ImageObject",
            "url": "https://nat20labs.com/logo-v2-new.webp"
          }
        }
      });
      document.head.appendChild(script);

      return () => {
        document.title = 'Nat 20 Labs | Expert Web Development & SEO Management UK';
        if (metaDescription) {
          metaDescription.setAttribute('content', 'Nat 20 Labs provides high-performance React web development, technical SEO audits, and strategic SEO management for UK businesses.');
        }
        document.getElementById('blog-schema')?.remove();
      };
    }
  }, [selectedPost]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [selectedPost]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="app">
      <header>
        <nav className="navbar container">
          {/* Hamburger Menu Button (Now on Left) */}
          <button 
            className={`menu-btn ${isMenuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div className="menu-icon-bar"></div>
            <div className="menu-icon-bar"></div>
          </button>

          <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img 
              src="/logo-optimized.webp" 
              alt="Nat 20 Labs" 
              width="263"
              height="175"
              fetchPriority="high"
              loading="eager"
              style={{ height: '175px', width: 'auto', display: 'block', flexShrink: 0 }} 
            />
          </a>
        </nav>

        {/* Fullscreen Popout Nav */}
        <div 
          className={`nav-overlay ${isMenuOpen ? 'open' : ''}`}
          onClick={(e) => e.target === e.currentTarget && closeMenu()}
        >
          <div className="nav-overlay-content container">
            <div className="nav-overlay-links">
              <a href="#services" onClick={closeMenu}>Services</a>
              <a href="#seo" onClick={closeMenu}>SEO</a>
              <a href="#portfolio" onClick={closeMenu}>Work</a>
              <a href="#insights" onClick={closeMenu}>Insights</a>
              <a href="#contact" className="btn btn-primary" onClick={closeMenu} style={{ marginTop: '2rem' }}>Start a Project</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {!selectedPost ? (
          <>
            <section className="hero container">
              <span className="section-tag">Freelance Web Dev & SEO</span>
              <h1 className="hero-title">
                Rolling Criticals for <span>Your Business</span>
              </h1>
              <p>
                High-performance web applications and strategic SEO management. We turn technical complexity into business growth.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <a href="#contact" className="btn btn-primary">Start a Project</a>
                <a href="#portfolio" className="btn btn-outline">View Our Work</a>
              </div>
            </section>

            <section id="services" className="section container">
              <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="reveal">
                <span className="section-tag">Services</span>
                <h2>What we bring to the table</h2>
              </div>
              <div className="bento-grid">
                <div className="bento-card span-8 reveal">
                  <div className="card-icon">⚡</div>
                  <h3>Web Development</h3>
                  <p>We build lightning-fast, high-converting React applications tailored to your specific business needs. Every line of code is written with performance and scalability in mind.</p>
                </div>
                <div className="bento-card span-4 reveal">
                  <div className="card-icon">🔍</div>
                  <h3>Technical Audit</h3>
                  <p>Deep-dive analysis of your current digital infrastructure to find growth leaks.</p>
                </div>
                <div className="bento-card span-4 reveal">
                  <div className="card-icon">📈</div>
                  <h3>SEO Management</h3>
                  <p>Strategic, data-driven optimization that drives organic traffic and visibility.</p>
                </div>
                <div className="bento-card span-8 reveal">
                  <div className="card-icon">🚀</div>
                  <h3>Performance Scaling</h3>
                  <p>Taking your existing application and optimizing every metric to hit that 100/100 PageSpeed goal, ensuring you never lose a customer to a slow-loading page.</p>
                </div>
              </div>
            </section>

            <section id="seo" className="container">
              <div className="seo-split reveal">
                <div>
                  <span className="section-tag" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Technical SEO</span>
                  <h2>SEO as an Engineering Problem</h2>
                  <p>Most agencies treat SEO as a content game. We treat it as a performance game. By optimizing your site architecture and semantic structure, we ensure search engines prioritize you.</p>
                </div>
                <div style={{ fontSize: '10rem', fontWeight: 900, textAlign: 'center', opacity: 0.45 }}>
                  20
                </div>
              </div>
            </section>

            <section id="portfolio" className="section container">
              <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="reveal">
                <span className="section-tag">Case Studies</span>
                <h2>Our Recent Wins</h2>
              </div>
              <div className="bento-grid">
                {siteContent.portfolio.map((project, index) => (
                  <div className={`bento-card reveal ${index === 0 ? 'span-8' : 'span-4'}`} key={project.id}>
                    <div style={{ background: 'var(--bg-tertiary)', borderRadius: '12px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                      {project.imageLabel}
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase' }}>{project.tag}</span>
                    <h3 style={{ margin: '0.5rem 0' }}>{project.title}</h3>
                    <p style={{ fontSize: '0.95rem' }}>{project.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="insights" className="section container">
              <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="reveal">
                <span className="section-tag">Insights</span>
                <h2>Latest Strategy</h2>
              </div>
              <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {blogPosts.map((post) => (
                  <div className="bento-card reveal" key={post.id} style={{ cursor: 'pointer' }} onClick={() => setSelectedPost(post)}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase' }}>{post.category}</span>
                    <h3 style={{ margin: '1rem 0' }}>{post.title}</h3>
                    <p style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>{post.excerpt}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="section container" style={{ textAlign: 'center' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '6rem 2rem', borderRadius: '40px', border: '1px solid var(--border)' }} className="reveal">
                <h2>Ready for a Critical Success?</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>Let's discuss how our <strong>web development</strong> and <strong>SEO management</strong> can grow your business through technical excellence and data-driven strategy.</p>
                <a href="mailto:karl@nat20labs.com" className="btn btn-primary">Start Your Project</a>
              </div>
            </section>
          </>
        ) : (
          <article className="container section reveal active" style={{ maxWidth: '800px' }}>
            <button onClick={() => setSelectedPost(null)} className="btn btn-outline" style={{ marginBottom: '3rem' }}>← Back to Insights</button>
            <span className="section-tag">{selectedPost.category}</span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>{selectedPost.title}</h1>
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <span>Writer: <strong>{selectedPost.author}</strong></span>
              <span>{selectedPost.date}</span>
              <span>{selectedPost.readTime}</span>
            </div>
            <div className="markdown-content">
              <Suspense fallback={<div>Loading Article...</div>}>
                <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
              </Suspense>
            </div>
            <div style={{ marginTop: '5rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '24px', textAlign: 'center' }}>
              <h3>Ready to apply these strategies?</h3>
              <p style={{ marginBottom: '2rem' }}>Let's talk about how we can optimize your business for growth.</p>
              <button onClick={() => { setSelectedPost(null); window.location.hash = '#contact'; }} className="btn btn-primary">
                Work with Karl
              </button>
            </div>
          </article>
        )}
      </main>

      <footer>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <img 
              src="/logo-optimized.webp" 
              alt="Nat 20 Labs" 
              width="263"
              height="175"
              loading="lazy"
              style={{ height: '175px', width: 'auto', margin: '0 auto' }} 
            />
          </div>
          <p style={{ fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} Nat 20 Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
