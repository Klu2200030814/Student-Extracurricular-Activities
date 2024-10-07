// Navbar.js
import React from 'react';
import './Navbar.css'; // Create a separate CSS file for Navbar styles
import { FaUserGraduate } from 'react-icons/fa';


const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="nav-title">
                <FaUserGraduate className="nav-icon" />
                <span>Student Extracurricular Activities</span>
            </div>
        </nav>
    );
};

export default Navbar;
