import React from 'react';
import Compass from 'components/common/compass/Compass';
import Navbar from 'components/layout/navigation/Navbar';
import Ocean from 'components/common/3DModels/Ocean';
import Header from 'components/layout/header/Header';
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import About from '../about/About';
import './styles/Landing.css';

const Landing = () => {
	return (
		<>
			<div className="landing-container">
				<Canvas style={{ width: "100%", height: "100vh" }} camera={{ position: [ 0, 10, 20 ] }}>
					<Ocean />			
					<Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
				</Canvas>
				<Header position='top-left-abs' />
				<section>
					<Compass size="large" />
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
