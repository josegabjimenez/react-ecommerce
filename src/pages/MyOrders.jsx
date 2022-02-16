import React from 'react';
import '@styles/MyOrders.scss';
import { arrow } from '@assets/icons';

const MyOrders = () => {
	return (
		<div className="MyOrders">
			<div className="MyOrders-content">
				<div className="MyOrders-container">
					<h1 className="MyOrders-title">My orders</h1>
					<div className="MyOrders-orders">
						<div className="MyOrders-order">
							<p>
								<span>03.25.21</span>
								<span>6 articles</span>
							</p>
							<p>$560.00</p>
							<img src={arrow} alt="arrow" />
						</div>
						<div className="MyOrders-order">
							<p>
								<span>03.25.21</span>
								<span>6 articles</span>
							</p>
							<p>$560.00</p>
							<img src={arrow} alt="arrow" />
						</div>
						<div className="MyOrders-order">
							<p>
								<span>03.25.21</span>
								<span>6 articles</span>
							</p>
							<p>$560.00</p>
							<img src={arrow} alt="arrow" />
						</div>
						<div className="MyOrders-order">
							<p>
								<span>03.25.21</span>
								<span>6 articles</span>
							</p>
							<p>$560.00</p>
							<img src={arrow} alt="arrow" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyOrders;
