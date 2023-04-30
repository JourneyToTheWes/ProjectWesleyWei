import { makeObservable, observable, action } from 'mobx';
import RootStore from './RootStore';
import axios from 'axios';

class VideoStore {
    rootStore: RootStore;
    @observable areVideosLoaded: boolean = false;
    @observable videos: IVideo[] = [];
    @observable videoMap: IVideoMap = {};
    @observable mainVideoSelectionUrl: string = '';

    constructor(rootStore: RootStore) {
        /**
         * In order to use decorators in MobX 6+ we need to include
         * "makeObservable() now. Decorators aren't the standard in ES
         * so to keep using decorators we need this call.
         * https://mobx.js.org/enabling-decorators.html"
         */
        makeObservable(this);
        this.rootStore = rootStore;
        this.loadVideos();
    }

    @action
    async loadVideos() {
        try {
            const res = await axios.get(`api/videos`);

            if (res.data) {
                this.videos = res.data;

                // Create Video Map with category as key and video URL array as value
                const localVideoMap: IVideoMap = {};
                res.data.forEach((video: IVideo) => {
                    if (video.category in localVideoMap) {
                        localVideoMap[video.category].push(video.url);
                    } else {
                        localVideoMap[video.category] = [video.url];
                    }
                });

                this.videoMap = localVideoMap;

                this.mainVideoSelectionUrl = res.data[0].url;

                this.areVideosLoaded = true;
            }
        } catch (err) {
            console.error(err);
        }
    }
}

export interface IVideo {
    _id: string;
    category: string;
    url: string;
}

export interface IVideoMap {
    [key: string]: string[];
}

export default VideoStore;