import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getCartDetails,
	removeProductFromCart,
} from "../../redux/slices/CartSlice";
import Layout from "../../layouts/Layout";
import { Link } from "react-router-dom";

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
											className="flex text-gray-900 rounded-lg shadow-sm bg-white border"
										>
											<div>
												<img
													src={
														item.product
															.productImage
													}
													alt=""
													className="h-40  md:h-36 rounded-l-lg"
												/>
											</div>
											<div className="flex flex-col p-3 relative">
												<span className="font-medium text-primary">
													{item?.product.category}
												</span>
												<Link
													to={`/products/${item?.product._id}`}
												>
													<span className="text-xl font-bold underline">
														{" "}
														{
															item?.product
																.productName
														}
													</span>
												</Link>
												<span className="hidden md:block text-wrap overflow-hidden">
													{item?.product.description}
												</span>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="flex-1 max-w-4xl mx-auto mt-6 space-y-6 lg:mt-0 lg:w-full">
								<div className="p-4 space-y-4 text-gray-800 border rounded-lg shadow-sm bg-white">
									<p className="text-xl font-semibold text-gray-900 ">
										Order summary
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
																className="text-base font-medium "
															>
																{
																	item
																		?.product
																		?.productName
																}{" "}
																x{" "}
																{item?.quantity}
																<p>
																	{
																		item
																			?.product
																			?.price
																	}{" "}
																	x{" "}
																	{
																		item?.quantity
																	}
																</p>
															</dd>
														);
													}
												)}
											</dl>
										</div>

										<dl className="flex items-center justify-between gap-4 pt-2 border-t border-gray-200 dark:border-gray-700">
											<dt className="text-base font-bold ">
												Total
											</dt>
											<dd className="text-base font-bold ">
												₹
												{cartDetails?.items.length === 0
													? ""
													: cartDetails?.items.reduce(
															(acc, item) =>
																acc +
																item?.quantity *
																	item
																		?.product
																		?.price,
															0
													  )}
											</dd>
										</dl>
									</div>
									{cartDetails?.items.length > 0 && (
										<Link
											to={"/order"}
											className="flex justify-center text-white bg-primary border py-3 text-xl rounded-md hover:bg-accent"
										>
											Proceed to Checkout
										</Link>
									)}

									<div className="flex items-center justify-center gap-2">
										<span className="text-sm font-normal text-gray-500 dark:text-gray-400">
											{" "}
											or{" "}
										</span>
										<Link
											to={"/"}
											className="inline-flex items-center gap-2 text-lg font-medium underline text-primary-700 hover:no-underline dark:text-primary-500"
										>
											Continue Shopping
											<svg
												className="w-5 h-5"
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
						"Cart is empty"
					)}
				</div>
			</section>
		</Layout>
	);
}

export default CartDetails;
