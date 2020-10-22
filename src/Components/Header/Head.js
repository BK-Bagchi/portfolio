import React from 'react'
import './Header.css'
import Me from '../../Images/MyPhoto.jpg'

const Head = () => {
    return (
        <section className="holder">
            <div className="contain item1">
                <img src={Me} alt="Me" title="My Cover Photo" className="image" />
            </div>
            <div className="contain item2">
                <div className="text font-italic">
                    <h3>Hello there...</h3>
                    <h2>I am <br />
                        <label>Balay Kumar Bagchi</label></h2>
                    <h3>Welcome to my website</h3>
                </div>
            </div>
        </section>
    );
};

export default Head;