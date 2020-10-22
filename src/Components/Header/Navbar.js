import React from 'react'
import './Header.css'

const Navbar = () => {
    return (
        <nav id="Home">
            <label className="logo">Dipto</label>
            <ul>
                <li className="inVi"><a href="#Home"><i className="fas fa-home"></i>&nbsp;Home</a></li>
                <li className="inVi"><a href="#About"><i className="fas fa-address-card"></i>&nbsp;About</a></li>
                <li className="hide h1"><a href="#Services"><i className="fas fa-tools"></i>&nbsp;Services</a></li>
                <li className="hide h2"><a href="#Contact"><i className="fas fa-phone-alt"></i>&nbsp;Contact</a></li>
                <li className="hide h3"><a href="#Feedback"><i className="fas fa-comments"></i>&nbsp;Feedback</a></li>
                <li className="disPlay"><a href="#">More&nbsp;<i className="fas fa-sort-down "></i></a>
                    <ul>
                        <li className="show s1"><a href="#Services"><i className="fas fa-tools"></i>&nbsp;Services</a></li>
                        <li className="show s2"><a href="#Contact"><i className="fas fa-phone-alt"></i>&nbsp;Contact</a></li>
                        <li className="show s3"><a href="#Feedback"><i className="fas fa-comments"></i>&nbsp;Feedback</a></li>
                    </ul>
                </li>
                <li className="menu"><a href="#"><i className="fas fa-bars" style={{ padding: '0 5px' }}></i></a>
                    <ul>
                        <li><a href="#Home"><i className="fas fa-home"></i>&nbsp;Home</a></li>
                        <li><a href="#About"><i className="fas fa-address-card"></i>&nbsp;About</a></li>
                        <li><a href="#Services"><i className="fas fa-tools"></i>&nbsp;Services</a></li>
                        <li><a href="#Contact"><i className="fas fa-phone-alt"></i>&nbsp;Contact</a></li>
                        <li><a href="#Feedback"><i className="fas fa-comments"></i>&nbsp;Feedback</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;