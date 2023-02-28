import React from 'react';
import './styles/Compass.css';

interface ICompassProps {
	className?: string;
	size: 'small' | 'medium' | 'large';
}

const Compass: React.FC<ICompassProps> = ({ className, size }) => {
	return (
		<div className={`compass ${size} ${className}`}>
			<span>N</span>
			<span>E</span>
			<span>S</span>
			<span>W</span>
			<div className="compass-needle"></div>
		</div>
	);
};

export default Compass;
