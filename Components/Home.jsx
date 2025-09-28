import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="page-container">
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Troy Rodrigues</h1>
                    <p className="hero-subtitle">Health Informatics Technology Student</p>
                    <p className="hero-description">
                        Bridging the gap between healthcare and technology with a passion for data-driven solutions 
                        and innovative approaches to health informatics challenges.
                    </p>
                    
                    <div className="hero-buttons">
                        <Link to="/project" className="hero-button-primary">
                            📂 View My Work
                        </Link>
                        <Link to="/contact" className="hero-button-secondary">
                            💬 Get In Touch
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="page-content" style={{textAlign: 'center'}}>
                <div className="home-features">
                    <div className="feature-card">
                        <span className="feature-icon">🎓</span>
                        <h3>Education</h3>
                        <p>Third semester at Centennial College</p>
                    </div>
                    
                    <div className="feature-card">
                        <span className="feature-icon">💻</span>
                        <h3>Skills</h3>
                        <p>Web Dev, Database, Health Analytics</p>
                    </div>
                    
                    <div className="feature-card">
                        <span className="feature-icon">🚀</span>
                        <h3>Projects</h3>
                        <p>Data visualization & system design</p>
                    </div>
                </div>
                
                <div className="home-quote">
                    <p>
                        "Passionate about leveraging technology to improve healthcare outcomes and streamline clinical workflows"
                    </p>
                </div>
            </div>
        </div>
    );
}


