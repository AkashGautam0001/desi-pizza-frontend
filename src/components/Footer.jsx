import React from "react";
import FoodDelivery from "../assets/images/FoodDelivery.svg";

function Footer() {
	return (
		<footer className="text-gray-600 body-font bg-gradient-to-b from-black to-primary">
			<div className="flex flex-col lg:flex-row justify-around items-center mx-5 lg:mx-56 py-8 rounded-lg bg-white ">
				<div className="flex flex-col px-5 lg:px-0 items-center ">
					<h1 className="text-2xl lg:text-4xl font-serif">
						<strong className="text-primary">Pizzify's</strong>{" "}
						online ordering
					</h1>
					<p className="text-lg pl-5 lg:pl-0 lg:text-center mb-3 ">
						Delicious and Yummy pizza delivered fast & fresh
					</p>
					<button className="w-fit lg:w-full px-7 py-2 lg:px-4 lg:py-4 text-xl lg:text-2xl bg-accent text-neutral-50 font-extrabold rounded-md transition-all duration-500 ease-in-out hover:bg-black">
						ORDER ONLINE NOW
					</button>
				</div>
				<img
					className="mt-4 lg:mt-0"
					width={300}
					src={FoodDelivery}
					alt="Food delivery"
				/>
			</div>
			<div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
				<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
					<div className="flex flex-col items-center justify-center">
						<h1 className="text-6xl font-serif">
							<strong className="text-black">Pizzify.</strong>{" "}
						</h1>
						<p className="mt-4 md:ml-9 text-lg leading-tight text-gray-900">
							<strong>Your satisfaction is our priority.</strong>{" "}
							We look forward to welcoming you back for another
							exceptional and premium experience.
						</p>
					</div>
				</div>
				<div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-3 mt-10 md:text-left text-center">
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="font-bold text-black text-lg tracking-widest mb-2">
							Menu
						</h2>
						<nav className="list-none mb-10">
							<li>
								<a className="text-white hover:text-black cursor-pointer ">
									Veg Pizza
								</a>
							</li>
							<li>
								<a className="text-white hover:text-black cursor-pointer">
									Chicken Pizza
								</a>
							</li>
							<li>
								<a className="text-white hover:text-black cursor-pointer">
									Burger Pizza
								</a>
							</li>
							<li>
								<a className="text-white hover:text-black cursor-pointer">
									Sides
								</a>
							</li>
							<li>
								<a
									className="text-white
								hover:text-black cursor-pointer"
								>
									Baverages
								</a>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="font-bold text-black text-lg  tracking-widest mb-3">
							PIZZA RESTAURANTS
						</h2>
						<nav className="list-none mb-10">
							<li>
								<a className="text-white hover:text-black cursor-pointer">
									Restaurants Near Me
								</a>
							</li>
							<li>
								<a className="text-white hover:text-black cursor-pointer">
									Pizza Near Me
								</a>
							</li>
							<li>
								<a className="text-white hover:text-black cursor-pointer">
									Food Near Me
								</a>
							</li>
							<li>
								<a className="text-white hover:text-black cursor-pointer">
									Food Delivery
								</a>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="font-bold text-black text-lg  tracking-widest  mb-3">
							LEGAL
						</h2>
						<nav className="list-none mb-10">
							<li>
								<a className="text-white hover:text-black cursor-pointer">
									FAQ's
								</a>
							</li>
							<li>
								<a className="text-white hover:text-black cursor-pointer">
									Disclaimer
								</a>
							</li>
							<li>
								<a className="text-white hover:text-black cursor-pointer">
									Terms & Conditions
								</a>
							</li>
							<li>
								<a className="text-white hover:text-black cursor-pointer">
									Privacy Policy
								</a>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="font-bold text-black text-lg  tracking-widest mb-3">
							COMPANY
						</h2>
						<nav className="list-none mb-10">
							<li>
								<a className="text-white hover:text-black cursor-pointer">
									Blog
								</a>
							</li>
							<li>
								<a className="text-white hover:text-black cursor-pointer">
									Investor
								</a>
							</li>
							<li>
								<a className="text-white hover:text-black cursor-pointer">
									FeedBack
								</a>
							</li>
							<li>
								<a className="text-white  hover:text-black cursor-pointer">
									Ads
								</a>
							</li>
						</nav>
					</div>
				</div>
			</div>
			<div>
				<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
					<p className="text-neutralText text-lg text-center sm:text-left">
						All Rights Reserved. Copyrights | © 2024 Pizzify
						<a
							href="https://twitter.com/knyttneve"
							rel="noopener noreferrer"
							className="text-secondary ml-1"
							target="_blank"
						>
							@AkashGuatam
						</a>
					</p>
					<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
						<a className="text-secondary cursor-pointer">
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-6 h-6"
								viewBox="0 0 24 24"
							>
								<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
							</svg>
						</a>
						<a className="ml-3 text-secondary cursor-pointer0">
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-6 h-6"
								viewBox="0 0 24 24"
							>
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
							</svg>
						</a>
						<a className="ml-3 text-secondary cursor-pointer">
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<rect
									width="20"
									height="20"
									x="2"
									y="2"
									rx="5"
									ry="5"
								></rect>
								<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
							</svg>
						</a>
						<a className="ml-3 text-secondary cursor-pointer">
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-6 h-6"
								viewBox="0 0 24 24"
							>
								<path
									stroke="none"
									d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
								></path>
								<circle
									cx="4"
									cy="4"
									r="2"
									stroke="none"
								></circle>
							</svg>
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
