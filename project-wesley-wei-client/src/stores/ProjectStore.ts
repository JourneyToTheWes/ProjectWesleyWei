import { makeObservable, observable, action } from 'mobx';
import RootStore from './RootStore';
import axios from 'axios';

class ProjectStore {
    rootStore: RootStore;
    @observable isProjectLoaded: boolean = false;
    @observable projectMap: IProjectsMap = {};
    @observable sortedProjectYears: string[] = [];

    constructor(rootStore: RootStore) {
        /**
         * In order to use decorators in MobX 6+ we need to include
         * "makeObservable() now. Decorators aren't the standard in ES
         * so to keep using decorators we need this call.
         * https://mobx.js.org/enabling-decorators.html"
         */
        makeObservable(this);
        this.rootStore = rootStore;
        this.loadProjects();
    }

    @action
    async loadProjects() {
        try {
            const res = await axios.get(`api/projects`);
            console.log(res);
            if (res.data) {
                // Sorting the projects by date
                // let localProjectMap: IProjectsMap;
                res.data.sort((a: IProject, b: IProject) => {
                    let aDate, bDate;
                    if (a.date.includes('-')) {
                        let aStringDate = a.date.substring(a.date.indexOf('-') + 2);
                        aDate = new Date(aStringDate);
                        
                        if (aStringDate.toLowerCase().includes('present')) {
                            aDate = new Date();
                        }
                    } else {
                        aDate = new Date(a.date);
                    }

                    if (b.date.includes('-')) {
                        let bStringDate = b.date.substring(b.date.indexOf('-') + 2);
                        bDate = new Date(bStringDate);

                        if (bStringDate.toLowerCase().includes('present')) {
                            aDate = new Date();
                        }
                    } else {
                        bDate = new Date(b.date);
                    }

                    return bDate.getTime() - aDate.getTime();
                }).forEach((project: IProject) => {                    
                    let projectDate;

                    if (project.date.includes('-')) {
                        let projectStringDate = project.date.substring(project.date.indexOf('-') + 2);
                        projectDate = new Date(projectStringDate);

                        if (projectStringDate.toLowerCase().includes('present')) {
                            projectDate = new Date();
                        }
                    } else {
                        projectDate = new Date(project.date);
                    }

                    const projectYear = projectDate.getUTCFullYear();
                    if (projectYear in this.projectMap) {
                        this.projectMap[projectYear].push(project);
                    } else {
                        this.projectMap[projectYear] = [project];
                    }
                });
                this.isProjectLoaded = true;
            }
        } catch (err) {
            console.error(err);
        }
    }

    @action
    getSortedProjectYears() {
        if (this.sortedProjectYears.length > 0) {
            return this.sortedProjectYears;
        }
        
        let localSortedProjectYears: string[] = [];
        if (this.isProjectLoaded) {
            localSortedProjectYears = Object.keys(this.projectMap)
                .sort((a: string, b: string) => parseInt(b) - parseInt(a));
        }

        this.sortedProjectYears = localSortedProjectYears;

        return this.sortedProjectYears;
    }
}

export interface IProject {
    _id: string;
    title: string;
    date: string;
    description: string[];
    images: string[];
    imagesDir: string;
    otherContributors: string[];
    skills: string[];
}

export interface IProjectsMap {
    [key: number]: IProject[];
}

export default ProjectStore;