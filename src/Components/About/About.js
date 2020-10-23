import React from 'react'
import './About.css'
import Left from './Left'
import Right from './Right'

const About = () => {
    return (
        <section className="about py-3">
            <div className="row w-100 m-0">
                <div className="col-md-4 px-3 d-flex flex-column align-items-center">
                    <Left />
                </div>
                <div className="col-md-8">
                    <Right />
                </div>
            </div>
        </section>
    );
};

export default About;