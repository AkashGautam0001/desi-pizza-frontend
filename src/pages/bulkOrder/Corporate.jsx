import React from "react";
import Layout from "../../layouts/Layout";
import ContactForm from "./ContactForm";
import VirtualParty from "../../assets/virtualParty.jpg";

const Corporate = () => {
	return (
		<Layout>
			<div className="flex flex-col lg:flex-row min-h-screen bg-black md:p-8">
				<div className="max-w-4xl mx-auto bg-black shadow-lg rounded-lg overflow-hidden">
					<div className="lg:p-6">
						<div className="text-center">
							<h1 className="text-4xl font-bold text-gray-100 my-4">
								VIRTUAL PARTY
							</h1>
						</div>
						<img
							src={VirtualParty}
							alt="Party Image"
							className="w-full h-64 object-cover mb-6"
						/>
						<div className="text-center p-3 mb-8">
							<h1 className="text-xl font-bold text-gray-200 mb-4">
								WORK TOGETHER, EAT TOGETHER
							</h1>
							<p className="text-gray-100">
								As virtual parties have become the new way to
								bond and enjoy together, it’s time to up these
								unique celebrations with a unique feast.
							</p>
						</div>
						<div className="text-center p-4 mb-8">
							<h1 className="text-xl font-bold text-gray-200 mb-4">
								GREAT TASTE, DELIVERED SAFE
							</h1>
							<p className="text-gray-100">
								At Domino’s we understand the growing concerns
								regarding food safety and hygiene. That’s why we
								take all the necessary precautions and follow
								strict safety and hygiene protocols while making
								delivering your food. So, you can enjoy your
								safe virtual celebrations with the safest ever
								virtual feast.
							</p>
						</div>
						<div className="text-center p-4 mb-8">
							<h1 className="text-xl font-bold text-gray-200 mb-4">
								CELEBRATIONS MADE EASY
							</h1>
							<p className="text-gray-100">
								Convert your work from home into party from home
								with Domino’s Virtual Feast. Order some good old
								favourites from Domino’s and celebrate with your
								colleagues in a new and safer way.
							</p>
						</div>
					</div>
				</div>
				<div className="lg:w-2/5 flex flex-col justify-center ">
					<ContactForm />
					<div className="text-center bg-black">
						<p className="text-gray-100">
							Feel free to write to us at{" "}
							<a
								href="mailto:corporate.sales@jublfood.com"
								className="text-blue-600 underline"
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
