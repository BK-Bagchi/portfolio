import React from 'react'
import './Header.css'
import Typical from 'react-typical'

const Head = () => {
    const showResume = () => {
        window.open("https://drive.google.com/file/d/12MtgEbxygB5mqd6Dr4JW8xlk4eDtDHi3/view?usp=sharing", "_blank")
    }

    return (
        <section id="Home" className="holder">
            <div className="contain item2">
                <div className="text font-italic">
                    <h3>Hello there...</h3>
                    <h2>I am <br />
                        <label className="animate__animated animate__rubberBand">Balay Kumar Bagchi</label></h2>
                    {/* <h3>Programmer | Front End Developer | Engineer</h3> */}
                    <Typical
                        steps={['Programmer', 1000, 'Front End Developer', 1000, 'Engineer', 1000]}
                        loop={Infinity}
                        wrapper="h3"
                    />
                    <a href="#Contact" className="zIndex"><button className="contact-btn">Contact Me</button></a>
                    <button className="resume zIndex" onClick={showResume}>Download Resume</button>
                </div>
            </div>
        </section>
    );
};

export default Head;