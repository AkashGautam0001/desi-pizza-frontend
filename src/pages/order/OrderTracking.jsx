import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Layout from "../../layouts/Layout";
import { useNavigate } from "react-router-dom";

// Sample order data

const OrderTracking = () => {
	const navigate = useNavigate();
	const order = {
		id: "1234",
		status: "Out for Delivery",
		items: ["Pepperoni Pizza", "Garlic Bread"],
		total: "$29.99",
		deliveryLocation: { lat: 51.505, lng: -0.09 }, // Example coordinates (latitude, longitude)
		restaurantLocation: { lat: 51.515, lng: -0.1 }, // Example coordinates (latitude, longitude)
	};

	const containerStyle = {
		width: "100%",
		height: "400px",
	};

	const center = {
		lat: 51.51,
		lng: -0.1,
	};

	return (
		<Layout>
			<div className="min-h-screen bg-black w-full flex flex-col lg:flex-row p-4 text-white">
				<div className="rounded-lg shadow-lg lg:w-1/3 w-full max-w-2xl">
					<button
						onClick={() => navigate(-1)}
						className="py-2 mt-5 mb-7 px-5 rounded-full font-bold hover:bg-white hover:text-black border border-white text-white hover:bg-accent-dark transition-all duration-300 ease-in-out"
					>
						Tracking Order
					</button>
					<h1 className="text-2xl font-semibold text-white mb-6 ml-2">
						Order Tracking
					</h1>
					<div className="rounded-lg p-4 mb-4">
						<div className="flex justify-between items-center mb-2">
							<h2 className="text-xl font-semibold">
								Order #{order.id}
							</h2>
							<span
								className={`px-2 py-1 rounded-lg ${
									order.status === "Delivered"
										? "bg-green-600"
										: order.status === "Out for Delivery"
										? "bg-yellow-600"
										: "bg-red-600"
								}`}
							>
								{order.status}
							</span>
						</div>
						<ul className="mb-2">
							{order.items.map((item, index) => (
								<li
									key={index}
									className="text-gray-300"
								>
									{item}
								</li>
							))}
						</ul>
						<div className="flex justify-between items-center mb-4">
							<span className="text-gray-400">Total</span>
							<span className="text-white">{order.total}</span>
						</div>

						<h3 className="text-lg font-medium text-white mb-2">
							Delivery Map
						</h3>
					</div>
				</div>
				<div className="h-screen w-full lg:w-2/3 rounded-lg overflow-hidden">
					<LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
						<GoogleMap
							mapContainerStyle={containerStyle}
							center={center}
							zoom={13}
						>
							<Marker position={order.restaurantLocation} />
							<Marker position={order.deliveryLocation} />
						</GoogleMap>
					</LoadScript>
				</div>
			</div>
		</Layout>
	);
};

export default OrderTracking;
