import toast from "react-hot-toast";
import axiosInstance from "../../helpers/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	cartsData: "",
};

export const getCartDetails = createAsyncThunk("cart/getDetails", async () => {
	try {
		const response = axiosInstance.get(`/carts`);
		console.log("CartDetails ", response);
		toast.promise(response, {
			loading: "Please wait, Cart is loading...",
			error: "Something went wrong cannot get cart",
			success: "Cart loaded successfully",
		});

		const apiReponse = await response;
		console.log("getCart Details", apiReponse);
		return apiReponse;
	} catch (error) {
		console.log(error);
		console.log(error.response);
		if (error?.response?.status === 401) {
			toast.error("Please login to view cart");
			return {
				isUnauthorized: true,
			};
		}
		toast.error("Something went wrong");
	}
});

export const addProductToCart = createAsyncThunk(
	"cart/addProduct",
	async (productId) => {
		try {
			const response = axiosInstance.post(`/carts/add/${productId}`);
			console.log("response", response);
			toast.promise(response, {
				loading: "Adding to cart...",
				error: "Something went wrong cannot add product to cart",
				success: "Product loaded successfully",
			});

			const apiReponse = await response;
			return apiReponse;
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong");
		}
	}
);

export const removeProductFromCart = createAsyncThunk(
	"cart/removeProduct",
	async (productId) => {
		try {
			const response = axiosInstance.post(`/carts/remove/${productId}`);
			toast.promise(response, {
				loading: "Removeing Product from cart...",
				error: "Something went wrong cannot remove the product",
				success: "Product Deleted successfully",
			});

			const apiReponse = await response;
			return apiReponse;
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong");
		}
	}
);

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCartDetails.fulfilled, (state, action) => {
			state.cartsData = action?.payload?.data?.data;
		});
	},
});

export default cartSlice.reducer;
