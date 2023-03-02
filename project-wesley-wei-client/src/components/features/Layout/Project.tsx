import React from 'react';
import { useLocation } from 'react-router-dom';
import { IProject } from '../../../stores/ProjectStore';

interface IProjectState {
    project: IProject;
}

const Project = () => {
    const location = useLocation();
    const state = location.state as IProjectState;
    
    return (
        <div>
            <h1>This is {state?.project?.title}!</h1>
        </div>
    );
};

export default Project;