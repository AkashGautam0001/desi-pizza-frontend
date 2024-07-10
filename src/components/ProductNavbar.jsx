function ProductNavbar() {
	return (
		<>
			{/* <div className="sticky top-2 backdrop-blur-lg gap-3 bg-white grid grid-cols-2 mx-4 p-1 rounded-md text-sm">
				<div className="p-1 bg-red-700 text-center">VEG PIZZAS</div>
				<div className="p-1 bg-red-700 text-center">NON VEG PIZZAS</div>
				<div className="p-1 bg-red-700 text-center">BURGER PIZZA</div>
				<div className="p-1 bg-red-700 text-center">PARATHA PIZZA</div>
				<div className="p-1 bg-red-700 text-center">SIDE ORDERS</div>
				<div className="p-1 bg-red-700 text-center">BEVERAGES</div>
			</div> */}
			<div className="sticky top-0 bg-gray-100">
				<select className="w-full py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none">
					<option
						value="veg-pizza"
						className="py-8"
					>
						Veg Pizza
					</option>
					<option
						value="non-veg-pizza"
						className="py-8"
					>
						Non-Veg Pizzas
					</option>
					<option
						value="burger-pizza"
						className="py-8"
					>
						Burger Pizza
					</option>
					<option
						value="paratha-pizza"
						className="py-8"
					>
						Paratha Pizza
					</option>
					<option
						value="side-orders"
						className="py-8"
					>
						Side Orders
					</option>
					<option
						value="beverages"
						className="py-8"
					>
						Beverages
					</option>
				</select>
			</div>
		</>
	);
}

export default ProductNavbar;
