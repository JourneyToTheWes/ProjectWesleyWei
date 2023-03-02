import React, { useEffect, useState } from 'react';
import Compass from 'components/common/compass/Compass';
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

    const renderProjects = () => {
        return ProjectStore.projects.map(currProject => {
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
                        <span className="project-border"></span>                    
                    </Link>
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
                                {/* <div className="compass-back-logo-container"> */}
                                    {/* <img
                                        className="compass-back-logo"
                                        src={require('../../../images/WestWay.JPG')}
                                        alt="West Way Logo"                                    
                                    /> */}
                                {/* </div> */}
                                {
                                    currentHoveredProject &&                                                                                
                                        <div className="compass-back-content">
                                            <h3>{currentHoveredProject.title}</h3>
                                            <img src={require(`../../../${currentHoveredProject.images[0]}`)} alt="" />
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