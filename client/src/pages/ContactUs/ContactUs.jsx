import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'support@socialflow.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Innovation Drive, Tech City, TC 12345',
      description: 'Come say hello at our office'
    }
  ];

  const faqItems = [
    {
      question: 'How many social media platforms do you support?',
      answer: 'We currently support 15+ major platforms including YouTube, Instagram, Facebook, Twitter, TikTok, LinkedIn, and more. We\'re constantly adding new platforms based on user demand.'
    },
    {
      question: 'Is there a limit to how many videos I can upload?',
      answer: 'Our plans vary by tier. The basic plan includes 50 videos per month, while our premium plans offer unlimited uploads. Check our pricing page for detailed information.'
    },
    {
      question: 'How does the AI caption generation work?',
      answer: 'Our AI analyzes your video content, title, and selected template to generate engaging, platform-optimized captions. You can always edit and customize the generated content.'
    },
    {
      question: 'Can I schedule posts for different time zones?',
      answer: 'Yes! Our smart scheduling feature automatically optimizes posting times for each platform and can handle multiple time zones for global audiences.'
    },
    {
      question: 'What video formats do you support?',
      answer: 'We support all major video formats including MP4, MOV, AVI, WMV, and more. Our system automatically optimizes videos for each platform\'s requirements.'
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="contact-container">
        <div className="success-message">
          <div className="success-icon">
            <CheckCircle size={64} />
          </div>
          <h2 className="success-title">Message Sent Successfully!</h2>
          <p className="success-description">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <button 
            className="btn btn-primary"
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form-section">
          <div className="form-header">
            <MessageCircle className="form-icon" />
            <h2 className="form-title">Send us a Message</h2>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feature">Feature Request</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="What's this about?"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell us more about your inquiry..."
                rows={6}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="loading-spinner small"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info-section">
          <h2 className="info-title">Other Ways to Reach Us</h2>
          
          <div className="contact-methods">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-method">
                <div className="method-icon">
                  <info.icon />
                </div>
                <div className="method-content">
                  <h3 className="method-title">{info.title}</h3>
                  <p className="method-value">{info.content}</p>
                  <p className="method-description">{info.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="response-time">
            <Clock className="response-icon" />
            <div className="response-content">
              <h3 className="response-title">Response Time</h3>
              <p className="response-description">
                We typically respond to all inquiries within 24 hours during business days.
                For urgent technical issues, please call our support line.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{item.question}</h3>
              <p className="faq-answer">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;