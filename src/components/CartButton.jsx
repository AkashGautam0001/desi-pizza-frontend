import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
	addProductToCart,
	getCartDetails,
	removeProductFromCart,
} from "../redux/slices/CartSlice";

const CartButton = ({ presentInCart, setPresentInCart }) => {
	const { productId } = useParams();
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(0);

	const handleAddToCart = () => {
		dispatch(addProductToCart(productId));
		dispatch(getCartDetails());
		setQuantity(1);
		setPresentInCart(true);
	};

	const handleRemoveFromCart = () => {
		dispatch(removeProductFromCart(productId));
		setQuantity((prev) => Math.max(0, prev - 1));
		dispatch(getCartDetails());
	};

	const { cartsData } = useSelector((state) => state.cart);

	const updateQuantity = () => {
		const cartItem = cartsData?.items?.find(
			(item) => item.product._id === productId
		);
		if (cartItem) {
			setQuantity(cartItem.quantity);
			setPresentInCart(cartItem.quantity > 0);
		} else {
			setQuantity(0);
			setPresentInCart(false);
		}
	};

	useEffect(() => {
		updateQuantity();
	}, [quantity, cartsData]);

	return (
		<>
			{presentInCart && quantity > 0 ? (
				<div className="rounded-lg font-extrabold bg-gray-300 ">
					<button
						className="px-[24px] py-[3px] text-2xl text-accent hover:bg-accent rounded-l-lg hover:text-white  transition-all duration-300 ease-in-out"
						onClick={() => handleAddToCart()}
					>
						+
					</button>
					<span className="px-3 text-black">{quantity}</span>
					<button
						className="px-[24px] py-[3px] text-2xl text-primary hover:bg-primary rounded-r-lg hover:text-white  transition-all duration-300 ease-in-out"
						onClick={() => handleRemoveFromCart(productId)}
					>
						-
					</button>
				</div>
			) : (
				<button
					className="flex px-6 py-2 ml-auto text-white bg-accent border-0 rounded focus:outline-none hover:bg-green-600"
					onClick={handleAddToCart}
				>
					Add to Cart
				</button>
			)}
		</>
	);
};

export default CartButton;
