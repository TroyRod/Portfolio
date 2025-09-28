import React from 'react';

export default function About() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1>About Me</h1>
            </div>
            
            <div className="page-content">
                <div className="about-content">
                    <div className="profile-section">
                        <div className="profile-image-container">
                            <img 
                                src="/Images/profile.png" 
                                alt="Troy Rodrigues"
                                className="profile-image"
                            />
                        </div>
                        
                        <div className="profile-info">
                            <h2>Troy Rodrigues</h2>
                            <p className="profile-title">Health Informatics Technology Student</p>
                            <div className="contact-brief">
                                <div className="contact-item">
                                    <span className="contact-label">📧 Email:</span>
                                    <span>trodrig4@my.centennialcollege.ca</span>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-label">📍 Location:</span>
                                    <span>Toronto, ON</span>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-label">🎓 Program:</span>
                                    <span>Health Informatics Technology (Co-op)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bio-section">
                        <h3>Hello Everyone! 👋</h3>
                        <p>
                            My name is Troy Rodrigues, and I am currently a Health Informatics Technology student 
                            at Centennial College in my third semester. I'm passionate about leveraging technology 
                            to solve real-world healthcare challenges.
                        </p>
                        <p>
                            This portfolio website showcases my journey through academia, highlighting the projects, 
                            skills, and knowledge I've gained along the way. I believe in continuous learning and 
                            am excited to share my growth as a future health informatics professional.
                        </p>
                        <p>
                            My goal is to bridge the gap between healthcare and technology, developing innovative 
                            solutions that can improve healthcare delivery, enhance patient outcomes, and streamline 
                            clinical workflows. I'm particularly interested in data analytics, health information 
                            systems, and emerging technologies in healthcare.
                        </p>
                        
                        <div className="skills-preview">
                            <h4>What I'm Currently Learning:</h4>
                            <div className="skills-tags">
                                <span className="skill-tag">Health Data Management</span>
                                <span className="skill-tag">Medical Terminology</span>
                                <span className="skill-tag">Healthcare Analytics</span>
                                <span className="skill-tag">System Analysis</span>
                                <span className="skill-tag">Database Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}