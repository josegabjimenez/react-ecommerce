import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-form-container">
				<h1 className="MyAccount-title">My account</h1>
				<form action="/" className="MyAccount-form">
					<div>
						<label htmlFor="name" className="MyAccount-label">
							Name
						</label>
						<p className="MyAccount-value">Camila Yokoo</p>
						<label htmlFor="email" className="MyAccount-label">
							Email
						</label>
						<p className="MyAccount-value">camilayokoo@gmail.com</p>
						<label htmlFor="password" className="MyAccount-label">
							Password
						</label>
						<p className="MyAccount-value">*********</p>
					</div>
					<button className="MyAccount-secondary-button MyAccount-login-button">
						Edit
					</button>
				</form>
			</div>
		</div>
	);
};

export default MyAccount;
