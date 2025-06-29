import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Home, 
  Upload, 
  Video, 
  Share2, 
  Settings, 
  Info, 
  MessageCircle,
  LogOut,
  Zap
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { logout } = useAuth();

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Upload, label: 'Upload Videos', path: '/upload' },
    { icon: Video, label: 'Posted Videos', path: '/posted-videos' },
    { icon: Share2, label: 'Social Media', path: '/social-media' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: Info, label: 'About Us', path: '/about' },
    { icon: MessageCircle, label: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to={'/'} className="logo">
          <Zap className="logo-icon" />
          <span className="logo-text">SocialFlow</span>
        </Link>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <item.icon className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={logout}>
          <LogOut className="nav-icon" />
          <span className="nav-label">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;