import React from 'react'
import Fade from 'react-reveal/Fade'
import Experience from './Experience/Experience'
import Skills from './Skills/Skills'

const Right = () => {
    return (
        <Fade right>
            {/* <div className="head">
                <h1 className="text-dark"><strong>Balay Kumar Bagchi</strong></h1>
                <h4>Front End Developer</h4>
            </div> */}
            {/* <div className="objective my-5">
                <h3>Career Objective</h3>
                <p className="m-0">Love to work with web technologies and make different UI. The initial goal is to
                make a career as a front-end developer and have a dream to establish me as a full-
                stack developer. Currently, I am a fresher and seeking a challenging yet rewarding
                        career with a progressive organization that provides the opportunity for development.</p>
            </div> */}
            <div className="skills my-5">
                <h3>Skills</h3>
                <Skills />
            </div>
            <div className="experience my-5">
                <h3>Experience</h3>
                <Experience />
            </div>
        </Fade>
    );
};

export default Right;