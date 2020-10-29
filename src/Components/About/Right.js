import React from 'react'
import Experience from './Experience/Experience'
import Skills from './Skills/Skills'
import Work from './Works/Work'

const Right = () => {
    return (
        <>
            <div className="head">
                <h1 className="text-dark"><strong>Balay Kumar Bagchi</strong></h1>
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
                <h3>Skills</h3>
                <Skills />
            </div>
            <div className="experience my-5">
                <h3>Experience</h3>
                {/* <p className="text-muted m-0">Oct 2020- Present</p>
                <h5>Software Developer (Intern)</h5>
                <h4 className="text-dark d-inline">Pipesort Technologies LLP,</h4>
                <p className="m-0 text-muted d-inline">Chennai, India</p> */}
                <Experience />
            </div>
            <div className="works my-5 d-flex flex-column align-items-center justify-content-center">
                <h3 className="align-self-start">Works</h3>
                {/* <div className="btn-group btn-group-toggle">
                    <label className="btn btn-secondary">
                        <p className="m-0">All</p>
                    </label>
                    <label className="btn btn-secondary active">
                        <p className="m-0">Front End</p>
                    </label>
                    <label className="btn btn-secondary">
                        <p className="m-0">Full Stack</p>
                    </label>
                </div> */}
                <div className="work">
                    <Work />
                </div>
            </div>
        </>
    );
};

export default Right;