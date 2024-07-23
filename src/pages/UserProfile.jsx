import React from "react";
import Layout from "../layouts/Layout";
import { Link, useNavigate } from "react-router-dom";
import OrderHistory from "./order/OrderHistory";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/AuthSlice";

const UserProfile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleEditProfile = () => {
		// Handle edit profile logic here
		alert("Edit Profile clicked!");
	};

	const { data } = useSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch(logout());
		navigate("/");
	};

	return (
		<Layout>
			<div className="min-h-screen  bg-black flex flex-col lg:flex-row p-4 text-white">
				<div className="rounded-lg shadow-lg p-6 lg:w-1/3">
					<div className="flex flex-col items-center">
						<img
							className="w-24 h-24 rounded-full border-2 border-gray-600"
							src="https://via.placeholder.com/150"
							alt="User Profile"
						/>
						<h2 className="mt-4 text-xl font-semibold text-white">
							{data.firstName}
						</h2>
					</div>

					<div className="mt-6 w-full">
						<h3 className="text-lg font-medium text-white">
							Profile Details
						</h3>
						<div className="mt-4">
							<div className="flex justify-between items-center border-b border-gray-600 py-2">
								<span className="text-gray-400">Full Name</span>
								<span className="text-white">
									{data.firstName}
								</span>
							</div>
							<div className="flex justify-between items-center border-b border-gray-600 py-2">
								<span className="text-gray-400">Email</span>
								<span className="text-white">{data.email}</span>
							</div>
							<div className="flex justify-between items-center border-b border-gray-600 py-2">
								<span className="text-gray-400">Phone</span>
								<span className="text-white">
									+123 456 7890
								</span>
							</div>
							<div className="flex justify-between items-center border-b border-gray-600 py-2">
								<span className="text-gray-400">Address</span>
								<span className="text-white">
									123 Main St, City, Country
								</span>
							</div>
						</div>
					</div>

					<div className="mt-6 w-full flex justify-between">
						<button
							className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
							onClick={handleEditProfile}
						>
							Edit Profile
						</button>
						<button
							className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
							onClick={handleLogout}
						>
							Logout
						</button>
					</div>
				</div>
				<OrderHistory />
			</div>
		</Layout>
	);
};

export default UserProfile;
