import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Eye, Edit, Trash2, Share2 } from 'lucide-react';
import './PostedVideos.css';

const PostedVideos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const videos = [
    {
      id: 1,
      title: 'Product Launch Campaign',
      thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      status: 'published',
      platforms: ['YouTube', 'Instagram', 'Facebook'],
      views: 12500,
      likes: 1200,
      comments: 89,
      date: '2024-01-15',
      duration: '2:45'
    },
    {
      id: 2,
      title: 'Behind the Scenes Content',
      thumbnail: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      status: 'scheduled',
      platforms: ['YouTube', 'Twitter'],
      views: 0,
      likes: 0,
      comments: 0,
      date: '2024-01-20',
      duration: '3:12'
    },
    {
      id: 3,
      title: 'Tutorial: Getting Started',
      thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      status: 'published',
      platforms: ['YouTube', 'Instagram'],
      views: 8900,
      likes: 750,
      comments: 45,
      date: '2024-01-10',
      duration: '5:30'
    },
    {
      id: 4,
      title: 'Customer Success Stories',
      thumbnail: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      status: 'published',
      platforms: ['YouTube', 'Facebook', 'Instagram'],
      views: 15600,
      likes: 2100,
      comments: 156,
      date: '2024-01-08',
      duration: '4:15'
    },
    {
      id: 5,
      title: 'Weekly Update Vlog',
      thumbnail: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      status: 'draft',
      platforms: [],
      views: 0,
      likes: 0,
      comments: 0,
      date: '2024-01-18',
      duration: '6:20'
    },
    {
      id: 6,
      title: 'Product Demo Walkthrough',
      thumbnail: 'https://images.pexels.com/photos/3183177/pexels-photo-3183177.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      status: 'published',
      platforms: ['YouTube', 'Instagram'],
      views: 7800,
      likes: 890,
      comments: 67,
      date: '2024-01-05',
      duration: '8:45'
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || video.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const sortedVideos = [...filteredVideos].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date) - new Date(a.date);
      case 'views':
        return b.views - a.views;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'success';
      case 'scheduled':
        return 'warning';
      case 'draft':
        return 'gray';
      default:
        return 'gray';
    }
  };

  return (
    <div className="posted-videos-container">
      <div className="posted-videos-header">
        <div className="header-content">
          <h1 className="page-title">Posted Videos</h1>
          <p className="page-subtitle">Manage and track your published content</p>
        </div>
      </div>

      <div className="videos-toolbar">
        <div className="search-section">
          <div className="search-input-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search videos..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-group">
            <label htmlFor="status-filter">Status:</label>
            <select
              id="status-filter"
              className="filter-select"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All</option>
              <option value="published">Published</option>
              <option value="scheduled">Scheduled</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="sort-by">Sort by:</label>
            <select
              id="sort-by"
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">Date</option>
              <option value="views">Views</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>

      <div className="videos-grid">
        {sortedVideos.map(video => (
          <div key={video.id} className="video-card">
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <div className="video-duration">{video.duration}</div>
              <div className={`video-status ${getStatusColor(video.status)}`}>
                {video.status}
              </div>
              <div className="video-overlay">
                <button className="overlay-btn">
                  <Eye size={20} />
                </button>
              </div>
            </div>

            <div className="video-content">
              <h3 className="video-title">{video.title}</h3>
              
              <div className="video-platforms">
                {video.platforms.map((platform, index) => (
                  <span key={index} className="platform-tag">{platform}</span>
                ))}
              </div>

              <div className="video-stats">
                <div className="stat">
                  <Eye size={16} />
                  <span>{formatNumber(video.views)}</span>
                </div>
                <div className="stat">
                  <span>❤️</span>
                  <span>{formatNumber(video.likes)}</span>
                </div>
                <div className="stat">
                  <span>💬</span>
                  <span>{formatNumber(video.comments)}</span>
                </div>
              </div>

              <div className="video-date">
                {new Date(video.date).toLocaleDateString()}
              </div>
            </div>

            <div className="video-actions">
              <button className="action-btn" title="View Details">
                <Eye size={16} />
              </button>
              <button className="action-btn" title="Edit">
                <Edit size={16} />
              </button>
              <button className="action-btn" title="Share">
                <Share2 size={16} />
              </button>
              <button className="action-btn" title="More Options">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {sortedVideos.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">
            <Video size={64} />
          </div>
          <h3 className="empty-title">No videos found</h3>
          <p className="empty-description">
            {searchTerm || filterStatus !== 'all' 
              ? 'Try adjusting your search or filter criteria'
              : 'Start by uploading your first video'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default PostedVideos;