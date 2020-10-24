import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhoneAlt, faTools, faUserTie, faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
    const showResume = () => {
        window.open("https://drive.google.com/file/d/1A4QMZobBGOc1CiQx7labMyjJRQesZo7J/view?usp=sharing", "_blank")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h3 className="navbar-brand">BK Bagchi</h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item my-2 text-center">
                        <FontAwesomeIcon style={{ fontSize: '22px' }} icon={faHome} /> Home
                    </li>
                    <li className="nav-item my-2 text-center">
                        <FontAwesomeIcon style={{ fontSize: '22px' }} icon={faAddressCard} /> About
                    </li>
                    <li className="nav-item my-2 text-center">
                        <FontAwesomeIcon style={{ fontSize: '22px' }} icon={faTools} /> Service
                    </li>
                    {/* <li className="nav-item my-2 text-center">
                        <FontAwesomeIcon style={{ fontSize: '22px' }} icon={faUserTie} /> Portfolio
                    </li> */}
                    <li className="nav-item my-2 text-center" onClick={showResume}>
                        <FontAwesomeIcon style={{ fontSize: '22px' }} icon={faWindowRestore} /> Resume
                    </li>
                    <li className="nav-item my-2 text-center">
                        <FontAwesomeIcon style={{ fontSize: '22px' }} icon={faPhoneAlt} /> Contact
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;