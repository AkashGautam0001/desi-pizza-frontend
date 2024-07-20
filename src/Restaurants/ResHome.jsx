import React, { useState } from "react";
import RestaurantsHomePage from "../assets/restaurantsHomePage.jpg";
import Dropdown from "../components/Dropdown";
import { useSelector } from "react-redux";
import axiosInstance from "../helpers/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import FAQAccordion from "./FAQAccordion";

const ResHome = () => {
	const [selectedOption, setSelectedOption] = useState("");
	const navigate = useNavigate();
	const initialValue = {
		noOfPeople: 0,
		time: "",
		location: selectedOption,
		date: "",
		duration: "",
	};
	const [formData, setFormData] = useState({
		noOfPeople: 0,
		time: "",
		location: selectedOption,
		date: "",
		duration: "",
	});

	const { cartsData } = useSelector((state) => state.cart);
	const id = cartsData.user;

	console.log("id", id);

	const options = [
		{ value: "zostel", label: "Zostel Delhi" },
		{ value: "pacthostel", label: "Pact Hostel" },
		{ value: "madpackers", label: "Madpackers Hostel" },
		{ value: "go_stay", label: "GoStays Hostel" },
		{ value: "backpacker", label: "Backpacker Panda" },
		{ value: "thehostel", label: "The Hosteller Delhi" },
		{ value: "hostelworld", label: "Hostelworld Delhi" },
		{ value: "stayx", label: "StayX Hostel" },
		{ value: "hostel_club", label: "Hostel Club Delhi" },
		{ value: "the_zostel", label: "The Zostel" },
	];

	const handleChange = (event) => {
		setSelectedOption(event);
		setFormData((prevFormData) => ({
			...prevFormData,
			location: event,
		}));
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("formdata", formData);
		const response = axiosInstance.post(`/restaurants/${id}`, formData);
		toast.promise(response, {
			loading: "Please wait",
			error: "Error in booking the table",
			success: "Table Booked Successfully",
		});
		const apiresponse = await response;
		console.log(apiresponse);

		if (apiresponse?.data?.success) {
			navigate(`/restaurants/success`);
		}

		// const apiResponse = await dispatch(bookingTable(id));
		// console.log("apiResponse", apiResponse);
	};

	return (
		<Layout>
			<div className="bg-black relative min-h-screen">
				<div className="bg-black py-8 px-4 text-center">
					<h1 className="text-3xl font-bold text-white mb-4 md:text-9xl">
						Welcome to Pizzify's Premium Restaurant
					</h1>
					<p className="text-lg text-gray-300 md:text-xl lg:px-20">
						We're thrilled to have you here! At Pizzify's, we aim to
						provide an unforgettable dining experience with our
						delicious offerings and exceptional service. Whether
						you're here to reserve a seat or have any queries, we're
						here to ensure you have a fantastic time.
					</p>
				</div>
				<img
					src={RestaurantsHomePage}
					alt="background-image"
					className="w-full h-64 object-cover md:h-96"
				/>
				<div className="flex md:flex-row-reverse flex-col lg:mt-7">
					<div className="bg-black/70 py-8 px-6 mt-5 rounded-lg shadow-lg  flex flex-col gap-4 lg:w-1/2">
						<div className="text-white text-lg">
							<h1 className="text-2xl md:text-3xl font-bold lg:text-5xl text-left">
								Reserve Your Seat Now
							</h1>
						</div>
						<hr className="bg-white text-white w-full mb-6" />
						<div className="flex flex-col w-full">
							<h1 className="text-white text-lg md:text-xl mb-2 ml-4">
								Select your place
							</h1>
							<Dropdown
								options={options}
								selectedOption={selectedOption}
								handleChange={handleChange}
							/>
						</div>
						<form
							onSubmit={handleSubmit}
							className="w-full flex flex-col lg:gap-6 text-left"
						>
							<div className="text-white text-lg md:text-xl mt-4">
								<h1 className="text-white text-lg md:text-xl pl-4">
									Number of People
								</h1>
								<input
									name="noOfPeople"
									type="number"
									placeholder="Number of People"
									className="w-full px-12 py-3 text-black bg-gray-200 border border-white rounded-full focus:outline-none lg:text-2xl"
									onChange={handleInputChange}
								/>
							</div>
							<div className="mt-4">
								<h1 className="text-white text-lg md:text-xl pl-4">
									Date
								</h1>
								<input
									name="date"
									type="date"
									placeholder="Date"
									className="w-full px-12 py-3 text-black bg-gray-200 border border-white rounded-full focus:outline-none lg:text-2xl"
									onChange={handleInputChange}
								/>
							</div>
							<div className="mt-4">
								<h1 className="text-white text-lg md:text-xl pl-4">
									Expected Time{" "}
								</h1>
								<input
									name="time"
									type="time"
									placeholder=""
									className="w-full px-12 py-3 text-black bg-gray-200 border border-white rounded-full focus:outline-none lg:text-2xl"
									onChange={handleInputChange}
								/>
							</div>
							<div className="mt-4">
								<h1 className="text-white text-lg md:text-xl pl-4">
									Expected Duration
								</h1>
								<input
									name="duration"
									type="text"
									placeholder="30 min, 1 hr , 2hr ..."
									className="w-full px-12 py-3 text-black bg-gray-200 border border-white rounded-full focus:outline-none lg:text-2xl"
									onChange={handleInputChange}
								/>
							</div>
							<button
								type="submit"
								className="py-4 mt-4 lg:px-4 rounded-full text-xl font-bold hover:bg-white hover:text-black border border-white text-white hover:bg-accent-dark transition-all duration-300 ease-in-out"
							>
								Book Your Table
							</button>
						</form>
					</div>
					<div className="bg-black py-8 px-4 lg:pb-24 lg:w-1/2">
						<div className="container mx-auto flex flex-col">
							{/* Premium Services Section */}
							<div className="text-center mb-8">
								<h1 className="text-4xl lg:text-8xl font-bold text-white mb-4 lg:text-right">
									<strong className="text-secondary text-5xl font-extrabold font-serif lg:text-9xl ">
										Premium
									</strong>{" "}
									Services and Assistance
								</h1>
								<p className="text-lg md:text-lg lg:text-4xl px-2 lg:px-0 text-white mb-6 lg:text-right">
									At Pizzify's Premium Restaurant, we are
									committed to providing an exceptional dining
									experience. Our premium services include
									personalized reservations, dedicated
									customer support, and customized event
									planning to make every occasion special. If
									you have any additional questions or require
									further assistance, our expert team is here
									to ensure you have a seamless and delightful
									experience.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="text-center lg:px-52 lg:pb-24 lg:mt-10">
					<h2 className="text-xl md:text-2xl lg:text-5xl font-semibold text-white mb-4 ">
						Further Queries
					</h2>
					<p className="text-base md:text-lg lg:text-xl text-white mb-6 px-4">
						Should you have any questions or need further
						information about our services, don't hesitate to get in
						touch. We are dedicated to addressing your concerns and
						providing the support you need to make the most of our
						offerings. Feel free to reach out to us through the
						contact form or via email.
					</p>
					<button className="py-4 mt-4 px-12 lg:px-10 rounded-full text-xl font-bold hover:bg-white hover:text-black border border-white text-white hover:bg-accent-dark transition-all duration-300 ease-in-out">
						Contact Us
					</button>
				</div>
				<FAQAccordion />
			</div>
		</Layout>
	);
};

export default ResHome;
