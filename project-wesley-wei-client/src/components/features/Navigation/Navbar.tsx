import React from 'react';
import './styles/Navbar.css';

interface INavbarProps {
	className: string;
	navSectionNames: Array<string>;
}

const Navbar: React.FC<INavbarProps> = ({ className, navSectionNames }) => {
	const renderNavSections = () => {
		return navSectionNames.map((navSectionName) => (
			<a
				href=""
				className="navbar-link"
			>
				{navSectionName}
			</a>
		));
	};

	return <nav className={`${className} navbar-container`}>{renderNavSections()}</nav>;
};

export default Navbar;
