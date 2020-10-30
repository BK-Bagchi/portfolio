import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhoneAlt, faTools, faUserTie, faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
    const showResume = () => {
        window.open("https://drive.google.com/file/d/1B3NkCFZi7MhDir6HBjlKqPp11CxsxvhM/view?usp=sharing", "_blank")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h3 className="navbar-brand">BK Bagchi</h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <a href="#Home"><li className="nav-item my-2 text-center">
                        <FontAwesomeIcon style={{ fontSize: '22px' }} icon={faHome} />Home
                    </li></a>
                    <a href="#About"> <li className="nav-item my-2 text-center">
                        <FontAwesomeIcon style={{ fontSize: '22px' }} icon={faAddressCard} />About
                    </li></a>
                    <a href="#Projects"><li className="nav-item my-2 text-center">
                        <FontAwesomeIcon style={{ fontSize: '22px' }} icon={faTools} />Projects
                    </li></a>
                    <a href="#Blogs"><li className="nav-item my-2 text-center">
                        <FontAwesomeIcon style={{ fontSize: '22px' }} icon={faWindowRestore} />Blogs
                    </li></a>
                    <li className="nav-item my-2 text-center" onClick={showResume}>
                        <FontAwesomeIcon style={{ fontSize: '22px' }} icon={faUserTie} /> Resume
                    </li>
                    <a href="#Contact"><li className="nav-item my-2 text-center">
                        <FontAwesomeIcon style={{ fontSize: '22px' }} icon={faPhoneAlt} />Contact
                    </li></a>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;