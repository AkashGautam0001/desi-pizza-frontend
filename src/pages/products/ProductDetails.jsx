import { Link, useParams } from "react-router-dom";
import Layout from "../../layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductDetails } from "../../redux/slices/ProductSlice";
import CartButton from "../../components/CartButton";

function ProductDetails() {
	const [presentInCart, setPresentInCart] = useState(false);
	const dispatch = useDispatch();
	const [productDetails, setProductDetails] = useState({});
	const { cartsData } = useSelector((state) => state.cart);

	const { productId } = useParams();
	async function fetchProductDetails() {
		const details = await dispatch(getProductDetails(productId));
		console.log(details);
		setProductDetails(details?.payload?.data?.data);
	}

	function checkPresentInCart() {
		cartsData?.items?.forEach((item) => {
			if (item.product._id === productId) {
				setPresentInCart(true);
				return;
			}
			setPresentInCart(false);
			return;
		});
	}

	useEffect(() => {
		fetchProductDetails();
		checkPresentInCart();
	}, []);
	return (
		<Layout>
			{/* <section className="overflow-hidden text-gray-600 body-font bg-black">
				<div className="container px-5 py-2 md:py-24 mx-auto flex flex-col md:flex-row">
					<div
						className="p-2 flex flex-col md:flex-row"
						key={productDetails._id}
					>
						<Link to={`/products/${productDetails?._id}`}>
							<div className="overflow-hidden border rounded-lg bg-white">
								<img
									src={productDetails?.productImage}
									alt="Pizza Image" //semantic HTML
									className="object-cover object-center w-full lg:h-48 md:h-36"
								/>
								<div className="p-6  flex flex-col ">
									<h2 className="text-sm font-medium tracking-widest text-primary title-font">
										{productDetails?.category}
									</h2>

									<h1 className="text-lg font-bold text-gray-900 title-font">
										{productDetails?.productName}
									</h1>

									<p className="text-base leading-tight mt-2">
										{productDetails?.description}
									</p>
								</div>
								<hr className="mt-3" />

								<div className="flex justify-between text-lg font-medium text-gray-900 title-font px-6 py-2 bg-gray-100">
									<span className="text-2xl font-medium text-gray-900 title-font">
										₹{productDetails?.price}
									</span>
									<CartButton
										presentInCart={presentInCart}
										setPresentInCart={setPresentInCart}
									/>
								</div>
							</div>
						</Link>
					</div>
					<div>
						<div className="flex mb-4">
							<span className="flex items-center">
								<svg
									fill="#FF9110"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="w-4 h-4 "
									viewBox="0 0 24 24"
								>
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>

								<span className="ml-1 text-gray-400">
									3.4 (100+ rating)
								</span>
							</span>
						</div>
						<div>
							<div>
								<h1 className="text-wrap">Outlet : Noida </h1>
								<h1>20-30 min</h1>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			<section className="overflow-hidden text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap mx-auto lg:w-4/5">
						<img
							alt="ecommerce"
							className="object-contain w-full h-64 rounded lg:w-1/2 lg:h-96"
							src={productDetails?.productImage}
						/>
						<div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-20 xl:py-28 lg:mt-0">
							<h2 className="text-sm tracking-widest text-gray-500 title-font">
								{productDetails?.category}
							</h2>
							<h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
								{productDetails?.productName}
							</h1>
							<div className="flex mb-4">
								<span className="flex items-center">
									<svg
										fill="#FF9110"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="w-4 h-4 "
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<svg
										fill="#FF9110"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="w-4 h-4"
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<svg
										fill="#FF9110"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="w-4 h-4"
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<svg
										fill="#"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="w-4 h-4"
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<svg
										fill="#"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="w-4 h-4"
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<span className="ml-3 text-gray-600">
										4 Reviews
									</span>
								</span>
								<span className="flex py-2 pl-3 ml-3 border-l-2 border-gray-200 space-x-2s">
									<a className="text-gray-500">
										<svg
											fill="#FF9110"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a className="text-gray-500">
										<svg
											fill="#FF9110"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
									</a>
									<a className="text-gray-500">
										<svg
											fill="#FF9110"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
										</svg>
									</a>
								</span>
							</div>
							<p className="leading-relaxed">
								{productDetails?.description}
							</p>

							<div className="flex pt-5 space-x-7 items-center ">
								<span className="text-2xl font-medium text-gray-900 title-font">
									₹{productDetails?.price}
								</span>
								<CartButton
									presentInCart={presentInCart}
									setPresentInCart={setPresentInCart}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default ProductDetails;
