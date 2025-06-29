import React from 'react';
import { Upload, Video, TrendingUp, Users, Calendar, BarChart3 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './Home.css';

const Home = () => {
  const { user } = useAuth();

  const stats = [
    { icon: Video, label: 'Total Videos', value: '24', color: 'primary' },
    { icon: TrendingUp, label: 'Views This Month', value: '12.5K', color: 'success' },
    { icon: Users, label: 'Followers', value: '3.2K', color: 'accent' },
    { icon: Calendar, label: 'Scheduled Posts', value: '8', color: 'secondary' }
  ];

  const recentVideos = [
    {
      id: 1,
      title: 'Product Launch Video',
      thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      status: 'Published',
      platforms: ['YouTube', 'Instagram', 'Facebook'],
      views: '2.3K',
      date: '2 days ago'
    },
    {
      id: 2,
      title: 'Behind the Scenes',
      thumbnail: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      status: 'Scheduled',
      platforms: ['YouTube', 'Twitter'],
      views: '0',
      date: 'Tomorrow 2:00 PM'
    },
    {
      id: 3,
      title: 'Tutorial Video',
      thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      status: 'Published',
      platforms: ['YouTube', 'Instagram'],
      views: '1.8K',
      date: '5 days ago'
    }
  ];

  return (
    <div className="home-container">
      <div className="welcome-section">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome back, {user?.name}!</h1>
          <p className="welcome-subtitle">
            Manage your social media presence with powerful automation tools
          </p>
        </div>
        <div className="quick-actions">
          <button className="quick-action-btn primary">
            <Upload size={20} />
            Upload Video
          </button>
          <button className="quick-action-btn secondary">
            <BarChart3 size={20} />
            View Analytics
          </button>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card ${stat.color}`}>
            <div className="stat-icon">
              <stat.icon size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="recent-section">
        <div className="section-header">
          <h2 className="section-title">Recent Videos</h2>
          <button className="view-all-btn">View All</button>
        </div>

        <div className="videos-grid">
          {recentVideos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className={`video-status ${video.status.toLowerCase()}`}>
                  {video.status}
                </div>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <div className="video-platforms">
                  {video.platforms.map((platform, index) => (
                    <span key={index} className="platform-tag">{platform}</span>
                  ))}
                </div>
                <div className="video-meta">
                  <span className="video-views">{video.views} views</span>
                  <span className="video-date">{video.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;