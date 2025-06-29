import React, { useState } from 'react';
import { Plus, Settings, CheckCircle, AlertCircle, Link, Unlink } from 'lucide-react';
import './SocialMedia.css';

const SocialMedia = () => {
  const [platforms, setPlatforms] = useState([
    {
      id: 'youtube',
      name: 'YouTube',
      icon: '🎥',
      color: '#FF0000',
      connected: true,
      followers: '12.5K',
      posts: 24,
      engagement: '8.2%',
      lastPost: '2 hours ago'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: '📸',
      color: '#E4405F',
      connected: true,
      followers: '8.9K',
      posts: 45,
      engagement: '12.4%',
      lastPost: '5 hours ago'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: '👤',
      color: '#1877F2',
      connected: false,
      followers: '0',
      posts: 0,
      engagement: '0%',
      lastPost: 'Never'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: '🐦',
      color: '#000000',
      connected: true,
      followers: '3.2K',
      posts: 156,
      engagement: '6.8%',
      lastPost: '1 day ago'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: '🎵',
      color: '#000000',
      connected: false,
      followers: '0',
      posts: 0,
      engagement: '0%',
      lastPost: 'Never'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: '💼',
      color: '#0A66C2',
      connected: false,
      followers: '0',
      posts: 0,
      engagement: '0%',
      lastPost: 'Never'
    }
  ]);

  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const handleConnect = (platformId) => {
    setPlatforms(prev => prev.map(platform => 
      platform.id === platformId 
        ? { ...platform, connected: true }
        : platform
    ));
  };

  const handleDisconnect = (platformId) => {
    setPlatforms(prev => prev.map(platform => 
      platform.id === platformId 
        ? { ...platform, connected: false }
        : platform
    ));
  };

  const connectedPlatforms = platforms.filter(p => p.connected);
  const totalFollowers = connectedPlatforms.reduce((sum, platform) => {
    const followers = parseFloat(platform.followers.replace('K', '')) * 1000;
    return sum + followers;
  }, 0);

  const totalPosts = connectedPlatforms.reduce((sum, platform) => sum + platform.posts, 0);

  return (
    <div className="social-media-container">
      <div className="social-media-header">
        <div className="header-content">
          <h1 className="page-title">Social Media Accounts</h1>
          <p className="page-subtitle">Connect and manage your social media presence</p>
        </div>
        
        <div className="header-stats">
          <div className="stat-item">
            <div className="stat-value">{connectedPlatforms.length}</div>
            <div className="stat-label">Connected</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{(totalFollowers / 1000).toFixed(1)}K</div>
            <div className="stat-label">Total Followers</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{totalPosts}</div>
            <div className="stat-label">Total Posts</div>
          </div>
        </div>
      </div>

      <div className="platforms-grid">
        {platforms.map(platform => (
          <div key={platform.id} className={`platform-card ${platform.connected ? 'connected' : 'disconnected'}`}>
            <div className="platform-header">
              <div className="platform-info">
                <div className="platform-icon" style={{ backgroundColor: platform.color }}>
                  <span className="platform-emoji">{platform.icon}</span>
                </div>
                <div className="platform-details">
                  <h3 className="platform-name">{platform.name}</h3>
                  <div className={`connection-status ${platform.connected ? 'connected' : 'disconnected'}`}>
                    {platform.connected ? (
                      <>
                        <CheckCircle size={16} />
                        <span>Connected</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle size={16} />
                        <span>Not Connected</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="platform-actions">
                {platform.connected ? (
                  <>
                    <button className="action-btn secondary" title="Settings">
                      <Settings size={16} />
                    </button>
                    <button 
                      className="action-btn danger" 
                      title="Disconnect"
                      onClick={() => handleDisconnect(platform.id)}
                    >
                      <Unlink size={16} />
                    </button>
                  </>
                ) : (
                  <button 
                    className="action-btn primary" 
                    title="Connect"
                    onClick={() => handleConnect(platform.id)}
                  >
                    <Link size={16} />
                    Connect
                  </button>
                )}
              </div>
            </div>

            {platform.connected && (
              <div className="platform-stats">
                <div className="stats-grid">
                  <div className="stat-box">
                    <div className="stat-number">{platform.followers}</div>
                    <div className="stat-text">Followers</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-number">{platform.posts}</div>
                    <div className="stat-text">Posts</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-number">{platform.engagement}</div>
                    <div className="stat-text">Engagement</div>
                  </div>
                </div>
                <div className="last-post">
                  <span className="last-post-label">Last post:</span>
                  <span className="last-post-time">{platform.lastPost}</span>
                </div>
              </div>
            )}

            {!platform.connected && (
              <div className="platform-connect">
                <p className="connect-description">
                  Connect your {platform.name} account to start posting and managing content automatically.
                </p>
                <div className="connect-benefits">
                  <div className="benefit-item">✓ Auto-post videos</div>
                  <div className="benefit-item">✓ Schedule content</div>
                  <div className="benefit-item">✓ Track analytics</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {connectedPlatforms.length > 0 && (
        <div className="connected-summary">
          <div className="summary-header">
            <h2 className="summary-title">Connected Platforms Overview</h2>
          </div>
          
          <div className="summary-grid">
            <div className="summary-card">
              <h3 className="summary-card-title">Posting Schedule</h3>
              <div className="schedule-list">
                <div className="schedule-item">
                  <span className="schedule-time">Daily at 10:00 AM</span>
                  <span className="schedule-platforms">YouTube, Instagram</span>
                </div>
                <div className="schedule-item">
                  <span className="schedule-time">3x per week at 2:00 PM</span>
                  <span className="schedule-platforms">Twitter</span>
                </div>
              </div>
            </div>
            
            <div className="summary-card">
              <h3 className="summary-card-title">Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-platform">YouTube</span>
                  <span className="activity-text">Posted "Product Launch Video"</span>
                  <span className="activity-time">2h ago</span>
                </div>
                <div className="activity-item">
                  <span className="activity-platform">Instagram</span>
                  <span className="activity-text">Shared story update</span>
                  <span className="activity-time">5h ago</span>
                </div>
                <div className="activity-item">
                  <span className="activity-platform">Twitter</span>
                  <span className="activity-text">Tweeted video link</span>
                  <span className="activity-time">1d ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMedia;