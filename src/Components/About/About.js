import React from 'react'
import './About.css'
import Work from './Works/Work'

const About = () => {
    return (
        <section className="about py-3">
            <div className="row w-100">
                <div className="col-md-3">a</div>
                <div className="col-md-9">
                    <div className="head">
                        <h1>Balay Kumar Bagchi</h1>
                        <h4>Front End Developer</h4>
                    </div>
                    <div className="objective my-5">
                        <h3>Career Objective</h3>
                        <p className="m-0">Love to work with web technologies and make different UI. The initial goal is to
                        make a career as a front-end developer and have a dream to establish me as a full-
                        stack developer. Currently, I am a fresher and seeking a challenging yet rewarding
                        career with a progressive organization that provides the opportunity for development.</p>
                    </div>
                    <div className="skills my-5">
                        skill section comes here
                    </div>
                    <div className="experience my-5">
                        <h3>Experience</h3>
                        <p className="text-muted m-0">Oct 2020- Present</p>
                        <h5>Software Developer (Intern)</h5>
                        <h4 className="text-dark d-inline">Pipesort Technologies LLP,</h4> <p className="m-0" className="text-muted d-inline">Chennai, India</p>
                    </div>
                    <div className="works my-5 d-flex flex-column align-items-center justify-content-center">
                        <div className="btn-group btn-group-toggle">
                            <label className="btn btn-secondary">
                                <p className="m-0">All</p>
                            </label>
                            <label className="btn btn-secondary active">
                                <p className="m-0">Front End</p>
                            </label>
                            <label className="btn btn-secondary">
                                <p className="m-0">Full Stack</p>
                            </label>
                        </div>
                        <div className="work">
                            <Work />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;