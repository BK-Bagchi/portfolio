import React from 'react'
import './Header.css'

const Head = () => {
    const showResume = () => {
        window.open("https://drive.google.com/file/d/1B3NkCFZi7MhDir6HBjlKqPp11CxsxvhM/view?usp=sharing", "_blank")
    }

    return (
        <section id="Home" className="holder">
            <div className="contain item2">
                <div className="text font-italic">
                    <h3>Hello there...</h3>
                    <h2>I am <br />
                        <label>Balay Kumar Bagchi</label></h2>
                    <h3>Programmer | Web Developer | Engineer</h3>
                    <a href="#Contact"><button className="contact-btn">Contact Me</button></a>
                    <button className="resume" onClick={showResume}>Download Resume</button>
                </div>
            </div>
        </section>
    );
};

export default Head;