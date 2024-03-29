import React from 'react'
import { Link } from 'react-router-dom'
import './Resume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faGlobe, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

const Resume = () => {
    const openLink = (link) => {
        window.open(link, "_blank")
    }
    return (
        <section className="see-resume p-5 d-flex justify-content-center">
            <div className="go-back d-flex flex-column">
                <a href="#" className="my-2" onClick={() => openLink('https://drive.google.com/file/d/1dh_puIuQhqUW9H8t1Mx1ikocE6B1vXWi/view?usp=sharing')}>
                    <FontAwesomeIcon icon={faDownload} /> Download Resume</a>
                <Link to="/" className="my-2"><FontAwesomeIcon icon={faLongArrowAltLeft} /> Go Back</Link>
            </div>
            <main className="p-5">
                <div className="top row">
                    <div className="col-md-6">
                        <h1 className="font-weight-bold">Balay Kumar Bagchi</h1>
                        <h5>98/1, Sagorpara, Rajshahi</h5>
                        <h5>+8801308723399</h5>
                        <h5 className="link">bkbagchi.dipto@gmail.com</h5>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-end">
                        <h5 className="link" onClick={() => openLink('https://github.com/BK-Bagchi')}>
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </h5>
                        <h5 className="link" onClick={() => openLink('https://www.linkedin.com/in/bkbagchi-dipto/')}>
                            <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
                        </h5>
                        <h5 className="link" onClick={() => openLink('https://bkbagchi-dipto.netlify.app/')}>
                            <FontAwesomeIcon icon={faGlobe} /> Portfolio
                        </h5>
                    </div>
                </div>
                <div className="objective mt-3">
                    <p>Former junior software developer at Pipesort Technologies LLP with 6 months of working experience. I am good at Javascript programming and ReactJS. Besides, love to work in different working environments and situations and am skilled with managing and developing works.</p>
                </div>
                <div className="experience">
                    <h3 className="color bold">Experience</h3>
                    <span className="text-muted">October 2020- January 2021</span>
                    <h5>Intern Software Developer</h5>
                    <span className="text-muted">January 2021- April 2021</span>
                    <h5>Junior Software Developer</h5>
                    <h4>Pipesort Technologies LLP, <span className="text-muted">Chennai, India</span></h4>
                    <ul>
                        <li>Made responsive UI of different projects according to given design.</li>
                        <li>Integrated front-end with given APIs.</li>
                        <li>Made data interaction between pages at client side.</li>
                        <li>Communicated with clients and collect project demands.</li>
                        <li>Presented clients the project progress and collect further instructions.</li>
                    </ul>
                </div>
                <div className="skills">
                    <h3 className="color bold">Programming Skills</h3>
                    <p><span className="font-weight-bold">Comfortable: </span>React, JavaScript, Bootstrap, React Router, jQuery, HTML, CSS</p>
                    <p><span className="font-weight-bold">Familiar: </span>NodeJS, ExpressJS, MySQL, MongoDB, Material-UI, Python, SASS</p>
                    <p><span className="font-weight-bold">Tools: </span>Git, Firebase, Chrome Dev Tools, VS Code, Sublime Text</p>
                </div>
                <div className="skills">
                    <h3 className="color bold">Software Skills</h3>
                    <div className="d-flex">
                        <div>
                            <ul>
                                <li>MS Word</li>
                                <li>MS PowerPoint</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>MS Excel</li>
                                <li>TeamViewer</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>VS Code</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projects">
                    <h3 className="color bold">Personal Projects</h3>
                    <div className="ml-4">
                        <h4>Red Onion Foods <span className="github" onClick={() => openLink('https://github.com/BK-Bagchi/red-onion-restaurent')}>| GitHub </span>
                            <span className="live-site" onClick={() => openLink('https://the-red-onion-foods.web.app/')}>| Live Link</span></h4>
                        <ul>
                            <li>MERN project for a food delivery service or restaurant.</li>
                            <li>Provides different menu for breakfast, lunch and dinner.</li>
                            <li>There is a cart holding selected foods and user can customize his cart.</li>
                            <li>Built with ReactJS, Material-UI, Bootstrap, ExpressJS, Firebase auth.</li>
                        </ul>
                        <h4>The Ultimate Traveler <span className="github" onClick={() => openLink('https://github.com/BK-Bagchi/the-ultimate-traveler')}>| GitHub </span>
                            <span className="live-site" onClick={() => openLink('https://the-ultimate-traveler.web.app/')}>| Live Link</span></h4>
                        <ul>
                            <li>ReactJS based front-end project showing different travel destination.</li>
                            <li>User selects his travel destination and fills the information form.</li>
                            <li>User will see hotels at his destination and google map will also be there.</li>
                            <li>Built with ReactJS, React Router, Material-UI, Bootstrap, Firebase auth.</li>
                        </ul>
                        <h4>Volunteer Network <span className="github" onClick={() => openLink('https://github.com/BK-Bagchi/vlounteer-network')}>| GitHub </span>
                            <span className="live-site" onClick={() => openLink('https://volunteers-network.web.app/')}>| Live Link</span></h4>
                        <ul>
                            <li>MERN project with real-time database shows different volunteering options.</li>
                            <li>User selects any work and register for the volunteering.</li>
                            <li>User has his own dashboard to see his selected works.</li>
                            <li>Built with ReactJS, Material-UI, Bootstrap, SwiperJS, ExpressJS, Firebase.</li>
                        </ul>
                        <h4>Creative Agency <span className="github" onClick={() => openLink('https://github.com/BK-Bagchi/creative-agency')}>| GitHub </span>
                            <span className="live-site" onClick={() => openLink('https://the-creative-agency.web.app/')}>| Live Link</span></h4>
                        <ul>
                            <li>Full-stack project with different feature for software or design firm.</li>
                            <li>User can order a work, review on work, see order condition from dashboard.</li>
                            <li>Admin can see all order list, add new feature and admin from dashboard.</li>
                            <li>Built with ReactJS, Bootstrap, SwiperJS, ExpressJS, Firebase auth.</li>
                        </ul>
                        <h4>Social Dude <span className="github" onClick={() => openLink('https://github.com/BK-Bagchi/social-buddy')}>| GitHub </span>
                            <span className="live-site" onClick={() => openLink('https://social-dude.netlify.app/')}>| Live Link</span></h4>
                        <ul>
                            <li>React based web application shows components on screen using API data.</li>
                            <li>Calls different APIs, manages data in client side and shows an organized view.</li>
                            <li>Built with ReactJS, React Router, Material-UI, Bootstrap.</li>
                        </ul>
                    </div>
                </div>
                <div className="education">
                    <h3 className="color bold">Education</h3>
                    <span className="text-muted">January 2017 - December 2020</span>
                    <h4>Varendra University, Rajshahi <span className="text-muted font-italic">B.Sc. in </span>Computer Science and Engineering</h4>
                    <p>CGPA: 3.85/4</p>
                </div>
                <div className="declaration">
                    <h3 className="color bold">Declaration</h3>
                    <p>I do hereby declare that all of the information mentioned above is totally true.
                    In case of any false information, I shall be liable to appropriate legal action.</p>
                </div>
            </main>
        </section>
    );
};

export default Resume;