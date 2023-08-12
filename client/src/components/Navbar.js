import React, { useRef, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logout from '../Login/Logout';

function Navbar() {
  const navRef = useRef();

  // Check if the user is logged in and update loggedIn state accordingly
  const isLoggedIn = !!localStorage.getItem('token');

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const [show, handleShow] = useState(false);

  const trasnitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', trasnitionNavBar);
    return () => window.removeEventListener('scroll', trasnitionNavBar);
  }, []);

  return (
    <header className={`nav ${show && 'nav_white'}`}>
      <img src="./logo2.png" alt="Logo" />
      <div>
        <nav ref={navRef}>
          <Link to="/">Home</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/about">About Us</Link>
          <Link to="/sustainability">Sustainability</Link>
          {isLoggedIn && <Link to="/blog">Blog</Link>}
          {isLoggedIn ? (
            <Logout /> // Show Logout button when logged in
          ) : (
            <Link to="/login">Login</Link>
          )}
          <Link to="/contact">
            <button className="button-89">Contact Us</button>
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <span>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </span>
      </div>
    </header>
  );
}

export default Navbar;