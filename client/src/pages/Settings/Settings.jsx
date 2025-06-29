import React, { useState } from 'react';
import { User, Bell, Shield, Palette, Globe, Save, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import './Settings.css';

const Settings = () => {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    notifications: {
      email: true,
      push: true,
      videoUploaded: true,
      scheduledPost: true,
      analytics: false
    },
    privacy: {
      profilePublic: true,
      showEmail: false,
      allowAnalytics: true
    },
    language: 'en',
    timezone: 'UTC'
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'general', label: 'General', icon: Globe }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedChange = (parent, field, value) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    // Handle save settings
    console.log('Saving settings:', formData);
    // Show success message
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="settings-content">
            <h2 className="settings-section-title">Profile Information</h2>
            <div className="settings-form">
              <div className="profile-avatar-section">
                <div className="current-avatar">
                  <img src={user?.avatar} alt="Profile" />
                </div>
                <div className="avatar-actions">
                  <button className="btn btn-outline">Change Photo</button>
                  <button className="btn btn-outline danger">Remove</button>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
              </div>

              <div className="password-section">
                <h3 className="subsection-title">Change Password</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Current Password</label>
                    <div className="password-input-container">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-input"
                        value={formData.currentPassword}
                        onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">New Password</label>
                    <input
                      type="password"
                      className="form-input"
                      value={formData.newPassword}
                      onChange={(e) => handleInputChange('newPassword', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Confirm New Password</label>
                    <input
                      type="password"
                      className="form-input"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="settings-content">
            <h2 className="settings-section-title">Notification Preferences</h2>
            <div className="settings-form">
              <div className="notification-section">
                <h3 className="subsection-title">Delivery Method</h3>
                <div className="toggle-group">
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <span className="toggle-label">Email Notifications</span>
                      <span className="toggle-description">Receive notifications via email</span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={formData.notifications.email}
                        onChange={(e) => handleNestedChange('notifications', 'email', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <span className="toggle-label">Push Notifications</span>
                      <span className="toggle-description">Receive push notifications in browser</span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={formData.notifications.push}
                        onChange={(e) => handleNestedChange('notifications', 'push', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="notification-section">
                <h3 className="subsection-title">Notification Types</h3>
                <div className="toggle-group">
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <span className="toggle-label">Video Uploaded</span>
                      <span className="toggle-description">When a video is successfully uploaded</span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={formData.notifications.videoUploaded}
                        onChange={(e) => handleNestedChange('notifications', 'videoUploaded', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <span className="toggle-label">Scheduled Posts</span>
                      <span className="toggle-description">When scheduled content is published</span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={formData.notifications.scheduledPost}
                        onChange={(e) => handleNestedChange('notifications', 'scheduledPost', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <span className="toggle-label">Analytics Reports</span>
                      <span className="toggle-description">Weekly analytics and performance reports</span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={formData.notifications.analytics}
                        onChange={(e) => handleNestedChange('notifications', 'analytics', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="settings-content">
            <h2 className="settings-section-title">Privacy & Security</h2>
            <div className="settings-form">
              <div className="privacy-section">
                <h3 className="subsection-title">Profile Privacy</h3>
                <div className="toggle-group">
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <span className="toggle-label">Public Profile</span>
                      <span className="toggle-description">Make your profile visible to others</span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={formData.privacy.profilePublic}
                        onChange={(e) => handleNestedChange('privacy', 'profilePublic', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <span className="toggle-label">Show Email</span>
                      <span className="toggle-description">Display email address on profile</span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={formData.privacy.showEmail}
                        onChange={(e) => handleNestedChange('privacy', 'showEmail', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="privacy-section">
                <h3 className="subsection-title">Data & Analytics</h3>
                <div className="toggle-group">
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <span className="toggle-label">Analytics Tracking</span>
                      <span className="toggle-description">Allow collection of usage analytics</span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={formData.privacy.allowAnalytics}
                        onChange={(e) => handleNestedChange('privacy', 'allowAnalytics', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="privacy-section">
                <h3 className="subsection-title">Data Management</h3>
                <div className="data-actions">
                  <button className="btn btn-outline">Download My Data</button>
                  <button className="btn btn-outline danger">Delete Account</button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div className="settings-content">
            <h2 className="settings-section-title">Appearance</h2>
            <div className="settings-form">
              <div className="appearance-section">
                <h3 className="subsection-title">Theme</h3>
                <div className="theme-options">
                  <div className="theme-option">
                    <input
                      type="radio"
                      id="light"
                      name="theme"
                      value="light"
                      checked={theme === 'light'}
                      onChange={(e) => setTheme(e.target.value)}
                    />
                    <label htmlFor="light" className="theme-label">
                      <div className="theme-preview light">
                        <div className="theme-header"></div>
                        <div className="theme-content"></div>
                      </div>
                      <span>Light</span>
                    </label>
                  </div>
                  <div className="theme-option">
                    <input
                      type="radio"
                      id="dark"
                      name="theme"
                      value="dark"
                      checked={theme === 'dark'}
                      onChange={(e) => setTheme(e.target.value)}
                    />
                    <label htmlFor="dark" className="theme-label">
                      <div className="theme-preview dark">
                        <div className="theme-header"></div>
                        <div className="theme-content"></div>
                      </div>
                      <span>Dark</span>
                    </label>
                  </div>
                  <div className="theme-option">
                    <input
                      type="radio"
                      id="system"
                      name="theme"
                      value="system"
                      checked={theme === 'system'}
                      onChange={(e) => setTheme(e.target.value)}
                    />
                    <label htmlFor="system" className="theme-label">
                      <div className="theme-preview system">
                        <div className="theme-header"></div>
                        <div className="theme-content"></div>
                      </div>
                      <span>System</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'general':
        return (
          <div className="settings-content">
            <h2 className="settings-section-title">General Settings</h2>
            <div className="settings-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Language</label>
                  <select
                    className="form-select"
                    value={formData.language}
                    onChange={(e) => handleInputChange('language', e.target.value)}
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Timezone</label>
                  <select
                    className="form-select"
                    value={formData.timezone}
                    onChange={(e) => handleInputChange('timezone', e.target.value)}
                  >
                    <option value="UTC">UTC</option>
                    <option value="America/New_York">Eastern Time</option>
                    <option value="America/Chicago">Central Time</option>
                    <option value="America/Denver">Mountain Time</option>
                    <option value="America/Los_Angeles">Pacific Time</option>
                    <option value="Europe/London">London</option>
                    <option value="Europe/Paris">Paris</option>
                    <option value="Asia/Tokyo">Tokyo</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1 className="settings-title">Settings</h1>
        <p className="settings-subtitle">Manage your account and preferences</p>
      </div>

      <div className="settings-layout">
        <div className="settings-sidebar">
          <nav className="settings-nav">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`settings-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon className="nav-icon" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="settings-main">
          <div className="settings-panel">
            {renderTabContent()}
            <div className="settings-actions">
              <button className="btn btn-outline">Cancel</button>
              <button className="btn btn-primary" onClick={handleSave}>
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;