import { action, makeObservable, observable } from 'mobx';
import RootStore from './RootStore';
import axios from 'axios';

class ResumeStore {
    rootStore: RootStore;
    @observable resumeMap: IResumeMap = {
        _id: '',
        honorsAndAwards: [],
        leadership: [],
        skills: [],
        workExperience: [],
        categories: []
    };
    @observable isResumeLoaded: boolean = false;
    constructor(rootStore: RootStore) {
        /**
         * In order to use decorators in MobX 6+ we need to include
         * "makeObservable() now. Decorators aren't the standard in ES
         * so to keep using decorators we need this call.
         * https://mobx.js.org/enabling-decorators.html"
         */
        makeObservable(this);
        this.rootStore = rootStore;
        this.getResume();
    }

    @action
    async getResume() {
        try {
            if (Object.keys(this.resumeMap).length > 0 && this.isResumeLoaded) {
                return this.resumeMap;
            }

            const res = await axios.get('/api/resume');

            if (res.data && res.data.length > 0) {
                console.log(res);
                this.resumeMap = res.data[0];
                this.isResumeLoaded = true;
            }

            return this.resumeMap;
        } catch (err) {
            console.error(err);
        }
    }
}

export interface IResumeMap {
    _id: string;
    honorsAndAwards: IHonorsAndAwards[];
    leadership: ILeadership[];
    skills: ISkills[];
    workExperience: IWorkExperience[];
    categories: ICategories[];
}

interface IHonorsAndAwards {
    date: string;
    title: string;
}

interface ILeadership {
    date: string;
    title: string;
    position: string;
    description: string;
}

interface ISkills {
    title: string;
    body?: {
        [key: string]: string;
    }
}

interface IWorkExperience {
    title: string;
    date: string;
    experience: string | string[];
}

interface ICategories {
    name: string;
    value: string;
}

export default ResumeStore;