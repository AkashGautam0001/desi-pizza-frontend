import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProducts } from "../redux/slices/ProductSlice";
import { Link, NavLink } from "react-router-dom";
import Layout from "../layouts/Layout";
import { categories, categoryMob } from "../utils/categories";

function AllProducts() {
	const dispatch = useDispatch();
	const { productData } = useSelector((state) => state.product);
	const [searchParam, setSearchParam] = useState("all");
	const [filterProduct, setFilterProduct] = useState([...productData]);
	const [filter, setFilter] = useState(false);

	useEffect(() => {
		dispatch(getAllProducts());
	}, []);

	useEffect(() => {
		if (searchParam == "all") {
			setFilterProduct(productData);
		} else {
			const response = productData.filter(
				(product) => product.category == searchParam
			);
			console.log(response);
			setFilterProduct(response);
		}
	}, [searchParam]);

	return (
		<Layout>
			<section className="bg-black">
				<div className="sticky top-9 block md:hidden ">
					<div className="flex flex-row bg-black justify-center  w-full gap-1 py-2">
						{categoryMob.map((category, index) => (
							<NavLink
								key={index}
								value={category.value}
								className="categories-style-mob"
								onClick={() => {
									setSearchParam(category.value);
									setFilter(true);
								}}
							>
								{category.name}
							</NavLink>
						))}
					</div>
				</div>
				<div className="sticky top-0 hidden md:flex md:justify-center ">
					<div className="flex text-white bg-black pt-3 pb-4 justify-center space-x-7 w-full">
						{categories.map((category, index) => (
							<NavLink
								key={index}
								value={category.value}
								className="categories-style"
								onClick={() => {
									setSearchParam(category.value);
									setFilter(true);
								}}
							>
								{category.name}
							</NavLink>
						))}
					</div>
				</div>

				<div className="mx-auto">
					<div className="flex flex-wrap justify-center">
						{!filter
							? productData?.map((item) => {
									return (
										item.inStock && (
											<div
												className="p-2 md:w-1/3 lg:w-1/4"
												key={item._id}
											>
												<Link
													to={`/products/${item._id}`}
												>
													<div className="overflow-hidden border rounded-lg bg-white">
														<img
															src={
																item.productImage
															}
															alt="Pizza Image" //semantic HTML
															className="object-cover object-center w-full lg:h-48 md:h-36"
														/>
														<div className="p-6 border h-36 md:h-44 flex flex-col ">
															<h2 className="text-sm font-medium tracking-widest text-primary title-font">
																{item.category}
															</h2>

															<h1 className="text-lg font-bold text-gray-900 title-font">
																{
																	item.productName
																}
															</h1>

															<p className="text-base leading-tight mt-2">
																{
																	item.description
																}
															</p>
														</div>
														<p className="text-lg font-medium text-gray-900 title-font px-6 py-2 bg-gray-100">
															₹ {item.price}
														</p>
													</div>
												</Link>
											</div>
										)
									);
							  })
							: filterProduct?.map((item) => {
									return (
										item.inStock && (
											<div
												className="p-2 md:w-1/3 lg:w-1/4"
												key={item._id}
											>
												<Link
													to={`/products/${item._id}`}
												>
													<div className="overflow-hidden border rounded-lg bg-white">
														<img
															src={
																item.productImage
															}
															alt="Pizza Image" //semantic HTML
															className="object-cover object-center w-full lg:h-48 md:h-36"
														/>
														<div className="p-6 border h-36 md:h-44 flex flex-col ">
															<h2 className="text-sm font-medium tracking-widest text-primary title-font">
																{item.category}
															</h2>

															<h1 className="text-lg font-bold text-gray-900 title-font">
																{
																	item.productName
																}
															</h1>

															<p className="text-base leading-tight mt-2">
																{
																	item.description
																}
															</p>
														</div>
														<p className="text-lg font-medium text-gray-900 title-font px-6 py-2 bg-gray-100">
															₹ {item.price}
														</p>
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
