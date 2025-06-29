import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Zap, Users, TrendingUp, Clock, Sun, Moon, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Landing.css';

const Landing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { theme, setTheme } = useTheme();

  const heroImages = [
    {
      url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      alt: 'Content creation workspace'
    },
    {
      url: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      alt: 'Video production setup'
    },
    {
      url: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      alt: 'Social media analytics'
    },
    {
      url: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      alt: 'Team collaboration'
    },
    {
      url: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      alt: 'Digital marketing'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Upload once, post everywhere in seconds'
    },
    {
      icon: Users,
      title: 'Multi-Platform',
      description: 'Reach audiences across 15+ social platforms'
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered',
      description: 'Smart captions and optimal posting times'
    },
    {
      icon: Clock,
      title: 'Time-Saving',
      description: 'Save 10+ hours per week on content distribution'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Creators' },
    { number: '2M+', label: 'Videos Posted' },
    { number: '15+', label: 'Platforms' },
    { number: '99.9%', label: 'Uptime' }
  ];

  const themes = [
    { id: 'light', icon: Sun, label: 'Light' },
    { id: 'dark', icon: Moon, label: 'Dark' },
    { id: 'system', icon: Monitor, label: 'System' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-container">
          <div className="nav-brand">
            <Zap className="brand-icon" />
            <span className="brand-text">SocialFlow</span>
          </div>
          <div className="nav-links">
            <div className="theme-toggle-nav">
              {themes.map(({ id, icon: Icon }) => (
                <button
                  key={id}
                  className={`theme-btn ${theme === id ? 'active' : ''}`}
                  onClick={() => setTheme(id)}
                  title={`Switch to ${id} theme`}
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
            <Link to="/login" className="nav-link">Sign In</Link>
            <Link to="/register" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image.url})` }}
            />
          ))}
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <div className="hero-container">
            <div className="hero-text">
              <h1 className="hero-title">
                Automate Your Social Media
                <span className="hero-highlight"> Like Never Before</span>
              </h1>
              <p className="hero-subtitle">
                Upload once, post everywhere. SocialFlow automatically distributes your content 
                across all major social media platforms with AI-generated captions and optimal timing.
              </p>
              
              <div className="hero-actions">
                <Link to="/register" className="btn btn-primary btn-hero">
                  <span>Get Started Free</span>
                  <ArrowRight size={20} />
                </Link>
                <button className="btn btn-secondary btn-hero">
                  <Play size={20} />
                  <span>Watch Demo</span>
                </button>
              </div>

              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="image-indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">Why Choose SocialFlow?</h2>
            <p className="features-subtitle">
              Everything you need to dominate social media, all in one powerful platform
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={32} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Social Media Strategy?</h2>
            <p className="cta-subtitle">
              Join thousands of creators who have already simplified their content distribution workflow.
            </p>
            <div className="cta-actions">
              <Link to="/register" className="btn btn-primary btn-lg">
                Start Free Trial
                <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;