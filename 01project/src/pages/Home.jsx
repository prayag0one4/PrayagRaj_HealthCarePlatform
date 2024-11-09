import React from 'react';
import './Home.css';

const Home = () => {
  const features = [
    {
      title: "Schedule Appointment",
      description: "Book your appointments easily.",
    },
    {
      title: "Find Pharmacies",
      description: "Find pharmacies near you easily.",
    },
    {
      title: "Health Education",
      description: "Access health resources and emergency guidelines.",
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Medicare+</h1>
            <p>Providing easy access to healthcare and emergency services.</p>
            <button className="appointment-btn">Book an Appointment</button>
          </div>
          <div className="hero-image">
            <img
              src="/api/placeholder/500/600"
              alt="Doctor"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;