import React from "react";
import Layout from "../../layouts/Layout";
import ContactForm from "./ContactForm";
import VirtualParty from "../../assets/virtualParty.jpg";

const Corporate = () => {
	return (
		<Layout>
			<div className="flex flex-col lg:flex-row min-h-screen bg-black md:p-8">
				{/* Content Section */}
				<div className="flex-1 max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
					<div className="lg:p-6 p-4">
						<div className="text-center mb-6">
							<h1 className="text-5xl font-extrabold text-gray-100 my-4">
								VIRTUAL PARTY
							</h1>
						</div>
						<img
							src={VirtualParty}
							alt="Party Image"
							className="w-full h-80 object-cover mb-6 rounded-lg shadow-md"
						/>
						<div className="text-center mb-8">
							<h2 className="text-2xl font-semibold text-gray-200 mb-4">
								WORK TOGETHER, EAT TOGETHER
							</h2>
							<p className="text-gray-400 text-lg">
								As virtual parties have become the new way to
								bond and enjoy together, it’s time to up these
								unique celebrations with a unique feast.
							</p>
						</div>
						<div className="text-center mb-8">
							<h2 className="text-2xl font-semibold text-gray-200 mb-4">
								GREAT TASTE, DELIVERED SAFE
							</h2>
							<p className="text-gray-400 text-lg">
								At Domino’s we understand the growing concerns
								regarding food safety and hygiene. That’s why we
								take all the necessary precautions and follow
								strict safety and hygiene protocols while making
								and delivering your food. So, you can enjoy your
								safe virtual celebrations with the safest ever
								virtual feast.
							</p>
						</div>
						<div className="text-center mb-8">
							<h2 className="text-2xl font-semibold text-gray-200 mb-4">
								CELEBRATIONS MADE EASY
							</h2>
							<p className="text-gray-400 text-lg">
								Convert your work from home into party from home
								with Domino’s Virtual Feast. Order some good old
								favorites from Domino’s and celebrate with your
								colleagues in a new and safer way.
							</p>
						</div>
					</div>
				</div>
				{/* Contact Form Section */}
				<div className="lg:w-2/5 flex flex-col justify-center p-4 lg:p-8">
					<ContactForm />
					<div className="text-center mt-8">
						<p className="text-gray-300 text-lg">
							Feel free to write to us at{" "}
							<a
								href="mailto:corporate.sales@jublfood.com"
								className="text-blue-400 underline"
							>
								corporate.sales@pizzifyfood.com
							</a>
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Corporate;
