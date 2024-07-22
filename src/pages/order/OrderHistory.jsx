import React from "react";
import { Link } from "react-router-dom";

const OrderHistory = () => {
	const orders = [
		{
			id: "1234",
			status: "Out for Delivery",
			items: ["Pepperoni Pizza", "Garlic Bread"],
			total: "$29.99",
			deliveryLocation: { lat: 51.505, lng: -0.09 },
			restaurantLocation: { lat: 51.515, lng: -0.1 },
		},
		{
			id: "1235",
			status: "Preparing",
			items: ["Margherita Pizza", "Caesar Salad", "Chocolate Cake"],
			total: "$34.50",
			deliveryLocation: { lat: 51.516, lng: -0.08 },
			restaurantLocation: { lat: 51.517, lng: -0.11 },
		},
		{
			id: "1236",
			status: "Delivered",
			items: ["BBQ Chicken Pizza", "Mozzarella Sticks"],
			total: "$27.75",
			deliveryLocation: { lat: 51.507, lng: -0.09 },
			restaurantLocation: { lat: 51.515, lng: -0.1 },
		},
		{
			id: "1237",
			status: "Cancelled",
			items: ["Vegetarian Pizza", "Garlic Bread"],
			total: "$24.99",
			deliveryLocation: { lat: 51.508, lng: -0.1 },
			restaurantLocation: { lat: 51.515, lng: -0.1 },
		},
		{
			id: "1238",
			status: "Delivered",
			items: ["Hawaiian Pizza", "Pasta Alfredo"],
			total: "$32.00",
			deliveryLocation: { lat: 51.506, lng: -0.08 },
			restaurantLocation: { lat: 51.515, lng: -0.1 },
		},
		{
			id: "1239",
			status: "Preparing",
			items: ["Spaghetti Carbonara", "Bruschetta"],
			total: "$28.25",
			deliveryLocation: { lat: 51.509, lng: -0.12 },
			restaurantLocation: { lat: 51.515, lng: -0.1 },
		},
		{
			id: "1240",
			status: "Out for Delivery",
			items: ["Pepperoni Pizza", "Onion Rings"],
			total: "$30.50",
			deliveryLocation: { lat: 51.51, lng: -0.11 },
			restaurantLocation: { lat: 51.515, lng: -0.1 },
		},
	];

	return (
		<>
			<div className="mt-6 lg:w-2/3">
				<h3 className="text-lg font-medium text-white">
					Order History
				</h3>
				<ul className="mt-4 text-white">
					{orders?.map((order) => (
						<>
							<li
								key={order.id}
								className="border-b border-gray-600 py-5 flex justify-between my-2"
							>
								<div className="space-x-4">
									<span className="text-gray-400 px-4 py-2">
										{order.id}
									</span>
									<span className="text-white">
										{order.items}
									</span>
								</div>
								<div className="space-x-4">
									<span
										className={`px-4 py-2 rounded-full ${
											order.status === "Delivered"
												? "bg-green-600"
												: order.status ===
												  "Out for Delivery"
												? "bg-yellow-600"
												: "bg-red-600"
										}`}
									>
										{order.status}
									</span>
									<Link
										to={"/order/tracking"}
										className="py-2 mt-4 px-5 rounded-full font-bold hover:bg-white hover:text-black border border-white text-white hover:bg-accent-dark transition-all duration-300 ease-in-out"
									>
										Tracking Order
									</Link>
								</div>
							</li>
						</>
					))}
				</ul>
			</div>
		</>
	);
};

export default OrderHistory;
