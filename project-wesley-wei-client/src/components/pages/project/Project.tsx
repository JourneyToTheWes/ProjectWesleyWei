import Header from 'components/layout/header/Header';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IProject } from 'stores/ProjectStore';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    DotGroup,
    ImageWithZoom
} from 'pure-react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './styles/Project.css';

interface IProjectState {
    project: IProject;
}

const Project = () => {
    const state = useLocation().state as IProjectState;
    const project = state?.project;

    useEffect(() => {
        const header = document.getElementsByClassName("projects-header")[0];
        const headerTitle = document.getElementsByClassName("projects-header-title")[0];
        const cover = document.getElementsByClassName("project-cover")[0];

        const updateHeaderBgColor = (entries: any) => {
            const [entry] = entries;

            if(!entry.isIntersecting) {
                header.classList.add("header-with-bg");
                // headerTitle.classList.remove("white-color");
            } else {
                header.classList.remove("header-with-bg");
                // headerTitle.classList.add("white-color");
            }
        };

        const headerObserver = new IntersectionObserver(updateHeaderBgColor, {
            root: null,
            threshold: 0.75, // Make cover intersecting when only 75% of cover is visible
        });

        // Observe the Project Cover so we can add a bg color to the header
        // and change the color of the header title when the cover is no
        // longer intersecting (visible)
        headerObserver.observe(cover);
    }, []);

    /**
     * Gets the project cover image path if there exists one,
     * otherwise defaults to a select default cover images.
     * 
     * @returns a background image absolute path to display for the
     * project cover
     */
    const renderBgImgSrc = () => {
        let containsProjectCover = false;
        let projectCoverImageSrc = 'cloud.png';
        project.images.forEach(image => {
            if (image.includes('project-cover')) {
                containsProjectCover = true;
                projectCoverImageSrc = image;
            }
        });
        return project && containsProjectCover
            ? `${project.imagesDir}/${projectCoverImageSrc}`
            : 'cloud.png';
    };

    /**
     * Returns key points separated by a pipe, "|".
     * 
     * @returns a "|" delimited string of project key points
     */
    const renderKeyPoints = (): string => {
        let keyPointsString = '';

        project.keyPoints.forEach((keyPoint, index, keyPoints) => {
            if (index === keyPoints.length - 1) {
                keyPointsString += keyPoint;
            } else {
                keyPointsString += keyPoint + ' | ';
            }
        })

        return keyPointsString;
    }

    /**
     * Takes project "learn more" links and generates list
     * elements from them pointing to the project links.
     * 
     * @returns an array of li elements with learn more links
     */
    const renderLearnMoreLinks = (): React.ReactNode[] => {
        return project.links.map(linkObj => {
            return <li><a href={linkObj.link} target="_blank">{linkObj.name}</a></li>
        })
    }

    /**
     * Generates comma delimited "other contributors".
     * 
     * @returns skills in the form of pills
     */
    const renderOtherContributors = (): String => {
        let otherContributorsString = "";
        project.otherContributors.forEach((contributor, index) => {
            (index < project.otherContributors.length - 1)
                ? otherContributorsString += contributor + ", "
                : otherContributorsString += contributor
        });

        return otherContributorsString;
    };

    /**
     * Generates skills in the form of stylized pills.
     * 
     * @returns skills in the form of pills
     */
    const renderSkillPills = (): React.ReactNode[] => (
        project.skills.map((skill, index) =>
            <div
                className="skill-pill"
                key={skill + index}
            >
                {skill}
            </div>    
        )
    );

    /**
     * Generates description in the form of paragraphs.
     * 
     * @returns description in the form of paragraphs
     */
    const renderDescription = (): React.ReactNode[] => {
        return project.description.map(description => <p>{description}</p>);
    };

    /**
     * Renders the project image slides.
     * 
     * @returns An array of Slide component for the pure-react-carousel
     */
    const renderSlides = (): React.ReactNode[] => {
        const slides: React.ReactNode[] = [];
        
        project.images.forEach((image, index) => {
            if (!image.includes('project-cover')) {
                slides.push(
                    <Slide key={index} index={index}>                                            
                        <ImageWithZoom
                            className="project-images"
                            src={`/assets/images/${project.imagesDir}/${image}`}
                        />
                    </Slide>
                );
            }
        });

        return slides;
    };

    /**
     * Returns true if the project has a cover image and false
     * otherwise.
     * 
     * @returns whether or not the project has a cover image
     */
    const projectHasCoverImage = (): boolean => {
        let projectHasCoverImage = false;
        for (const image of project.images) {
            if (image.includes('project-cover')) {
                projectHasCoverImage = !projectHasCoverImage;
                break;
            }
        }

        return projectHasCoverImage;
    };

    return (
        <>
            <Header
                className="projects-header"
                position="fixed"
                // bgImageSrc={renderBgImgSrc()}
            >
                <h1 className="projects-header-title white-color">Projects</h1>
            </Header>
            {/* <div className="project-cover">
                <img
                    // className="project-cover-img"
                    src={require(`images/${renderBgImgSrc()}`)}
                    alt={`${project.title} Project Cover Image`}
                />
            </div> */}
            <div 
                className='project-cover'
                style={{
                    backgroundImage: `url(${require(`images/${renderBgImgSrc()}`)})`
                }}
            >
            </div>
            {
                project &&
                    <div className="project-container">
                        <div className="project-left">
                            <section className="project-details">
                                <h1>{project.title}</h1>
                                <span>Timeline: {project.date}</span>
                                <span>
                                    { project.otherContributors.length > 0 &&
                                        `Other Contributors: ${renderOtherContributors()}` }                                
                                </span>
                                <span>Demonstrated Skills:
                                    <div className="skills-pill-container">
                                        {renderSkillPills()}
                                    </div>
                                </span>
                            </section>
                            <section className="project-intro">
                                <h3>Description</h3>
                                <p>{ renderDescription() }</p>
                            </section>
                            <section className="project-points">
                                <div className="key-points">
                                    <h3>Key Points</h3>
                                    <p>
                                        {renderKeyPoints()}
                                    </p>
                                </div>
                                {
                                    project.links.length > 0 &&
                                    <div className="learn-more">
                                        <h3>Learn More</h3>
                                        <ul className="learn-more-links">
                                            {renderLearnMoreLinks()}
                                        </ul>
                                    </div>
                                }
                            </section>
                        </div>
                        <div className="project-right">
                            <CarouselProvider
                                naturalSlideWidth={300}
                                naturalSlideHeight={180}
                                totalSlides={
                                    project
                                        ? projectHasCoverImage()
                                            ? project.images.length - 1
                                            : project.images.length
                                        : 0
                                }
                            >
                                <Slider>{ renderSlides() }</Slider>
                                <div className="carousel-controls">
                                    <ButtonBack className="carousel-btn">                                
                                        <FontAwesomeIcon className="carousel-btn-arrow" icon={faChevronLeft} />
                                    </ButtonBack>
                                    <DotGroup className="carousel-dot-group" />
                                    <ButtonNext className="carousel-btn">                                
                                        <FontAwesomeIcon className="carousel-btn-arrow" icon={faChevronRight} />
                                    </ButtonNext>
                                </div>
                            </CarouselProvider>
                        </div>
                    </div>
            }
        </>
    );
};

export default Project;