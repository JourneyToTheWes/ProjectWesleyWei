import Header from 'components/layout/header/Header';
import React from 'react';
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
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './styles/Project.css';

interface IProjectState {
    project: IProject;
}

const Project = () => {
    const state = useLocation().state as IProjectState;
    const project = state?.project;

    // const images = require.context('../../../images', true);

    /**
     * Gets the project cover image path if there exists one,
     * otherwise defaults to a select default cover images.
     * 
     * @returns a background image absolute path to display for the
     * project cover
     */
    const renderBgImgSrc = () => {
        return project.images.includes('project-cover')
            ? `${project.imagesDir}/project-cover`
            : 'cloud.png';
    };

    return (
        <>
            <Header
                bgImageSrc={renderBgImgSrc()}
                className='projects-header'
            >
                <h1>Projects</h1>
            </Header>
            <div className="project-container">
                <div className="project-left">
                    <section className="project-details">
                        <h1>{project.title}</h1>
                        <span>Timeline: {project.date}</span>
                        <span>Contributors: </span>
                    </section>
                    <section className="project-intro">
                        <h3>Introduction</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sollicitudin
                            turpis, quis porta libero. Ut id ante vitae elit gravida semper. Nunc magna
                            neque, accumsan sit amet risus rhoncus, congue condimentum lacus. Maecenas
                            nibh massa, viverra consequat nibh ut, convallis bibendum arcu. Donec
                            sagittis nibh non semper pellentesque. Nulla vitae lorem a sapien iaculis
                            tristique. Nullam pretium euismod massa, at scelerisque lacus facilisis
                            vitae. Pellentesque a tellus nunc. Suspendisse vel purus ut sem malesuada
                            laoreet eget et felis. Fusce non dolor vel augue scelerisque aliquam sit
                            amet vitae neque. Maecenas vel egestas odio. Nulla tincidunt ligula nec odio
                            sodales malesuada. Vestibulum ex mauris, tristique id consectetur vitae,
                            varius et massa. Integer consequat facilisis mattis. Fusce vitae magna
                            magna. In vitae est libero. Etiam ut varius dolor. Duis id neque eros.
                            Quisque sed maximus nibh. Donec posuere dui non risus tempus condimentum.
                            Maecenas sit amet dolor efficitur, rutrum mi ut, imperdiet ligula. Etiam
                            gravida orci vitae sapien dignissim, in pulvinar tellus volutpat. Aenean
                            feugiat odio purus, eget suscipit arcu fermentum vel. Praesent at felis sed
                            eros blandit varius. Etiam tempus volutpat neque, eu congue justo interdum
                            eget. Sed varius ut ante ac egestas. Ut blandit lorem in metus hendrerit,
                            sit amet dignissim magna malesuada. Pellentesque turpis mauris, tincidunt eu
                            velit quis, volutpat auctor est. Sed rutrum lobortis ipsum eu convallis.
                            Curabitur varius eleifend est eget volutpat. Vestibulum venenatis, ipsum ac
                            molestie blandit, felis orci aliquet diam, eu sodales leo mauris eu sapien.
                            Suspendisse vestibulum suscipit vulputate. Curabitur finibus ultricies
                            dapibus. Nunc eget ligula tincidunt, tempus tellus quis, consequat sapien.
                            Ut non odio dapibus, tristique turpis ut, sodales justo. Praesent fermentum,
                            leo eget lobortis blandit, arcu augue imperdiet ligula, vel eleifend nunc
                            ante et quam. Praesent lobortis erat eget odio pulvinar, a suscipit nisi
                            pharetra.
                        </p>
                    </section>
                    <section className="project-solution">
                        <h3>Solution</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sollicitudin
                            turpis, quis porta libero. Ut id ante vitae elit gravida semper. Nunc magna
                            neque, accumsan sit amet risus rhoncus, congue condimentum lacus. Maecenas
                            nibh massa, viverra consequat nibh ut, convallis bibendum arcu. Donec
                            sagittis nibh non semper pellentesque. Nulla vitae lorem a sapien iaculis
                            tristique. Nullam pretium euismod massa, at scelerisque lacus facilisis
                            vitae. Pellentesque a tellus nunc. Suspendisse vel purus ut sem malesuada
                            laoreet eget et felis. Fusce non dolor vel augue scelerisque aliquam sit
                            amet vitae neque. Maecenas vel egestas odio. Nulla tincidunt ligula nec odio
                            sodales malesuada. Vestibulum ex mauris, tristique id consectetur vitae,
                            varius et massa. Integer consequat facilisis mattis. Fusce vitae magna
                            magna. In vitae est libero. Etiam ut varius dolor. Duis id neque eros.
                            Quisque sed maximus nibh. Donec posuere dui non risus tempus condimentum.
                            Maecenas sit amet dolor efficitur, rutrum mi ut, imperdiet ligula. Etiam
                            gravida orci vitae sapien dignissim, in pulvinar tellus volutpat. Aenean
                            feugiat odio purus, eget suscipit arcu fermentum vel. Praesent at felis sed
                            eros blandit varius. Etiam tempus volutpat neque, eu congue justo interdum
                            eget. Sed varius ut ante ac egestas. Ut blandit lorem in metus hendrerit,
                            sit amet dignissim magna malesuada. Pellentesque turpis mauris, tincidunt eu
                            velit quis, volutpat auctor est. Sed rutrum lobortis ipsum eu convallis.
                            Curabitur varius eleifend est eget volutpat. Vestibulum venenatis, ipsum ac
                            molestie blandit, felis orci aliquet diam, eu sodales leo mauris eu sapien.
                            Suspendisse vestibulum suscipit vulputate. Curabitur finibus ultricies
                            dapibus. Nunc eget ligula tincidunt, tempus tellus quis, consequat sapien.
                            Ut non odio dapibus, tristique turpis ut, sodales justo. Praesent fermentum,
                            leo eget lobortis blandit, arcu augue imperdiet ligula, vel eleifend nunc
                            ante et quam. Praesent lobortis erat eget odio pulvinar, a suscipit nisi
                            pharetra.
                        </p>
                    </section>
                </div>
                <div className="project-right">
                    <CarouselProvider
                        naturalSlideWidth={200}
                        naturalSlideHeight={150}
                        totalSlides={project.images.length}
                    >
                        <Slider>
                            {
                                project.images.map((image, index) => {                                
                                    return (
                                        <Slide key={index} index={index}>
                                            {/* <Image src={image} /> */}
                                            <ImageWithZoom src={`/assets/${image}`} />
                                        </Slide>
                                    )
                                })
                            }                            
                        </Slider>
                        <div className="carousel-controls">
                            <ButtonBack className="carousel-btn">
                                {/* <i className="arrow"></i> */}
                                <FontAwesomeIcon className="carousel-btn-arrow" icon={faArrowLeft} />
                            </ButtonBack>
                            <DotGroup className="carousel-dot-group" />
                            <ButtonNext className="carousel-btn">
                                {/* <i className="arrow"></i> */}
                                <FontAwesomeIcon className="carousel-btn-arrow" icon={faArrowRight} />
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        </>
    );
};

export default Project;