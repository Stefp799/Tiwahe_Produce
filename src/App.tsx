import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Tiwahe Produce</h1>
          <button
            className={`nav-toggle ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <button className="nav-link" onClick={() => scrollToSection('home')}>Home</button>
            <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
            <button className="nav-link" onClick={() => scrollToSection('produce')}>Fresh Produce</button>
            <button className="nav-link" onClick={() => scrollToSection('contact')}>Location & Hours</button>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Tiwahe Produce</h1>
            <p className="hero-subtitle">Fresh • Local • Community Strong</p>
            <p className="hero-description">
              Supporting our community with fresh, locally grown produce.
              Tiwahe means "family" and "community strong" - that's who we are.
            </p>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>About Us</h2>
            <p>
              We're young entrepreneurs passionate about bringing fresh, quality produce
              to our community. Located right here in Fort White, we're your neighbors
              committed to serving you the best fruits and vegetables we can grow and source.
            </p>
            <p>
              <strong>Tiwahe</strong> is a Native American word meaning "family" and "community strong."
              That's the foundation of everything we do - building stronger community connections
              through fresh, healthy food.
            </p>
          </div>
        </section>

        <section id="produce" className="section">
          <div className="container">
            <h2>Fresh Produce</h2>
            <div className="produce-grid">
              <div className="produce-item">
                <h3>🍅 Fresh Tomatoes</h3>
                <p>Vine-ripened and locally grown</p>
              </div>
              <div className="produce-item">
                <h3>🥒 Cucumbers</h3>
                <p>Crisp and fresh daily</p>
              </div>
              <div className="produce-item">
                <h3>🌽 Sweet Corn</h3>
                <p>Picked fresh when available</p>
              </div>
              <div className="produce-item">
                <h3>🥬 Leafy Greens</h3>
                <p>Fresh lettuce, spinach, and more</p>
              </div>
              <div className="produce-item">
                <h3>🍓 Seasonal Fruits</h3>
                <p>Strawberries, melons, and local favorites</p>
              </div>
              <div className="produce-item">
                <h3>🥕 Root Vegetables</h3>
                <p>Carrots, potatoes, and seasonal varieties</p>
              </div>
            </div>
            <p className="produce-note">
              <em>Selection varies by season. Visit us to see what's fresh today!</em>
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2>Visit Us</h2>
            <div className="contact-info">
              <div className="info-item">
                <h3>📍 Location</h3>
                <p>Fort White, Florida<br />
                (Near Columbia County)</p>
              </div>
              <div className="info-item">
                <h3>🕐 Hours</h3>
                <p>Daily: 8:00 AM - 6:00 PM<br />
                <em>(Weather permitting)</em></p>
              </div>
              <div className="info-item">
                <h3>💚 Our Mission</h3>
                <p>Building community one fresh vegetable at a time.
                Supporting local families with quality produce at fair prices.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Tiwahe Produce - Community Strong 🌱</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
