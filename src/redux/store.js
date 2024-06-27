import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./slices/AuthSlice";

//slice, reducer , store
export const store = configureStore({
	reducer: {
		auth: AuthSliceReducer,
	},
	devTools: true,
});
