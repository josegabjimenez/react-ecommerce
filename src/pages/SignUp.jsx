import React from 'react';
import '@styles/SignUp.scss';

const SignUp = () => {
	return (
		<div className="SignUp">
			<div className="SignUp-content">
				<div className="SignUp-form-container">
					<h1 className="SignUp-title">Create account</h1>
					<form action="/" className="SignUp-form">
						<div>
							<label htmlFor="name" className="SignUp-label">
								Name
							</label>
							<input
								type="text"
								id="name"
								placeholder="Name here..."
								className="SignUp-input SignUp-input-name"
							/>
							<label htmlFor="email" className="SignUp-label">
								Email
							</label>
							<input
								type="text"
								id="email"
								placeholder="yourname@mail.com"
								className="SignUp-input SignUp-input-email"
							/>
							<label htmlFor="password" className="SignUp-label">
								Password
							</label>
							<input
								type="password"
								id="password"
								placeholder="*********"
								className="SignUp-input SignUp-input-password"
							/>
						</div>
						<button className="SignUp-primary-button SignUp-login-button">
							Create
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
