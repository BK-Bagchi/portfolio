import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Head from '../Header/Head';
import Navbar from '../Header/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from '../Resume/Resume';
import Particles from 'react-particles-js';

const Main = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Navbar />
                    <Particles
                        className="particles"
                        params={{
                            "particles": {
                                "number": { "value": 100 }, "size": { "value": 3 }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": { "enable": true, "mode": "repulse" }
                                }
                            }
                        }} />
                    <Particles
                        className="particles"
                        params={{
                            "particles": {
                                "number": { "value": 100, "density": { "enable": true } },
                                "size": { "value": 10, "random": true },
                                "move": { "direction": "bottom", "out_mode": "out" },
                                "line_linked": { "enable": false }
                            },
                            "interactivity": {
                                "events": { "onclick": { "enable": true, "mode": "remove" } },
                                "modes": { "remove": { "particles_nb": 10 } }
                            }
                        }} />
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