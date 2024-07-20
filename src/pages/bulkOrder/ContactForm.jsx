import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
	const { register, handleSubmit } = useForm();

	// function sendFormData() {
	// 	// const response = axiosInstance.post('/restaurant/')
	// }
	function handlFormSubmit(data) {
		console.log(data);
	}
	return (
		<form
			onSubmit={handleSubmit(handlFormSubmit)}
			className="flex flex-col mb-24 bg-transparent backdrop-blur-md  shadow-md max-w-lg mx-auto"
		>
			<h1 className="text-4xl text-center font-bold text-primary mb-4">
				Contact Us
			</h1>
			<p className="text-gray-100 mb-6 text-center">
				Please let us know your query
			</p>

			<input
				{...register("name")}
				type="text"
				name="name"
				placeholder="Name*"
				className="form-input mb-4 p-2 border border-gray-300 rounded"
			/>
			<input
				{...register("organisation")}
				type="text"
				placeholder="Organisation / Party"
				className="form-input mb-4 p-2 border border-gray-300 rounded"
			/>
			<input
				{...register("email")}
				type="email"
				name="email"
				placeholder="Email*"
				className="form-input mb-4 p-2 border border-gray-300 rounded"
			/>
			<input
				{...register("location")}
				type="text"
				name="location"
				placeholder="Location Area / City / State"
				className="form-input mb-4 p-2 border border-gray-300 rounded"
			/>
			<input
				{...register("date")}
				type="date"
				name="date"
				placeholder="Tentative Order Date"
				className="form-input mb-4 p-2 border border-gray-300 rounded text-white"
			/>
			<textarea
				{...register("query")}
				name="query"
				placeholder="Your Query"
				className="form-input mb-4 p-2 border border-gray-300 rounded h-32"
			/>
			<button
				type="submit"
				className="bg-accent text-white p-2 rounded hover:bg-green-700 "
			>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
