import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './home.css';

export default function Home() {
  const [user, setUser] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.warn('Failed to parse stored user', e);
        setUser(null);
      }
    }

    // Auto-hide welcome message after 5 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-layout">
      <Sidebar />
      
      <main className="home-main">
        {/* Welcome Animation */}
        {showWelcome && (
          <div className="welcome-overlay">
            <div className="welcome-card">
              <h1 className="welcome-title">Welcome to Payana</h1>
              <p className="welcome-subtitle">
                {user && user.username ? ('Happy to have you, ' + user.username + '!') : "Let's plan your next adventure"}
              </p>
              <div className="welcome-animation"></div>
            </div>
          </div>
        )}

        {/* Home Content */}
        <div className="home-content">
          <div className="content-header">
            <h2>Dashboard</h2>
            <p>Welcome back, {user?.username || 'Traveler'}!</p>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card">
              <div className="card-icon">🗺️</div>
              <h3>My Trips</h3>
              <p>View and manage all your planned trips</p>
            </div>

            <div className="dashboard-card">
              <div className="card-icon">📋</div>
              <h3>Itineraries</h3>
              <p>Organize your day-by-day activities</p>
            </div>

            <div className="dashboard-card">
              <div className="card-icon">🧳</div>
              <h3>Packing List</h3>
              <p>Create and manage packing lists</p>
            </div>

            <div className="dashboard-card">
              <div className="card-icon">💾</div>
              <h3>Saved Places</h3>
              <p>Bookmark places for future trips</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
