import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../redux/slices/ProductSlice";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import ProductNavbar from "../components/ProductNavbar";

function AllProducts() {
	const dispatch = useDispatch();
	const { productData } = useSelector((state) => state.product);

	useEffect(() => {
		dispatch(getAllProducts());
	}, []);
	return (
		<Layout>
			<section className=" bg-black">
				<div className="block md:hidden">
					<ProductNavbar />
				</div>
				<div className="mx-auto">
					<div className="flex flex-wrap justify-center">
						{productData?.map((item) => {
							return (
								item.inStock && (
									<div
										className="p-4 md:w-1/3"
										key={item._id}
									>
										<Link to={`/products/${item._id}`}>
											<div className="overflow-hidden border rounded-lg border-opacity-60">
												<img
													src={item.productImage}
													alt="Pizza Image" //semantic HTML
													className="object-cover object-center w-full lg:h-48 md:h-36"
												/>
												<div className="p-6 border">
													<h2 className="text-xs font-medium tracking-widest text-gray-400 title-font">
														{item.category}
													</h2>
													<h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
														{item.productName}
													</h1>
													<p className="mb-4 text-base leading-relaxed">
														{item.description}
													</p>
													<p className="text-lg font-medium text-gray-900 title-font">
														${item.price}
													</p>
												</div>
											</div>
										</Link>
									</div>
								)
							);
						})}
					</div>
				</div>
			</section>
			{/* TODO : Make Pagination */}
		</Layout>
	);
}

export default AllProducts;
