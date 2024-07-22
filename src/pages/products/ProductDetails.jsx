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
		});
	}

	useEffect(() => {
		fetchProductDetails();
		checkPresentInCart();
	}, [productId, cartsData]);

	return (
		<Layout>
			<section className="bg-black text-gray-100 overflow-hidden">
				<div className="container px-5 py-24 mx-auto flex flex-wrap">
					<div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
						<img
							alt="Product Image"
							className="object-contain w-full h-64 rounded-lg lg:h-96"
							src={productDetails?.productImage}
						/>
					</div>
					<div className="lg:w-1/2 w-full lg:pl-10 lg:py-20 xl:py-28 mt-6 lg:mt-0">
						<h2 className="text-sm tracking-widest text-primary title-font uppercase">
							{productDetails?.category}
						</h2>
						<h1 className="mb-1 text-3xl font-medium text-gray-100 title-font">
							{productDetails?.productName}
						</h1>
						<div className="flex mb-4">
							<span className="flex items-center">
								{[...Array(5)].map((_, index) => (
									<svg
										key={index}
										fill={index < 4 ? "#FF9110" : "none"}
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="w-4 h-4"
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
								))}
								<span className="ml-3 text-gray-400">
									4 Reviews
								</span>
							</span>
						</div>
						<p className="leading-relaxed mb-4">
							{productDetails?.description}
						</p>
						<div className="flex items-center space-x-6">
							<span className="text-2xl font-medium text-gray-100">
								₹{productDetails?.price}
							</span>
							<CartButton
								presentInCart={presentInCart}
								setPresentInCart={setPresentInCart}
							/>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default ProductDetails;
