import Header from 'components/layout/header/Header';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { IProject } from 'stores/ProjectStore';

interface IProjectState {
    project: IProject;
}

const Project = () => {
    const location = useLocation();
    const state = location.state as IProjectState;
    
    return (
        <>
            <Header>
                <h1>Projects</h1>
            </Header>
            <h1>This is {state?.project?.title}!</h1>
        </>
    );
};

export default Project;