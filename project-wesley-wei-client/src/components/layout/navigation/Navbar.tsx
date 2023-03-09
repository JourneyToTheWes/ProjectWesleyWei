import React from 'react';
import './styles/Navbar.css';

interface INavbarProps {
	className: string;
	navSections: Array<INavSection>;
}

interface INavSection {
	name: string;
	href: string;
}

const Navbar: React.FC<INavbarProps> = ({ className, navSections }) => {
	const renderNavSections = () => {
		return navSections.map((navSection) => (
			<a
				href={navSection.href}
				className="navbar-link"
			>
				{navSection.name}
			</a>
		));
	};

	return <nav className={`${className} navbar-container`}>{renderNavSections()}</nav>;
};

export default Navbar;
