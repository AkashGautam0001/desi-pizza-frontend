import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
	bookingInfo: null,
	status: "idle",
	error: null,
};

export const bookingTable = createAsyncThunk(
	"booking/bookTable",
	async (id) => {
		try {
			const response = axiosInstance.post(`/restaurants/${id}`);

			toast.promise(response, {
				loading: "Please wait",
				error: "Error in booking the table",
				success: "Table Booked Successfully",
			});
			const apiresponse = await response;
			return apiresponse;
		} catch (error) {
			toast.error("Something went wrong");
			console.log(error);
		}
	}
);

const bookingSlice = createSlice({
	name: "booking",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(bookingTable.pending, (state) => {
				state.status = "loading";
			})
			.addCase(bookingTable.fulfilled, (state, action) => {
				state.status = "succeeded";
				console.log("action", action);
				state.bookingInfo = action?.payload?.data;
			})
			.addCase(bookingTable.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export default bookingSlice.reducer;
