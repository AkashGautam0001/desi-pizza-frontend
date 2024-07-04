import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./slices/AuthSlice";
import ProductReducer from "./slices/ProductSlice";
import CartSliceReducer from "./slices/CartSlice";
import OrderSliceReducer from "./slices/OrderSlice";

//slice, reducer , store
export const store = configureStore({
	reducer: {
		auth: AuthSliceReducer,
		product: ProductReducer,
		cart: CartSliceReducer,
		order: OrderSliceReducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
