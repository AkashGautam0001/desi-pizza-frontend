import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./slices/AuthSlice";
import ProductReducer from "./slices/ProductSlice";
import CartSliceReducer from "./slices/CartSlice";
import OrderSliceReducer from "./slices/OrderSlice";
// import bookingTableReducer from "./slices/ContactSlice";

//slice, reducer , store
export const store = configureStore({
	reducer: {
		auth: AuthSliceReducer,
		product: ProductReducer,
		cart: CartSliceReducer,
		order: OrderSliceReducer,
		// booking: bookingTableReducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
