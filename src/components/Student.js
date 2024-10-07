// Student.js
import React, { useState } from 'react';
import './Student.css'; // Import Student specific styles
import { FaUserGraduate } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa'; 
const Student = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="student">
            <nav className="navbar">
            <div className="nav-title">
                <FaUserGraduate className="nav-icon" />
                <span>Student Extracurricular Activities</span>
            </div>
            <div className="menu-container">
                <button className="menu-button" onClick={toggleMenu}>
                    <FaBars />
                </button>
                {isMenuOpen && (
                        <div className="menu-dropdown">
                            <ul>
                                <li>My Events</li>
                                <li>View Event</li>
                            </ul>
                        </div>
                )}
            </div>
        </nav>
            <div className="content">
                <h1>Welcome Student</h1>
             </div>
        </div>
    );
};

export default Student;
