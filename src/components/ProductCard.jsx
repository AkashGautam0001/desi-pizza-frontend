import PizzaImage from "../assets/images/pizza2.png";

function ProductCard() {
	return (
		<>
			<div className="flex flex-col w-[300px] max-h-[500px]  border-2 border-teal-400 bg-white">
				<div className="relative">
					<img
						className=" w-200px"
						src={PizzaImage}
						alt="Pizza"
					/>
					<div className="absolute top-0 right-0 border-2 p-2">
						Add to cart
					</div>
				</div>
				<div className="bg-red-200">
					<h1 className="text-2xl font-bold s">Pizza</h1>
					<p className="text-md">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Maxime, ad. Ex est, officia illo dolorum laborum
						ipsum itaque magnam asperiores et voluptatumusto?
					</p>
				</div>
			</div>
		</>
	);
}

export default ProductCard;
