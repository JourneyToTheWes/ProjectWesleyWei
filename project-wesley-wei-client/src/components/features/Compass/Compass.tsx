import React from 'react';
import './styles/Compass.css';

interface ICompassProps {
	size: 'small' | 'medium' | 'large';
}

const Compass: React.FC<ICompassProps> = ({ size }) => {
	return (
		<div className={'compass ' + size}>
			<span>N</span>
			<span>E</span>
			<span>S</span>
			<span>W</span>
			<div className="compass-needle"></div>
		</div>
	);
};

export default Compass;
