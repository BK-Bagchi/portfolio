import React from 'react'
import './Contact.css'
import Fade from 'react-reveal/Fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <>
            <section id="Contact" className="contact py-5">
                <Fade bottom>
                    <main className="container">
                        <div className="row w-100 m-0">
                            <div className="col-md-8">
                                <form className="contact-form d-flex flex-column" data-netlify="true">
                                    <input type="text" placeholder="Your Name" />
                                    <input type="email" placeholder="Your Email" />
                                    <textarea name="" rows="13" placeholder="Your message"></textarea>
                                    <input type="submit" value="Send" />
                                </form>
                            </div>
                            <div className="col-md-4 m-0 p-2 side-panel d-flex align-items-center justify-content-center">
                                <div className="contact-info">
                                    <div className="phone my-5">
                                        <p className="m-0 logo"><FontAwesomeIcon icon={faPhoneAlt} /></p>
                                        <p className="info">+8801716101098</p>
                                    </div>
                                    <div className="address my-5">
                                        <p className="m-0 logo"><FontAwesomeIcon icon={faHome} /></p>
                                        <p className="info">98/1, Sagorpara, Rajshahi</p>
                                    </div>
                                    <div className="email my-5">
                                        <p className="m-0 logo"><FontAwesomeIcon icon={faEnvelope} /></p>
                                        <p className="info">bkbagchi.dipto@gmail.com</p>
                                    </div>
                                    <div className="social-media d-flex justify-content-center">
                                        <ul type="none" className="brandIcons m-0 p-0">
                                            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/bk-bagchi"><FontAwesomeIcon icon={faGithub} /></a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="https://facebook.com/bkbagchi.dipto"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="bk"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/bkbagchi-dipto/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </Fade>
            </section>
            <footer>
                <p className="text-center m-0">Copyright &copy; BK Bagchi {new Date().getFullYear()}</p>
            </footer>
        </>
    );
};

export default Contact;