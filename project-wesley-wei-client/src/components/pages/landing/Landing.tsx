import React, { useEffect, useState, useRef } from 'react';
import Compass from 'components/common/compass/Compass';
import Navbar from 'components/layout/navigation/Navbar';
import Ocean from 'components/common/3DModels/Ocean';
import Header from 'components/layout/header/Header';
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import About from '../about/About';
import { Helmet } from 'react-helmet-async';
import './styles/Landing.css';

const Landing = () => {
	const [windowWidth, setWindowWidth] = useState<undefined | number>(undefined);
	const initialWindowWidth = useRef(window.innerWidth);

	useEffect(() => {
		if (window) {
			window.addEventListener('resize', () => {
				setWindowWidth(window.innerWidth);
			});
		}
	}, []);

	return (
		<>
			<Helmet>
				<title>WestWay</title>
				<meta name="description" content="This is WestWay which explores the life of Wesley Wei and takes a look into his space." />
			</Helmet>
			<div className="landing-container">
				<Canvas style={{ width: "100%", height: "100vh" }} camera={{ position: [ 0, 10, 20 ] }}>
					<Ocean />			
					<Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
				</Canvas>
				<Header position="fixed" placement="top-left" />
				<section>
					<Compass size={
						(!windowWidth && initialWindowWidth.current && initialWindowWidth.current > 650)
						|| (windowWidth && windowWidth > 650)						
							? "large"
							: "medium"
					}/>
				</section>
				<Navbar
					className="westway-navbar"
					navSections={[
						{ name: 'About', href: '#about' },
						{ name: 'Projects', href: '/projects' },
						{ name: 'Resume', href: '/resume' },
						{ name: 'Videos', href: '/videos' }
					]}
				/>
			</div>
			<About />
		</>
	);
};

export default Landing;
