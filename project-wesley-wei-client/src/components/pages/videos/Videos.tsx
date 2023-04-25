import React from 'react';
import RootStore from 'stores/RootStore';
import { observer } from 'mobx-react';
import './styles/Videos.css';

interface IVideos {
    store: RootStore;
}

const Videos: React.FC<IVideos> = ({ store }) => {
    const videoStore = store.VideoStore;
    return (
        <>
            <h1>Videos!!!</h1>
            <h1>{videoStore.areVideosLoaded ? 'videos loaded' : 'videos not loaded'}</h1>
        </>
    );
};

export default observer(Videos);