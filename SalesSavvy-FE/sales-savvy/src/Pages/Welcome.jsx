import React from 'react'
import {useNavigate} from 'react-router-dom'
import "./Home.css";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero-card">

        <h1>Welcome to <span>SalesSavvy</span></h1>

        <p>
          Discover top deals, hand-picked products, and a seamless shopping
          experience built just for you. Save time and money with smart shopping.
        </p>

        <div className="btn-group">
          <button
            className="btn primary"
            onClick={() => navigate('/SignUpPage')}
          >
            Sign Up
          </button>

          <button
            className="btn secondary"
            onClick={() => navigate('/SignInPage')}
          >
            Sign In
          </button>
        </div>

      </div>
    </div>
  );
}