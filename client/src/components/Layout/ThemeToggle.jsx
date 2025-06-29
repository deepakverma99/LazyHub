import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'light', icon: Sun, label: 'Light' },
    { id: 'dark', icon: Moon, label: 'Dark' },
    { id: 'system', icon: Monitor, label: 'System' }
  ];

  return (
    <div className="theme-toggle">
      <div className="theme-options">
        {themes.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            className={`theme-option ${theme === id ? 'active' : ''}`}
            onClick={() => setTheme(id)}
            title={`Switch to ${label} theme`}
          >
            <Icon size={16} />
            <span className="theme-label">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;