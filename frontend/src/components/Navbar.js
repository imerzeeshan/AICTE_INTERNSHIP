import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate();
    const userString = localStorage.getItem('user');
    const user = userString?JSON.parse(userString):null;
    console.log(user)

    const handleLogout = () => {
        // Remove user data from local storage
        localStorage.removeItem('user');
        // Redirect to landing page
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-color">
            <div className="container-fluid">
                <a href='/'>
                <img width='45' className='me-2' 
                src='https://assets.ccbp.in/frontend/intermediate-rwd/freemium-business-model-1-img.png' />
                </a>
                <Link className="navbar-brand text-white" to="/">CollabTool</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                    {user ? (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="btn btn-link nav-link" onClick={handleLogout}>{user.username}  Logout</button>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/register">Register</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;