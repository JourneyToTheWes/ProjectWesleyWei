import React from 'react';
import Header from 'components/layout/header/Header';
import RootStore from 'stores/RootStore';
import { IResumeMap } from 'stores/ResumeStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react';
import './styles/Resume.css';

interface IResume {
    store: RootStore;
};

const Resume: React.FC<IResume> = ({ store }) => {
    const resumeMap: IResumeMap = JSON.parse(JSON.stringify(store.ResumeStore.resumeMap));

    const renderResumeCategories = () => {
        return resumeMap.categories.map((resumeCategory, index) => (
            <li
                key={resumeCategory.value + index}
                onClick={() => console.log(`clicked ${resumeCategory.value}`)}
            >
                {resumeCategory.name}
            </li>
        ));
    };

    return (
        <>
            <Header />
            {
                store.ResumeStore.isResumeLoaded &&
                    <div className="resume-section">
                        <div className="resume-menu-container">
                            <button
                                className="resume-download-btn"
                                onClick={() => console.log('Downloading resume...')}
                            >
                                Download CV
                                <FontAwesomeIcon className="resume-download-icon" icon={faFileDownload} />
                            </button>
                            <div className="resume-categories">
                                <ul>
                                    {renderResumeCategories()}
                                </ul>
                            </div>
                        </div>
                        <div className="resume-timeline-container">

                        </div>
                    </div>
            }
        </>
    );
};

export default observer(Resume);