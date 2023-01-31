import React from 'react'
import './Nav.css';
import { useState } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="Navbar">
      <span className="nav-logo">DevLHB</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Collections</a>
        <a href="/about">Women</a>
        <a href="/service">About</a>
        <a href="/contact">Contact</a>
        <i className='fa fa-shopping-cart'></i>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Nav;