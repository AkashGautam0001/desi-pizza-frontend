import React from "react";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<>
			<Layout>
				<div className="min-h-screen bg-black md:p-8">
					<div className="max-w-6xl mx-auto bg-black shadow-lg rounded-lg overflow-hidden p-6">
						<div className="flex flex-col lg:flex-row">
							<div className="w-full lg:w-1/2 p-4 border-b lg:border-b-0 lg:border-r border-gray-300">
								<h1 className="text-xl font-bold text-gray-200 mb-4">
									Have any feedback or queries?
								</h1>
								<p className="text-gray-200 mb-2">
									We'd love to hear from you. Write to us at
								</p>
								<a
									href="mailto:uestcarepizzify@jublfood.com"
									className="text-blue-600 underline mb-4 block"
								>
									uestcarepizzify@jublfood.com
								</a>
								<button className="bg-green-600 text-white p-2 rounded mb-4 hover:bg-green-700">
									FIND YOUR NEAREST OUTLET
								</button>
								<p className="text-gray-200">
									Try our delicious treats and rescue hunger
									with
									<Link
										to="/"
										className="text-blue-600 underline ml-1"
									>
										Pizzify Restaurants nearest to you
									</Link>
								</p>
							</div>
							<div className="w-full lg:w-1/2 p-4">
								<div className="mb-4">
									<h1 className="text-xl font-bold text-gray-200 mb-2">
										Domino's Customer Care Number
									</h1>
									<p className="text-gray-200">
										1800-205-1234
									</p>
								</div>
								<div className="text-gray-200">
									PIzzify's Pizza India,
									<br /> Tower-D, Plot No. 5, 5th Floor, Logix
									Techno Park, <br />
									Sector 127, Noida - 201304, U.P.
								</div>
							</div>
						</div>
						<div className="mt-8">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d448425.36709115043!2d77.2308992!3d28.59008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721483801123!5m2!1sen!2sin"
								width="100%"
								height="450"
								style={{ border: "0" }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Contact;
