import React from 'react';
import './sidebar.css';

export default function Sidebar() {
  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    localStorage.removeItem('rememberMe');
    
    // Redirect to home
    window.location.href = '/';
  };

  return (
    <aside className="sidebar">
      {/* Logo Section */}
      <div className="sidebar-top">
        <div className="sidebar-logo">
          <span className="logo-text">
            <span className="logo-pa">PA</span><span className="logo-ya">YA</span><span className="logo-na">NA</span>
          </span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="sidebar-bottom">
        <button className="profile-icon-btn" title="Profile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </button>
        
        <button className="logout-btn" onClick={handleLogout} title="Logout">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Logout
        </button>
      </div>
    </aside>
  );
}
