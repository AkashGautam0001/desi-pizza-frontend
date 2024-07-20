import React from "react";
import FoodDelivery from "../assets/FoodDelivery.svg";
import { Link } from "react-router-dom";

const OrderCard = () => {
	return (
		<div className="flex flex-col lg:flex-row justify-around items-center mx-5 lg:mx-56 py-8 rounded-lg bg-white ">
			<div className="flex flex-col px-5 lg:px-0 items-center ">
				<h1 className="text-2xl lg:text-4xl font-serif">
					<strong className="text-primary">Pizzify's</strong> online
					ordering
				</h1>
				<p className="text-lg pl-5 lg:pl-0 lg:text-center mb-3 ">
					Delicious and Yummy pizza delivered fast & fresh
				</p>
				<button className="w-fit lg:w-full px-7 py-2 lg:px-4 lg:py-4 text-xl lg:text-2xl bg-accent text-neutral-50 font-extrabold rounded-md transition-all duration-500 ease-in-out hover:bg-black">
					<Link to={"/menu"}>ORDER ONLINE NOW</Link>
				</button>
			</div>
			<img
				className="mt-4 lg:mt-0"
				width={300}
				src={FoodDelivery}
				alt="Food delivery"
			/>
		</div>
	);
};

export default OrderCard;
