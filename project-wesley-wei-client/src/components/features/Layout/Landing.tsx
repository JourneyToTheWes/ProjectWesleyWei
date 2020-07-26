import React from 'react';
import Compass from '../Compass/Compass';
import Navbar from '../Navigation/Navbar';

const Landing = () => {
	return (
		<>
			<header>
				<div>
					<img
						id="logo"
						src={require('../../../images/WestWay.JPG')}
						alt="West Way Logo"
					/>
				</div>
			</header>
			<section>
				<Compass size="large" />
			</section>
			<Navbar />
		</>
	);
};

export default Landing;
