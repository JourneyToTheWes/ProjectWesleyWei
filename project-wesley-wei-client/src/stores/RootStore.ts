import ResumeStore from './ResumeStore';

class RootStore {
    ResumeStore: ResumeStore;
    constructor() {
        this.ResumeStore = new ResumeStore(this);
    }
}

export default RootStore;