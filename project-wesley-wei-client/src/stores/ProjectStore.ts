import { observable } from 'mobx';
import RootStore from './RootStore';
import axios from 'axios';

class ProjectStore {
    rootStore: RootStore;
    @observable projects: Project[] = [];

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.loadProjects();
    }

    async loadProjects() {
        try {
            const res = await axios.get(`api/projects`);
            console.log(res);
            if (res.data) {
                this.projects = res.data;
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

interface Project {
    _id: string;
    title: string;
    date: string;
    description: string[];
    images: string[];
}

export default ProjectStore;