import React, { useEffect, useState } from 'react';
import avatar from '../../utility/avatar.png';
import './Nav.css';

const Nav = () => {
	const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);
	console.log(show);

	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<img
				className="nav__logo"
				src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
				alt="Netflix Logo"
			/>

			<img className="nav__avatar" src={avatar} alt="" />
		</div>
	);
};

export default Nav;
