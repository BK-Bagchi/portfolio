import React from 'react'
import './Header.css'

const Head = () => {
    return (
        <section className="holder">
            <div className="contain item2">
                <div className="text font-italic">
                    <h3>Hello there...</h3>
                    <h2>I am <br />
                        <label>Balay Kumar Bagchi</label></h2>
                    <h3>Programmer | Web Developer | Engineer</h3>
                    <button type="button" class="btn btn-dark m-3">Contact Me</button>
                    <button type="button" class="btn btn-dark m-3">Download Resume</button>
                </div>
            </div>
        </section>
    );
};

export default Head;