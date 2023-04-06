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
                <div className="fg-block-1">
                    <h2>Wesley Wei</h2>
                    <img
                        className="about-me-img"
                        src="/assets/images/aboutMe2.jpeg"
                        alt="About me section two image"
                    />
                    <h4>What is <span>West Way</span>?</h4>
                    <p>
                        My inspiration for this website name is a spin off of my actual name “Wesley Wei”
                        (some call me Wes Wei) which sounds phonetically the same as “West Way”.
                    </p>
                </div>
                <div className="fg-block-2">
                    <p>
                        <span>What I am doing now:</span> Just finished up my studies with
                        a Masters in Computer Science (Dec. 2022) at Columbia University!
                        I am currently seeking a job as a Software Engineer.
                        <br /><br />
                        Hello! My name is Wesley Wei and I graduated with a Bachelors of
                        Science in Informatics at the University of Washington and recently
                        with a Master of Science in Computer Science at Columbia University.
                        This website is dedicated to channel my inner web development creativity
                        and from what I learned from my web development education, experience from my job,
                        and self teaching. Here you can browse through my resume, videos, and projects
                        that I worked on over the years. I like to challenge myself by occupying my schedule
                        with many activities. My hobbies include: playing the violin, playing table tennis,
                        dancing, and cooking. A fun fact would be that I am nationally ranked in table tennis!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;