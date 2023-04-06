import React from 'react';
import './styles/About.css';

const About = () => {
    return (
        <div id="about">
            <div className="about-section-one">
                <img
                    className="about-bg-cover"
                    src="/assets/images/aboutMe2.jpeg"
                    alt="About section background cover image"
                />
                <img
                    className="about-fg-img"
                    src="/assets/images/aboutMe2.jpeg"
                    alt="About section foreground (about me) image"
                />
                <h1 className="about-header">
                    Hello! My name is <br/>
                    <span>Wesley Wei</span> and <br/>
                    this is <span>West Way</span>.
                </h1>
            </div>
            <div className="about-section-two">
                <div className="bg-block"></div>
                <div className="fg-block-1"></div>
                <div className="fg-block-2"></div>
            </div>
        </div>
    );
};

export default About;