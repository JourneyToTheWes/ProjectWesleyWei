import React from 'react';
import Compass from '../Compass/Compass';

const Projects = () => {
    return (
        <>
            <header>
                <div>
                    <img
                        id="logo"
                        src={require('../../../images/WestWay.JPG')}
                        alt="West Way Logo"
                    />
                </div>
            </header>
            <section>
                <div className="projects-menu-container">
                    <h1>Projects</h1>
                </div>
            </section>
            <section>
                <Compass size="large" />
            </section>
        </>
    );
};

export default Projects;