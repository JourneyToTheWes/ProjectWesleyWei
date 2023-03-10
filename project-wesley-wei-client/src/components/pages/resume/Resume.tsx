import React, { useState, useEffect } from 'react';
import Header from 'components/layout/header/Header';
import RootStore from 'stores/RootStore';
import { IHonorsAndAwards, ILeadership, IResumeMap, IWorkExperience } from 'stores/ResumeStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react';
import './styles/Resume.css';
import Compass from 'components/common/compass/Compass';

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

    useEffect(() => {
        const onPageLoadOrWindowResize = () => {
            renderResumeCompassPosition();
        };

        window.addEventListener('resize', onPageLoadOrWindowResize, true);

        console.log(document.readyState);
        if (document.readyState === 'complete') {
            onPageLoadOrWindowResize();
        } else {
            document.onreadystatechange = () => {
                if (document.readyState === 'complete') {                    
                    onPageLoadOrWindowResize();
                }
            }
            return cleanupComponent(onPageLoadOrWindowResize);
        }
    }, []);

    const cleanupComponent = (onPageLoadOrWindowResize: () => void) => {
        window.removeEventListener('load', onPageLoadOrWindowResize);
        window.removeEventListener('resize', onPageLoadOrWindowResize);
    };

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

    const renderResumeSection = (resumeSection: string) => {
        switch (resumeSection) {
            case ResumeCategory.HONORS_AND_AWARDS.value:
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

    const getCompassStyle = () => {
        const resumeContentContainer = document.getElementsByClassName('resume-content-container')[0];        
        const position = resumeContentContainer.getBoundingClientRect();
        const left = position.right;
        const top = position.top;
        return { "left": left - 85, "top": top - 35 };
    };

    const renderResumeCompassPosition = () => {
        const resumeCompass = document.getElementsByClassName("resume-compass")[0] as HTMLElement;
        const compassStyle = getCompassStyle();
        resumeCompass.style.top = `${compassStyle.top}px`;
        resumeCompass.style.left = `${compassStyle.left}px`;
        resumeCompass.classList.remove('hidden');
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
                                <a
                                    href="/assets/resumes/WesResume_12-29-22.pdf"
                                    download="wesley-wei-resume"
                                >
                                    Download CV
                                    <FontAwesomeIcon className="resume-download-icon" icon={faFileDownload} />                                
                                </a>
                            </button>
                            <div className="resume-categories">
                                <ul>
                                    {renderResumeCategories()}
                                </ul>
                            </div>
                        </div>
                        <div className="resume-content-container">
                            <Compass className="resume-compass hidden" size="small" />
                            {renderResumeSection(currentResumeSection)}
                        </div>
                    </div>
            }
        </>
    );
};

export default observer(Resume);