import { makeObservable, observable, action } from 'mobx';
import RootStore from './RootStore';
import axios from 'axios';

class ProjectStore {
    rootStore: RootStore;
    @observable isProjectLoaded: boolean = false;
    @observable projects: IProject[] = [];

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
                this.projects = res.data;
                this.isProjectLoaded = true;
            }
        } catch (err) {
            console.error(err);
        }
    }
}

// class Project {
//     id: string;
//     title: string;
//     date: string;
//     description: string[];
//     images: string[];

//     constructor(id: string, title: string, date: string, description: string[], images: string[]) {
//         this.id = id;
//         this.title = title;
//         this.date = date;
//         this.description = description;
//         this.images = images;
//     }
// }

export interface IProject {
    _id: string;
    title: string;
    date: string;
    description: string[];
    images: string[];
}

export default ProjectStore;