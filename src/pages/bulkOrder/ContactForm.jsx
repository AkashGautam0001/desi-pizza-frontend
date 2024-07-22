import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
	const { register, handleSubmit } = useForm();

	function handleFormSubmit(data) {
		console.log(data);
	}

	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)}
			className="flex flex-col mb-24 bg-gray-800 backdrop-blur-md shadow-lg max-w-lg mx-auto p-6 rounded-lg w-full"
		>
			<h1 className="text-4xl text-center font-bold text-white mb-4">
				Contact Us
			</h1>
			<p className="text-gray-300 mb-6 text-center">
				Please let us know your query
			</p>

			<input
				{...register("name")}
				type="text"
				name="name"
				placeholder="Name*"
				className=" mb-4 p-3 border border-gray-600 rounded bg-gray-900 text-gray-200"
			/>
			<input
				{...register("organisation")}
				type="text"
				placeholder="Organisation / Party"
				className=" mb-4 p-3 border border-gray-600 rounded bg-gray-900 text-gray-200"
			/>
			<input
				{...register("email")}
				type="email"
				name="email"
				placeholder="Email*"
				className=" mb-4 p-3 border border-gray-600 rounded bg-gray-900 text-gray-200"
			/>
			<input
				{...register("location")}
				type="text"
				name="location"
				placeholder="Location Area / City / State"
				className=" mb-4 p-3 border border-gray-600 rounded bg-gray-900 text-gray-200"
			/>
			<input
				{...register("date")}
				type="date"
				name="date"
				placeholder="Tentative Order Date"
				className=" mb-4 p-3 border border-gray-600 rounded bg-gray-900 text-gray-200"
			/>
			<textarea
				{...register("query")}
				name="query"
				placeholder="Your Query"
				className=" mb-4 p-3 border border-gray-600 rounded bg-gray-900 text-gray-200 h-32"
			/>
			<button
				type="submit"
				className="bg-accent text-white p-3 rounded hover:bg-green-700 transition-all duration-300"
			>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
