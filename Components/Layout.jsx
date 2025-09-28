import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="portfolio-header">
      <div className="container">
        <h1>Troy Rodrigues Portfolio</h1>
        <nav className="portfolio-nav">
          <Link 
            to="/" 
            className={isActive('/') ? 'active' : ''}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={isActive('/about') ? 'active' : ''}
          >
            About
          </Link>
          <Link 
            to="/education" 
            className={isActive('/education') ? 'active' : ''}
          >
            Education
          </Link>
          <Link 
            to="/project" 
            className={isActive('/project') ? 'active' : ''}
          >
            Projects
          </Link>
          <Link 
            to="/skills" 
            className={isActive('/skills') ? 'active' : ''}
          >
            Skills
          </Link>
          <Link 
            to="/contact" 
            className={isActive('/contact') ? 'active' : ''}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

