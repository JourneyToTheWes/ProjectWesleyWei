import React from 'react';
import Compass from '../Compass/Compass';
import './styles/Projects.css';
import RootStore from '../../../stores/RootStore';

interface IProjects {
    store: RootStore;
}

const Projects: React.FC<IProjects> = ({ store }) => {
    const { ProjectStore } = store;

    const renderProjects = () => {
        return ProjectStore.projects.map(project => {
            return (
                <div className="project">
                    <h3 className="project-name">{project.title}</h3>
                    <span className="project-date">{project.date}</span>
                    <span className="project-border"></span>
                </div>
            );
        });
    };

    return (
        <>
            <header className="projects-header">
                <div>
                    <img
                        className="logo"
                        src={require('../../../images/WestWay.JPG')}
                        alt="West Way Logo"
                        onClick={ () => window.location.href = '/' }
                    />
                </div>
            </header>
            <div className="projects-section">
                <div className="projects-menu-container">
                    <h1>Projects</h1>
                    <p>
                        A project always starts from one point and leads to
                        another direction. Same with all of these projects.
                        Click or hover to learn more.
                    </p>
                    {renderProjects()}
                </div>
                <div className="projects-compass-container">
                    <Compass size="large" />
                </div>
            </div>
        </>
    );
};

export default Projects;