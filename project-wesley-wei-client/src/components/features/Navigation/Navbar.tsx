import React from 'react';
import NavSection from './NavSection';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
	const renderNavSections = () => {
		const navSectionNames = ['About', 'Projects', 'Resume', 'Videos'];
		return navSectionNames.map((navSectionName) => (
			<NavSection navSectionName={navSectionName} />
		));
	};

	return <nav className={styles.navbar}>{renderNavSections()}</nav>;
};

export default Navbar;
