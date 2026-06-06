import { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero">
      <div className="hero-split">
        <div className="hero-content reveal">
          <p className="hero-tagline">TAMIL RAP &middot; CHENNAI</p>
          <h1 className="hero-title">
            <span className="title-line1">EKALAI</span>
            <span className="title-line2">VAN21</span>
          </h1>
          <p className="hero-subtitle">Independent Artist &middot; ft. Monesh07 &middot; <span className="tamil-text">இசை என் ஆத்மா</span></p>
          
          <div className="hero-stats">
            <div className="stat">8+ Singles</div>
            <div className="stat">4 Monthly Listeners</div>
            <div className="stat">Since 2024</div>
          </div>

          <div className="hero-ctas">
            <a href="https://open.spotify.com/artist/4QdQsFOVWg3NpBFGDf2D0d" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Stream Now
            </a>
            <a href="https://www.instagram.com/ekalaivan_21" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Follow
            </a>
          </div>
        </div>
        
        <div className="hero-image-container">
          <div className="hero-overlay"></div>
          <img src="/images/ekalaivan-hero-fullbody.jpg" alt="Ekalaivan21" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
