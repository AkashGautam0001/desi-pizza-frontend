import { useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { placeOrder } from "../../redux/slices/OrderSlice";

function Order() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { cartsData } = useSelector((state) => state.cart);

	const [details, setDetails] = useState({
		paymentMethod: "OFFLINE",
		// phoneNumber: "",
		address: "",
	});

	function handleUserInput(e) {
		const { name, value } = e.target;
		setDetails({
			...details,
			[name]: value,
		});
	}

	async function handleFormSubmit(e) {
		e.preventDefault();
		if (
			details.paymentMethod === "" ||
			details.address === ""
			//|| details.phoneNumber === ""
		) {
			toast.error("Please fill all the fields");
			return;
		}

		const response = await dispatch(placeOrder());
		console.log("Order response", response);

		if (response?.payload?.data?.success) {
			toast.success("Order placed Successfully");
			navigate("/order/success");
		} else {
			toast.error("Something went wrong, Can not place order");
		}
	}

	const totalPrice =
		cartsData?.items?.length === 0
			? "0"
			: Math.floor(
					cartsData?.items?.reduce(
						(acc, item) =>
							acc + item?.quantity * item?.product?.price,
						0
					)
			  );

	return (
		<Layout>
			<section className="min-h-screen bg-black text-gray-300 body-font py-12">
				<div className="container px-6 mx-auto">
					<button
						className="py-3 px-5 rounded-full mb-7  hover:bg-white hover:text-black border border-white text-white hover:bg-accent-dark transition-all duration-300 ease-in-out"
						onClick={() => navigate(-1)}
					>
						Review Your Order{" "}
					</button>
					<div className="text-center mb-12">
						<h1 className="text-3xl font-bold mb-4 text-white">
							Complete Your Order
						</h1>
						<p className="text-lg leading-relaxed">
							Review your details and complete your purchase. The
							total amount is
							<h1 className="text-2xl pt-4  font-bold text-yellow-400">
								₹ {totalPrice}
							</h1>
						</p>
					</div>

					<form
						onSubmit={handleFormSubmit}
						className="bg-gray-800 p-6 rounded-lg shadow-lg"
					>
						<div className="flex flex-col md:flex-row md:gap-6 mb-6">
							<div className="relative flex-grow w-full md:w-1/2 mb-4 md:mb-0">
								<label
									htmlFor="paymentMethod"
									className="block text-lg font-medium text-gray-100 mb-2"
								>
									Payment Method
								</label>
								<select
									name="paymentMethod"
									required
									onChange={handleUserInput}
									className="p-3 border border-gray-600 rounded-md bg-gray-700 text-gray-300 w-full"
								>
									<option value="OFFLINE">Offline</option>
									<option value="ONLINE">Online</option>
								</select>
							</div>

							<div className="relative flex-grow w-full md:w-1/2">
								<label
									htmlFor="phoneNumber"
									className="block text-lg font-medium text-gray-100 mb-2"
								>
									Phone Number
								</label>
								<input
									type="tel"
									name="phoneNumber"
									placeholder="Enter your phone number"
									// onChange={handleUserInput}
									className="p-3 border border-gray-600 rounded-md bg-gray-700 text-gray-300 w-full"
									required
								/>
							</div>
						</div>

						<div className="relative flex-grow w-full my-5">
							<label
								htmlFor="address"
								className="block text-lg font-medium text-gray-100 mb-2"
							>
								Address
							</label>
							<textarea
								name="address"
								placeholder="Enter your delivery address here..."
								onChange={handleUserInput}
								className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-gray-300"
								rows="4"
								required
							></textarea>
						</div>

						<button
							type="submit"
							className="w-full py-3 px-6 bg-green-500 text-white font-bold rounded-lg hover:bg-yellow-400 transition duration-300"
						>
							Procced To Checkout
						</button>
					</form>
				</div>
			</section>
		</Layout>
	);
}

export default Order;
