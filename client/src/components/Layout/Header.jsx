import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import ThemeToggle from './ThemeToggle';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button className="mobile-menu-btn">
            <Menu />
          </button>
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search videos, templates..."
              className="search-input"
            />
          </div>
        </div>
        
        <div className="header-right">
          <ThemeToggle />
          
          <button className="notification-btn">
            <Bell />
            <span className="notification-badge">3</span>
          </button>
          
          <div className="user-profile">
            <img
              src={user?.avatar || `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=face`}
              alt="Profile"
              className="profile-avatar"
            />
            <Link to={'/settings'} className="user-info">
              <span className="user-name">{user?.name}</span>
              <span className="user-email">{user?.email}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;