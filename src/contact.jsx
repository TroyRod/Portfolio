import React from 'react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Capture the form data (for demonstration)
        console.log('Form submitted with data:', formData);
        
        // Show success message
        alert(`Thank you for your message, ${formData.firstName}! I will get back to you soon.`);
        
        // Redirect to home page
        navigate('/');
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Contact Me</h1>
                <p>Let's connect and discuss opportunities</p>
            </div>
            
            <div className="page-content">
                <div className="contact-layout">
                    {/* Contact Information Panel */}
                    <div className="contact-info-panel">
                        <h2>Get In Touch</h2>
                        <div className="contact-info">
                            <div className="contact-item">
                                <span className="contact-label">📧 Email:</span>
                                <span>trodrig4@my.centennialcollege.ca</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-label">🏫 College:</span>
                                <span>Centennial College</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-label">📚 Program:</span>
                                <span>Health Informatics Technology</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-label">📈 Status:</span>
                                <span>Third Semester Student</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-panel">
                        <h2>Send Me a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name *</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last Name *</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contactNumber">Contact Number</label>
                                <input
                                    type="tel"
                                    id="contactNumber"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    placeholder="(123) 456-7890"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Please enter your message here..."
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-button">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}