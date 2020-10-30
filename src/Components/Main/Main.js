import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Head from '../Header/Head';
import Navbar from '../Header/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from '../Resume/Resume';

const Main = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Navbar />
                    <Head />
                    <About />
                    <Contact />
                </Route>
                <Route path="/resume">
                    <Resume />
                </Route>
            </Switch>
        </Router>
    );
};

export default Main;