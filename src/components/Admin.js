// Admin.js
import React, { useState } from 'react';
import './Admin.css'; // Import Admin specific styles
import { FaUserGraduate } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa'; 
function Admin() {
    const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="admin">
            <nav className="navbar">
            <div className="nav-title">
                <FaUserGraduate className="nav-icon" />
                <span>Student Extracurricular Activities</span>
            </div>
            <div className="menu-container">
                <button className="menu-button" onClick={toggleMenu}>
                    <FaBars />
                </button>
                {menuOpen && (
                    <div className="menu-dropdown">
                        <ul>
                            <li>Add Student</li>
                            <li>View Student</li>
                            <li>Add Event</li>
                            <li>View Event</li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
            <div className="content">
                <h1>Admin Dashboard</h1>
                {/* Additional content for the admin dashboard can go here */}
            </div>
        </div>
    );
}

export default Admin;
