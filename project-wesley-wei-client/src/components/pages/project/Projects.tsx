import React, { useEffect, useState } from 'react';
import Compass from 'components/common/compass/Compass';
import Header from 'components/layout/header/Header';
import RootStore from 'stores/RootStore';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import './styles/Projects.css';

interface IProjects {
    store: RootStore;
}

const Projects: React.FC<IProjects> = ({ store }) => {
    const { ProjectStore } = store;
    const [currentHoveredProject, setCurrentHoveredProject] = useState<any>(null);
    const [isOnCompassBack, setIsOnCompassBack] = useState<boolean>(false);
    const [compassFlipTimer, setCompassFlipTImer] = useState<number>(5000);

    useEffect(() => {
        if (compassFlipTimer === 0 && !isOnCompassBack) {
            setCurrentHoveredProject(null);
            setCompassFlipTImer(5000);
        }
    }, [compassFlipTimer, isOnCompassBack]);

    /**
     * Renders projects in a timeline with containers of projects
     * denoting each year that the project was last worked in.
     * 
     * @returns React Node elements with projects in a timeline structure
     */
    const renderProjects = () => {
        return [...ProjectStore.getSortedProjectYears()].map(projectYear => {
            // Mapping through each year to create a timeline of
            // projects for that given year
            const projectsInYear = ProjectStore.projectMap[parseInt(projectYear)];
            return (
                <div className="project-year-container">
                    <h3 className="project-year-heading">{projectYear}</h3>
                    {
                        projectsInYear.map((currProject, index) => {
                            return (
                                <div className="project"                        
                                    onMouseEnter={() => {
                                        setCurrentHoveredProject(currProject);
                                        window.setTimeout(() => {
                                            // if (currentHoveredProject.title === project.title) {
                                            setCompassFlipTImer(0);
                                            // }
                                        }, compassFlipTimer);
                                    }}
                                    // onMouseLeave={() => setCurrentHoveredProject(null)}
                                    key={currProject._id}
                                >
                                    <Link
                                        to={currProject._id}
                                        state={{ project: JSON.parse(JSON.stringify(currProject)) }}
                                        className="project-link"
                                    >
                                        <h3 className="project-name">{currProject.title}</h3>
                                        <span className="project-date">{currProject.date}</span>
                                        {
                                            // Do not render the project border for the last
                                            // project in that project container
                                            projectsInYear.length - 1 !== index &&
                                                <span className="project-border"></span>                    
                                        }
                                    </Link>
                                </div>
                            );
                        })
                    }
                </div>
            )
        });
    };

    return (
        <>
            <Header />
            <div className="projects-section">
                <div className="projects-menu-container">
                    <h1>Projects</h1>
                    <p>
                        A project always starts from one point and leads to
                        another direction. Same with all of these projects.
                        <b> Click</b> or <b>hover</b> to learn more.
                    </p>
                    <div className="project-list-container">
                        {ProjectStore.isProjectLoaded ? renderProjects() : <></>}
                    </div>
                </div>
                <div className="projects-compass-container">
                    <div className={`flip-container`}>
                        <div className={`flipper ${currentHoveredProject ? "hovered" : ""}`}>
                            {/* Front of compass */}
                            <Compass size="large" />
                            {/* Back of compass */}
                            <div
                                className="compass-back"
                                onMouseEnter={() => setIsOnCompassBack(true)}
                                onMouseLeave={() => setIsOnCompassBack(false)}
                            >

                                <div className="compass-back-border"></div>
                                {
                                    currentHoveredProject &&                                                                                
                                        <div className="compass-back-content">
                                            <h3>{currentHoveredProject.title}</h3>
                                            <img src={`/assets/${currentHoveredProject.images[0]}`} alt="" />
                                            <span>
                                                <u>Description</u>
                                            </span>
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