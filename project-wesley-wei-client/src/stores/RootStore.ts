import ResumeStore from './ResumeStore';
import ProjectStore from './ProjectStore';

class RootStore {
    ResumeStore: ResumeStore;
    ProjectStore: ProjectStore;
    
    constructor() {
        this.ResumeStore = new ResumeStore(this);
        this.ProjectStore = new ProjectStore(this);
    }
}

export default RootStore;