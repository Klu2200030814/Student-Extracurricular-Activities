// SignIn.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import './Signin.css';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your sign-in logic here
        console.log('Email:', email, 'Password:', password);
    };

    const navigate=useNavigate();
    const handleSignIn =()=>{
          navigate('/admin');
    };

    return (
        <div className="signin">
            <Navbar /> {/* Include the Navbar */}
            <div className="content">
                <h1>Hello Admin</h1>
                <form onSubmit={handleSubmit} className="signin-form">
                    <div className="form-group">
                      <label htmlFor="email"><h3>Email:</h3></label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><h3>Password:</h3></label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="signin-button" onClick={handleSignIn}>Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
