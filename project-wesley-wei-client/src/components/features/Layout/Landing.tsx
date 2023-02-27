import React from 'react';
import Compass from '../Compass/Compass';
import Navbar from '../Navigation/Navbar';
import Ocean from '../3DModels/Ocean';
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import './styles/Landing.css';

const Landing = () => {
	return (
		<>
			<div className="landing-container">
				<Canvas style={{ width: "100vw", height: "100vh" }} camera={{ position: [ 0, 10, 20 ] }}>
					<Ocean />			
					<Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
				</Canvas>
				<header>
					<div>
						<img
							className="logo top-left-abs"
							src={require('../../../images/WestWay.JPG')}
							alt="West Way Logo"
							onClick={ () => window.location.href = '/' }
						/>
					</div>
				</header>
				<section>
					<Compass size="large" />
				</section>
				<Navbar
					className="westway-navbar"
					navSections={[
						{ name: 'About', href: '/about' },
						{ name: 'Projects', href: '/projects' },
						{ name: 'Resume', href: '/resume' },
						{ name: 'Videos', href: '/videos' }
					]}
				/>
			</div>
		</>
	);
};

export default Landing;
