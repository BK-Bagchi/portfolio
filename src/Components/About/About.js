import React, { useState } from 'react'
import './About.css'
import Blog from './Blogs/Blog'
import Left from './Left'
import Right from './Right'
import Work from './Works/Work'

const About = () => {
    const [work, setWork] = useState('')

    return (
        <section id="About" className="about py-3">
            <div className="row w-100 m-0">
                <div className="col-md-4 px-3 d-flex flex-column align-items-center">
                    <Left />
                </div>
                <div className="col-md-8">
                    <Right />
                </div>
            </div>
            <div id="Projects" className="works my-5 d-flex flex-column align-items-center justify-content-center">
                <h3>Projects</h3>
                <div className="btn-group btn-group-toggle">
                    <label className="btn btn-secondary" onClick={() => setWork('')}>
                        <p className="m-0">All</p>
                    </label>
                    <label className="btn btn-secondary active" onClick={() => setWork('frontEnd')}>
                        <p className="m-0">Front End</p>
                    </label>
                    <label className="btn btn-secondary" onClick={() => setWork('fullStack')}>
                        <p className="m-0">Full Stack</p>
                    </label>
                </div>
                <div className="work">
                    <Work work={work} />
                </div>
            </div>
            <div id="Blogs" className="blogs my-5 d-flex flex-column align-items-center justify-content-center">
                <h3>Blogs</h3>
                <Blog />
            </div>
        </section>
    );
};

export default About;