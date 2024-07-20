import React from "react";

const Dropdown = ({ options, selectedOption, handleChange }) => {
	return (
		<div className="relative inline-block w-full text-white">
			<select
				className="appearance-none text-lg w-full bg-transparent border border-gray-300 hover:border-gray-400 px-4 py-3 lg:py-5 pr-16 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline"
				value={selectedOption}
				onChange={(e) => handleChange(e.target.value)}
			>
				{options.map((option) => (
					<option
						key={option.value}
						value={option.value}
						className="text-white py-4  bg-black text-xl"
					>
						{option.label}
					</option>
				))}
			</select>
			<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
				<svg
					className="fill-current h-4 w-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path d="M10 12l-6-6h12z" />
				</svg>
			</div>
		</div>
	);
};

export default Dropdown;
