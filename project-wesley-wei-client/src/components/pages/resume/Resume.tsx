import React, { useState } from 'react';
import Header from 'components/layout/header/Header';
import RootStore from 'stores/RootStore';
import { IHonorsAndAwards, ILeadership, IResumeMap, IWorkExperience } from 'stores/ResumeStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react';
import './styles/Resume.css';

interface IResume {
    store: RootStore;
};

// Resume Category enum-like (object enum)
const ResumeCategory: IResumeCategory = {
    HONORS_AND_AWARDS: {
        name: 'Honors and Awards',
        value: 'honorsAndAwards'
    },
    LEADERSHIP: {
        name: 'Leadership',
        value: 'leadership'
    },
    SKILLS: {
        name: 'Skills',
        value: 'skills'
    },
    WORK_EXPERIENCE: {
        name: 'Work Experience',
        value: 'workExperience'
    }
};

interface IResumeCategory {
    [key: string]: { name: string, value: string }
}

const Resume: React.FC<IResume> = ({ store }) => {
    const resumeMap: IResumeMap = JSON.parse(JSON.stringify(store.ResumeStore.resumeMap));
    const [currentResumeSection, setCurrentResumeSection] =
        useState<string>(ResumeCategory.WORK_EXPERIENCE.value);

    const renderResumeCategories = () => {
        return resumeMap.categories.map((resumeCategory, index) => (
            <li
                className={
                    "resume-category" + (
                        resumeCategory.value === currentResumeSection
                            ? " is-selected"
                            : ""
                    )
                }
                key={resumeCategory.value + index}
                onClick={() => setCurrentResumeSection(resumeCategory.value)}
            >
                {resumeCategory.name}
            </li>
        ));
    };

    // const renderResumeTimeline = (
    //     resumeSectionObject: IHonorsAndAwards[] | ILeadership[] | IWorkExperience[]
    // ) => {
    //     console.log(resumeSectionObject);
    //     return <div>
            
    //     </div>
    // };

    const renderResumeSection = (resumeSection: string) => {
        switch (resumeSection) {
            case ResumeCategory.HONORS_AND_AWARDS.value:
                // return renderResumeTimeline(resumeMap.honorsAndAwards);
                return <div>
                    {
                        resumeMap.honorsAndAwards.map((honorOrAward, index) => {
                            return (
                                <div className="resume-timeline-element" key={honorOrAward.title + index}>
                                    <h3>{honorOrAward.title}</h3>
                                    <span>{honorOrAward.date}</span>                                                              
                                </div>
                            )
                        })
                    }
                </div>
            case ResumeCategory.LEADERSHIP.value:
                // return renderResumeTimeline(resumeMap.leadership);
                return <div>
                    {
                        resumeMap.leadership.map((leadership, index) => {
                            return (
                                <div className="resume-timeline-element" key={leadership.title + index}>
                                    <h3>{leadership.title}</h3>
                                    <span>{leadership.date}</span>
                                    <span>{leadership.position}</span>
                                    <p>{leadership.description}</p>                            
                                </div>
                            )
                        })
                    }
                </div>
            case ResumeCategory.WORK_EXPERIENCE.value:
                // return renderResumeTimeline(resumeMap.workExperience);
                return <div>
                    {
                        resumeMap.workExperience.map((workExperience, index) => {
                            return (
                                <div className="resume-timeline-element" key={workExperience.title + index}>
                                    <h3>{workExperience.title}</h3>
                                    <span>{workExperience.date}</span>
                                    <p>{workExperience.experience}</p>                            
                                </div>
                            )
                        })
                    }
                </div>
            case ResumeCategory.SKILLS.value:
                return <div>
                    {
                        resumeMap.skills.map((skill, index) => {
                            return (
                                <div key={skill.title + index}>
                                    <h3>{skill.title}</h3>
                                    {
                                        skill.body &&
                                            <ul>
                                                {
                                                    Object.keys(skill.body).map((skillProp, index) => {
                                                        return <li
                                                            key={skillProp}
                                                        >
                                                            {skill.body?.[skillProp]}
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            default:
                return <h1>uh oh</h1>
        };
    };

    return (
        <>
            <Header />
            {
                store.ResumeStore.isResumeLoaded &&
                    <div className="resume-section">
                        <div className="resume-menu-container">
                            <h1>Resume</h1>
                            <p>
                                A resume allows a quick glance into someone's background and accomplishments.
                                <b> Click</b> below to see my resume based on the listed categories or download
                                my resume by clicking on the button below.
                            </p>
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
                        <div className="resume-content-container">
                            {renderResumeSection(currentResumeSection)}
                        </div>
                    </div>
            }
        </>
    );
};

export default observer(Resume);