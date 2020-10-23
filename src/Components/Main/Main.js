import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Head from '../Header/Head';
import Navbar from '../Header/Navbar';

const Main = () => {
    return (
        <>
            <Navbar />
            <Head />
            <About />
            <Contact />
        </>
    );
};

export default Main;