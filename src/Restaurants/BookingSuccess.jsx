import React from "react";
import Layout from "../layouts/Layout";

const BookingSuccess = () => {
	return (
		<Layout>
			<div className="min-h-screen flex items-center justify-center bg-black p-6 pb-24">
				<div className="bg-black shadow-lg rounded-lg p-8 max-w-md text-center border border-primary">
					<h1 className="text-2xl font-semibold text-white mb-4">
						Thank You for Your Booking!
					</h1>
					<p className="text-gray-100 mb-6">
						We are delighted to have you at{" "}
						<span className="font-bold text-green-600">
							Pizzify's Premium Restaurant
						</span>
						. We hope you enjoy our exquisite dining experience and
						exceptional service.
					</p>
					<div className="text-left">
						<h2 className="text-lg font-medium text-gray-100 mb-2">
							Reservation Details:
						</h2>
						<ul className="list-disc list-inside text-gray-200">
							<li>Reservation Name: John Doe</li>
							<li>Date: July 25, 2024</li>
							<li>Time: 7:00 PM</li>
							<li>Number of Guests: 4</li>
						</ul>
					</div>
					<div className="text-left mt-6">
						<h2 className="text-lg font-medium text-gray-100 mb-2">
							Contact Us:
						</h2>
						<p className="text-gray-200">
							If you have any questions or need to make changes to
							your reservation, please contact us at
							<a
								href="tel:+1234567890"
								className="text-blue-200"
							>
								{" "}
								+1 (234) 567-890
							</a>{" "}
							or
							<a
								href="mailto:info@pizzifysrestaurant.com"
								className="text-blue-200"
							>
								{" "}
								info@pizzifysrestaurant.com
							</a>
							.
						</p>
					</div>
					<div className="mt-8">
						<a
							href="/"
							className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
						>
							Back to Home
						</a>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default BookingSuccess;
