import React from 'react';
import Compass from '../Compass/Compass';
import './styles/Projects.css';

const Projects = () => {
    return (
        <>
            <header className="projects-header">
                <div>
                    <img
                        className="logo"
                        src={require('../../../images/WestWay.JPG')}
                        alt="West Way Logo"
                    />
                </div>
            </header>
            <div className="projects-section">
                <div className="projects-menu-container">
                    <h1>Projects</h1>
                </div>
                <Compass size="large" />
            </div>
        </>
    );
};

export default Projects;