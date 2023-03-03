import Header from 'components/layout/header/Header';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { IProject } from 'stores/ProjectStore';
import './styles/Project.css';

interface IProjectState {
    project: IProject;
}

const Project = () => {
    const state = useLocation().state as IProjectState;
    const project = state?.project;

    /**
     * Gets the project cover image path if there exists one,
     * otherwise defaults to a select default cover images.
     * 
     * @returns a background image absolute path to display for the
     * project cover
     */
    const renderBgImgSrc = () => {
        return project.images.includes('project-cover')
            ? `${project.imagesDir}/project-cover`
            : 'cloud.png';
    };

    return (
        <>
            <Header
                bgImageSrc={renderBgImgSrc()}
            >
                <h1>Projects</h1>
            </Header>
            <div className="project-container">
                <h1>{project.title}</h1>

            </div>
        </>
    );
};

export default Project;