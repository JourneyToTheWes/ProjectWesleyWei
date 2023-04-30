import ResumeStore from './ResumeStore';
import ProjectStore from './ProjectStore';
import VideoStore from './VideoStore';

class RootStore {
    ResumeStore: ResumeStore;
    ProjectStore: ProjectStore;
    VideoStore: VideoStore;
    
    constructor() {
        this.ResumeStore = new ResumeStore(this);
        this.ProjectStore = new ProjectStore(this);
        this.VideoStore = new VideoStore(this);
    }
}

export default RootStore;