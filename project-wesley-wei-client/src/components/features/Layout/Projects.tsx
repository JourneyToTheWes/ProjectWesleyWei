import React, { useEffect, useState } from 'react';
import Compass from '../Compass/Compass';
import RootStore from '../../../stores/RootStore';
import { observer } from 'mobx-react-lite';
// import { IProject } from '../../../stores/ProjectStore';
import './styles/Projects.css';

interface IProjects {
    store: RootStore;
}

const Projects: React.FC<IProjects> = ({ store }) => {
    const { ProjectStore } = store;

    const [currentHoveredProject, setCurrentHoveredProject] = useState<any>(null);

    // const [projects, setProjects] = useState<IProject[]>([]);
    // useEffect(() => {
    //     setProjects(ProjectStore.projects);
    // }, [ProjectStore.isProjectLoaded]);

    const renderProjects = () => {
        return ProjectStore.projects.map(project => {
            return (
                <div className="project"
                    onMouseEnter={() => {
                        console.log(`hover over ${project.title}`);
                        setCurrentHoveredProject(project);
                    }}
                    // onMouseLeave={() => setCurrentHoveredProject(null)}
                >
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
                    <div className="project-list-container">
                        {ProjectStore.isProjectLoaded ? renderProjects() : <></>}
                    </div>
                </div>
                <div className="projects-compass-container">
                    <div className={`flip-container`}>
                        <div className={`flipper ${currentHoveredProject ? "hovered" : ""}`}>
                            {/* Front of compass */}
                            <Compass size="large" className={currentHoveredProject ? "hovered" : ""} />
                            {/* Back of compass */}
                            <div className="compass-back">
                                {
                                    currentHoveredProject &&
                                    <div className="compass-back-content">
                                        <img src={require(`../../../${currentHoveredProject.images[0]}`)} alt="" />
                                        <p>{currentHoveredProject.description}</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default observer(Projects);