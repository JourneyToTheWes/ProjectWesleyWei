import React from 'react';
import RootStore from 'stores/RootStore';
import { observer } from 'mobx-react';
import Header from 'components/layout/header/Header';
import Compass from 'components/common/compass/Compass';
import { Helmet } from 'react-helmet-async';
import './styles/Videos.css';

interface IVideos {
    store: RootStore;
}

const Videos: React.FC<IVideos> = ({ store }) => {
    const videoStore = store.VideoStore;

    /**
     * Gets video selection row HTML elements where each row is
     * a different video category. Within each video selection
     * row contains iframe videos.
     * 
     * @returns React.ReactNode [] elements of video selection rows as divs
     */
    const getVideoSelectionRows = () => {
        if (videoStore.areVideosLoaded) {
            return Object.keys(videoStore.videoMap).map(videoCategory => {
                const videoUrls = videoStore.videoMap[videoCategory];
                return (
                    <div className="video-selection-row-container">
                        <h2>{videoCategory}</h2>
                        <div className="video-selection-row">
                            {
                                videoUrls.map(videoUrl =>
                                    <div
                                        className="individual-video-container"
                                        onClick={() => {                                    
                                            videoStore.mainVideoSelectionUrl = videoUrl;
                                        }}
                                    >
                                        <iframe loading="lazy" src={videoUrl} />
                                    </div>
                                )
                            }
                        </div>                    
                    </div>
                )
            });
        }

        return <></>;
    };

    return (
        <>
            <Helmet>
				<title>WestWay Videos</title>
				<meta name="description" content="This is the WestWay Videos section." />
			</Helmet>
            <Header
                className="videos-header"
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
                        videoStore.areVideosLoaded && <iframe src={videoStore.mainVideoSelectionUrl} />
                    }
                </div>
            </div>
            <div className="video-selection-container">
                    {videoStore.areVideosLoaded && getVideoSelectionRows()}
            </div>
        </>
    );
};

export default observer(Videos);