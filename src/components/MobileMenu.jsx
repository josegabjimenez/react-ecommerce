import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import '@styles/MobileMenu.scss';
import { Close } from '@assets/icons/index';

const MobileMenu = ({ isOpen, onClick }) => {
	useEffect(() => {
		if (isOpen) {
			gsap.to('.mobile-menu', {
				duration: 0.6,
				xPercent: 100,
				ease: 'power3.inOut',
			});
		} else {
			gsap.to('.mobile-menu', {
				duration: 0.6,
				xPercent: 0,
				ease: 'power3.inOut',
			});
		}
	}, [isOpen]);

	return (
		<div className="mobile-menu">
			<div className="mobile-menu-close-button" onClick={onClick}>
				<Close />
			</div>
			<ul>
				<li>
					<a href="/">CATEGORIES</a>
				</li>
				<li>
					<a href="/">All</a>
				</li>
				<li>
					<a href="/">Clothes</a>
				</li>
				<li>
					<a href="/">Electronics</a>
				</li>
				<li>
					<a href="/">Furnitures</a>
				</li>
				<li>
					<a href="/">Toys</a>
				</li>
				<li>
					<a href="/">Other</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="/">My orders</a>
				</li>
				<li>
					<a href="/">My account</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="/" className="email">
						platzi@example.com
					</a>
				</li>
				<li>
					<a href="/" className="sign-out">
						Sign out
					</a>
				</li>
			</ul>
		</div>
	);
};

export default MobileMenu;
