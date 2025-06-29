import React from 'react';
import { Zap, Users, Target, Award, Heart, Globe } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Upload and distribute your content across multiple platforms in seconds, not hours.'
    },
    {
      icon: Users,
      title: 'Multi-Platform',
      description: 'Reach your audience on YouTube, Instagram, Facebook, Twitter, and more platforms.'
    },
    {
      icon: Target,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times to maximize engagement and reach.'
    },
    {
      icon: Award,
      title: 'Professional Quality',
      description: 'Advanced editing tools and templates to make your content stand out.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      bio: 'Former social media manager turned entrepreneur with 10+ years of experience.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      bio: 'Tech veteran specializing in automation and AI-driven solutions.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      bio: 'Creative director passionate about user experience and visual storytelling.'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack developer focused on building scalable social media solutions.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '2M+', label: 'Videos Posted' },
    { number: '15+', label: 'Platforms Supported' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Revolutionizing Social Media <span className="highlight">Automation</span>
          </h1>
          <p className="hero-subtitle">
            We're on a mission to simplify content creation and help creators reach their full potential 
            across all social media platforms with cutting-edge automation technology.
          </p>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
            alt="Team collaboration" 
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-description">
              At SocialFlow, we believe that every creator deserves to focus on what they do best - creating amazing content. 
              Our platform eliminates the tedious task of manual posting across multiple social media platforms, 
              giving you more time to engage with your audience and grow your brand.
            </p>
            <div className="mission-values">
              <div className="value-item">
                <Heart className="value-icon" />
                <span>Creator-First Approach</span>
              </div>
              <div className="value-item">
                <Globe className="value-icon" />
                <span>Global Accessibility</span>
              </div>
              <div className="value-item">
                <Zap className="value-icon" />
                <span>Innovation & Speed</span>
              </div>
            </div>
          </div>
          <div className="mission-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number1">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="section-title">Why Choose SocialFlow?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <feature.icon />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="team-subtitle">
          Passionate individuals dedicated to making social media management effortless
        </p>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="story-section">
        <div className="story-content">
          <h2 className="section-title">Our Story</h2>
          <div className="story-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <p>Founded by a team of social media experts who experienced the pain of manual posting firsthand.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>First Platform Launch</h3>
                <p>Launched with support for YouTube and Instagram, helping our first 1,000 users save hours weekly.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>AI Integration</h3>
                <p>Introduced AI-powered caption generation and smart scheduling features.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h3>Global Expansion</h3>
                <p>Now serving 50,000+ creators worldwide with support for 15+ social media platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Social Media Strategy?</h2>
          <p className="cta-subtitle">
            Join thousands of creators who have already simplified their content distribution workflow.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-lg">Get Started Free</button>
            <button className="btn btn-outline btn-lg">Schedule Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;