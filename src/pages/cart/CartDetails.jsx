import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getCartDetails,
	removeProductFromCart,
} from "../../redux/slices/CartSlice";
import Layout from "../../layouts/Layout";
import { Link } from "react-router-dom";
import EmptyCart from "../../assets/empycart.svg";

function CartDetails() {
	const [cartDetails, setCartDetails] = useState();
	const { cartsData } = useSelector((state) => state.cart);

	// const [isInCart, setIsInCart] = useState(true);
	const dispatch = useDispatch();

	async function fetchCartDetails() {
		const details = await dispatch(getCartDetails());
		console.log(details);
		setCartDetails(details?.payload?.data?.data);
	}
	useEffect(() => {
		fetchCartDetails();
		// }, [isInCart, cartDetails?.items?.length]);
	}, [cartsData?.items?.length]);

	async function handleRemove(productId) {
		const response = await dispatch(removeProductFromCart(productId));
		if (response?.payload?.data?.success) {
			// setIsInCart(false);
			dispatch(getCartDetails());
		}
	}

	return (
		<Layout>
			<section className="py-8 antialiased md:py-16 bg-black">
				<div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
					<h2 className="text-xl font-bold text-gray-100 sm:text-2xl">
						Card details
					</h2>
					{cartDetails?.items?.length > 0 ? (
						<div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8 ">
							<div className="flex-none w-full mx-auto lg:max-w-2xl xl:max-w-4xl">
								<div className="space-y-6">
									{cartDetails?.items.map((item) => (
										<div
											key={item._id}
											className="flex items-center text-gray-100 rounded-lg shadow-md bg-black border border-gray-700"
										>
											<div>
												<img
													src={
														item.product
															.productImage
													}
													alt=""
													className=" w-28 lg:w-36 rounded-l-lg "
												/>
											</div>
											<div className="flex flex-col p-3 relative">
												<span className="font-medium text-primary">
													{item?.product.category}
												</span>
												<Link
													to={`/products/${item?.product._id}`}
													className="text-sm lg:text-xl lg:font-bold text-gray-100 underline hover:text-gray-300"
												>
													{item?.product.productName}
												</Link>
												<span className="hidden md:block text-gray-400 overflow-hidden">
													{item?.product.description}
												</span>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="flex-1 max-w-4xl mx-auto mt-6 space-y-6 lg:mt-0 lg:w-full">
								<div className="p-4 space-y-4 text-gray-100 border rounded-lg shadow-sm bg-black">
									<p className="text-xl font-semibold text-gray-200">
										Order Summary
									</p>

									<div className="space-y-4">
										<div className="space-y-2">
											<dl className="flex flex-col items-start justify-between gap-4">
												{cartDetails?.items.map(
													(item) => {
														return (
															<dd
																key={
																	item
																		?.product
																		?._id
																}
																className="text-base font-medium text-gray-300"
															>
																{
																	item
																		?.product
																		?.productName
																}{" "}
																x{" "}
																{item?.quantity}
																<p className="">
																	{
																		item
																			?.product
																			?.price
																	}{" "}
																	x{" "}
																	{
																		item?.quantity
																	}{" "}
																	={" "}
																	<span className="font-bold text-gray-200">
																		{item
																			?.product
																			?.price *
																			item?.quantity}
																	</span>
																</p>
															</dd>
														);
													}
												)}
											</dl>
										</div>

										<dl className="flex items-center justify-between gap-4 pt-2 border-t border-gray-700">
											<dt className="text-base font-bold text-gray-300">
												Total
											</dt>
											<dd className="text-base font-bold text-gray-300">
												₹
												{cartDetails?.items.length === 0
													? ""
													: Math.floor(
															cartDetails?.items.reduce(
																(acc, item) =>
																	acc +
																	item?.quantity *
																		item
																			?.product
																			?.price,
																0
															)
													  )}
											</dd>
										</dl>
									</div>
									{cartDetails?.items.length > 0 && (
										<Link
											to={"/order"}
											className="flex justify-center text-white bg-primary border py-3 text-xl rounded-md hover:bg-accent"
										>
											Place Order
										</Link>
									)}

									<div className="flex items-center justify-center gap-2 mt-4">
										<span className="text-sm font-normal text-gray-400">
											or
										</span>
										<Link
											to={"/"}
											className="inline-flex items-center gap-2 text-lg font-medium underline text-gray-300 hover:text-gray-100"
										>
											Continue Shopping
											<svg
												className="w-5 h-5 text-gray-300"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M19 12H5m14 0-4 4m4-4-4-4"
												/>
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
					) : (
						<div className="text-white flex flex-col items-center justify-center h-1/2">
							<img
								src={EmptyCart}
								alt=""
								className="lg:w-96 w-32"
							/>
							<h1 className="lg:text-2xl font-bold py-3 my-3">
								Cart is Empty
							</h1>
							<Link
								to={"menu"}
								className="py-2 mt-4 px-5 rounded-full font-bold hover:bg-white hover:text-black border border-white text-white hover:bg-accent-dark transition-all duration-300 ease-in-out"
							>
								Are You Hungury ?{" "}
								<span className="mx-4">Place Order Now!</span>
							</Link>
						</div>
					)}
				</div>
			</section>
		</Layout>
	);
}

export default CartDetails;
