import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

    const navigateToBuyer = () => {
        navigate('/buyer');
    }

  return (
    <div className="home-container">
      <header className="about-header">About us</header>
      <hr className="divider" />
      <div className="button-container">
        <div className="option-card">
          <p>If you are a buyer, and want to design a contract</p>
          <button className="option-button" onClick={navigateToBuyer}>BUYER</button>
        </div>
        <div className="option-card">
          <p>If you are a seller, and want to sign a contract</p>
          <button className="option-button">SELLER</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
