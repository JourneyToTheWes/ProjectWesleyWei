import React, { useState } from 'react';
import './styles/NavSection.css';

interface INavSectionProps {
	navSectionName: string;
}

const NavSection: React.FC<INavSectionProps> = ({ navSectionName }) => {
	const [showNavbarSectionContent, setShowNavbarSectionContent] = useState(false);

	return (
		<div className="navbar-section">
			{showNavbarSectionContent && (
				<div className="navbar-section-content">
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
				</div>
			)}
			<a
				href=""
				onMouseEnter={() => setShowNavbarSectionContent(true)}
				onMouseLeave={() => setShowNavbarSectionContent(false)}
			>
				{navSectionName}
			</a>
		</div>
	);
};
export default NavSection;
