import React, { useRef } from 'react';
import '@styles/Login.scss';

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			email: formData.get('email'),
			password: formData.get('password'),
		};
		console.log(data);
	};

	return (
		<div className="Login">
			<div className="Login-content">
				<div className="Login-form-container">
					<img
						src="./logos/logo_yard_sale.svg"
						alt="logo"
						className="Login-logo"
					/>
					<form action="/" className="Login-form" ref={form}>
						<label htmlFor="email" className="Login-label">
							Email address
						</label>
						<input
							type="text"
							id="email"
							name="email"
							placeholder="platzi@example.cm"
							className="Login-input Login-input-email"
						/>
						<label htmlFor="password" className="Login-label">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="*********"
							className="Login-input Login-input-password"
						/>
						<button
							className="Login-primary-button Login-login-button"
							onClick={handleSubmit}
						>
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
