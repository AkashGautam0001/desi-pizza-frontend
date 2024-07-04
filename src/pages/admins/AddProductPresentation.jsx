import Layout from "../../layouts/Layout";

function AddProductPresentation() {
	return (
		<>
			<Layout>
				<section className="py-12">
					<div className="max-w-md mx-auto mt-8 bg-white p-7">
						<h2 className="mb-4 text-2xl font-semibold">
							Add Product
						</h2>
						<form action="">
							<div className="mb-4">
								<label
									htmlFor="productName"
									className="block text-sm font-medium text-gray-700"
								>
									Product Name{" "}
									<span className="text-red-600">*</span>
								</label>
								<input
									type="text"
									name="productName"
									id="productName"
									required
									minLength={5}
									maxLength={20}
									// onChange={handleUserInput}
									className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>

							<div className="mb-4">
								<label
									htmlFor="description"
									className="block text-sm font-medium text-gray-700"
								>
									Descripition{" "}
									<span className="text-red-600">*</span>
								</label>
								<input
									type="text"
									name="description"
									id="description"
									required
									// onChange={handleUserInput}
									minLength={5}
									maxLength={60}
									className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>

							<div className="mb-4">
								<label
									htmlFor="quantity"
									className="block text-sm font-medium text-gray-700"
								>
									Quantity{" "}
									<span className="text-red-600">*</span>
								</label>
								<input
									type="number"
									name="quantity"
									id="quantity"
									// onChange={handleUserInput}
									required
									className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>

							<div className="mb-4">
								<label
									htmlFor="productPrice"
									className="block text-sm font-medium text-gray-700"
								>
									Product Price{" "}
									<span className="text-red-600">*</span>
								</label>
								<input
									type="number"
									name="productPrice"
									id="productPrice"
									// onChange={handleUserInput}
									required
									className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>

							<div className="mb-2">
								<label
									htmlFor="category"
									className="block text-sm font-medium text-gray-700"
								>
									Select Category{" "}
									<span className="text-red-500">*</span>
								</label>
								<select
									name="category"
									id="category"
									// onChange={handleUserInput}
									className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								>
									<option value="veg">Vegitarian</option>
									<option value="non-veg">
										Non-Vegetarian
									</option>
									<option value="drinks">Soft Drinks</option>
									<option value="sides">Sides</option>
								</select>
							</div>

							<div className="mb-4">
								<label
									htmlFor="productImage"
									className="block text-sm font-medium text-gray-700"
								>
									Product Image{" "}
									<span className="text-red-500">
										(.jpg, .png, .jpeg)
									</span>
								</label>

								<input
									type="file"
									required
									name="productImage"
									id="productImage"
									// onChange={handleUserInput}
									accept=".jpg, .jpeg, .png"
									className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>

							<button
								className="w-full px-8 py-2 text-lg text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600"
								type="submit"
								// onClick={handleSubmit}
							>
								Add Product
							</button>
						</form>
					</div>
				</section>
			</Layout>
		</>
	);
}

export default AddProductPresentation;
