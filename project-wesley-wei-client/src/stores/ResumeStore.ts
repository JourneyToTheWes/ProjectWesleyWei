import { observable } from 'mobx';
import RootStore from './RootStore';

class ResumeStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @observable school: string = 'University of Washington';
}

export default ResumeStore;