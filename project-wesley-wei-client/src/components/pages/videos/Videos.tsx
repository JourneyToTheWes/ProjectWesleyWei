import React, { useState } from 'react';
import RootStore from 'stores/RootStore';
import { observer } from 'mobx-react';
import Header from 'components/layout/header/Header';
import './styles/Videos.css';
import Compass from 'components/common/compass/Compass';

interface IVideos {
    store: RootStore;
}

const Videos: React.FC<IVideos> = ({ store }) => {
    const videoStore = store.VideoStore;
    const [mainVideoUrl, setMainVideoUrl] = useState<string>(videoStore.videos[0].url);

    return (
        <>
            <Header
                children={<Compass size="small" />}
            />
            <div className="main-video-section">
                <div className="main-video-section-left-panel">
                    <h1>Videos</h1>
                    <p>
                        This content highlights activities/hobbies I pursue in a video format.
                        Below is a library of my videos. Click on any of the videos to be
                        entertained or learn more about me...
                    </p>
                </div>
                <div className="main-video-container">
                    {
                        videoStore.areVideosLoaded && <iframe src={mainVideoUrl}></iframe>
                    }
                </div>
            </div>
        </>
    );
};

export default observer(Videos);