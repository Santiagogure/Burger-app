import React from 'react';
import { Link } from 'react-router-dom';
import  './style/sidebar.css'


export const Sidebar = ({ toggle, show }) => {
	const scroll = (id) => {
		const element = document.getElementById(id);

		toggle();
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};
	return (
		<div className={`sideContainer ${show ? 'show' : ''}`}>
			<div className="close" onClick={toggle}>
				Close
				<box-icon style={{fill: 'white', position: 'relative', top: '2px'}} name='right-arrow-alt'></box-icon>
			</div>
			<div className="sideMenu">
				<Link to="/" className="sideLink" onClick={() => scroll('menu')}>
					Menu
				</Link>
				<Link to="/" className="sideLink" onClick={() => scroll('next')}>
					Next burger
				</Link>
				<Link to="/" className="sideLink" onClick={() => scroll('staff')}>
					Staff
				</Link>
				<Link to="/cart" className="sideLink">
					Cart
				</Link>
				<Link to="/" className="sideLink" onClick={() => scroll('footer')}>
					Contact
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;