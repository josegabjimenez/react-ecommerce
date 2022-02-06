import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import '@styles/NotFound.scss';
import { arrow } from '@assets/icons';

const NotFound = () => {
	const tl = gsap.timeline();

	useEffect(() => {
		tl.from('.error404_title', {
			y: 100,
			opacity: 0,
			duration: 0.8,
			ease: 'back',
		})
			.from(
				'.error404_container_message',
				{
					y: -30,
					opacity: 0,
					duration: 0.8,
					ease: 'back',
				},
				0.15
			)
			.to('.error404_status', {
				fontSize: '2.2rem',
				color: '#FC4F4F',
				duration: 1.1,
				ease: 'back',
			})
			.from(
				'.error404_goback_button',
				{
					opacity: 0,
					scale: 0.7,
					duration: 0.8,
					ease: 'back',
				},
				0.95
			)
			.from('.error404_goback_arrow', {
				opacity: 0,
				x: 20,
				duration: 0.8,
				ease: 'back',
			})
			.to('.error404_goback_arrow', {
				x: 20,
				duration: 0.8,
				yoyo: true,
				repeat: -1,
				ease: 'back',
			});
	}, []);

	return (
		<div className="notFound">
			<div className="error404_container">
				<h1 className="error404_title">Oops...</h1>
			</div>
			<div className="error404_container">
				<h1 className="error404_container_message">
					Page not found, error <span className="error404_status">404</span>.
				</h1>
			</div>
			<div className="error404_goback">
				<Link to="/" className="error404_goback_button">
					Go to homepage
				</Link>
				<img
					className="error404_goback_arrow"
					src={arrow}
					alt="Animation of an arrow turning back"
				/>
			</div>
		</div>
	);
};

export default NotFound;
