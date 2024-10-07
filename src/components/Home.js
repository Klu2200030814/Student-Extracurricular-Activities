import React from 'react';
import './Home.css';
import image from '../assets/Student.jpg.jpg'; // Adjust the path as needed
import { FaUserGraduate } from 'react-icons/fa'; // Change FaStudent to FaUserGraduate
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate= useNavigate();
    const handleSignIn = () => {
        navigate('/signin');
    };
    const handleLoginIn=()=>{
        navigate('/user');
    }
  return (
    <div className="home">
      <nav className="navbar">
        <div className="nav-title">
          <FaUserGraduate className="nav-icon" /> {/* Updated Student Icon */}
          <span>Student Extracurricular Activities</span>
        </div>
        <div className="button-container"> {/* New container for buttons */}
                    <button className="signin-button" onClick={handleSignIn}>Admin LogIn</button>
                    <button className="user-login-button" onClick={handleLoginIn}>User LogIn</button>
        </div>
      </nav>
      <div className="content">
        <h1>Welcome to Student Extracurricular Activities Portal</h1>
        <img src={image} alt="Centered" className="center-image" />
      </div>
    </div>
  );
}

export default Home;
