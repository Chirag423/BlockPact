// Navbar.tsx
import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/home');
    }

    const navigateToDeals = () => {
        navigate('/deals');
      };

      const navigateToDocs = () => {
        navigate('/docs');
      };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Placeholder for logo image */}
        <img src="logo-placeholder.png" alt="Logo" />
      </div>
      <div className="navbar-buttons">
      <button onClick={navigateToHome}>Home</button>
        <button onClick={navigateToDocs}>Docs</button>
        <button>Your Contracts</button>
        <button>Your Registrations</button>
        <button onClick={navigateToDeals}>Deals</button>
      </div>
    </nav>
  );
};

export default Navbar;
