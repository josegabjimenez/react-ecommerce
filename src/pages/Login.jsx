import React from 'react';
import { Header } from '@components';
import '@styles/Login.scss';

const Login = () => {
	return (
		<div className="Login">
			<Header />
			<div className="Login-content">
				<div className="Login-form-container">
					<img
						src="./logos/logo_yard_sale.svg"
						alt="logo"
						className="Login-logo"
					/>
					<form action="/" className="Login-form">
						<label htmlFor="email" className="Login-label">
							Email address
						</label>
						<input
							type="text"
							id="email"
							placeholder="platzi@example.cm"
							className="Login-input Login-input-email"
						/>
						<label htmlFor="password" className="Login-label">
							Password
						</label>
						<input
							type="password"
							id="password"
							placeholder="*********"
							className="Login-input Login-input-password"
						/>
						<button className="Login-primary-button Login-login-button">
							Log in
						</button>
						<a href="/">Forgot my password</a>
					</form>
					<button className="Login-secondary-button Login-signup-button">
						Sign up
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
