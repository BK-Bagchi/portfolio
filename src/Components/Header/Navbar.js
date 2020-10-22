import React from 'react'
import './Header.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h3 className="navbar-brand">BK Bagchi</h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item my-2 text-center"> Home</li>
                    <li className="nav-item my-2 text-center">About</li>
                    <li className="nav-item my-2 text-center">Service</li>
                    <li className="nav-item my-2 text-center">Portfolio</li>
                    <li className="nav-item my-2 text-center">Resume</li>
                    <li className="nav-item my-2 text-center">Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;