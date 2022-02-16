import React from 'react';
import '@styles/MyOrder.scss';

const MyOrder = () => {
	return (
		<div className="MyOrder">
			<div className="MyOrder-content">
				<div className="MyOrder-container">
					<h1 className="MyOrder-title">My order</h1>
					<div className="MyOrder-order-content">
						<div className="MyOrder-order">
							<p>
								<span>03.25.21</span>
								<span>6 articles</span>
							</p>
							<p>$560.00</p>
						</div>
						<div className="MyOrder-shopping-cart">
							<figure>
								<img
									src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
									alt="bike"
								/>
							</figure>
							<p>Bike</p>
							<p>$30,00</p>
						</div>
						<div className="MyOrder-shopping-cart">
							<figure>
								<img
									src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
									alt="bike"
								/>
							</figure>
							<p>Bike</p>
							<p>$30,00</p>
						</div>
						<div className="MyOrder-shopping-cart">
							<figure>
								<img
									src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
									alt="bike"
								/>
							</figure>
							<p>Bike</p>
							<p>$30,00</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyOrder;
