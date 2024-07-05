import { useState } from "react";
import toast from "react-hot-toast";
import SignUpPresentation from "./SignupPresentation";
import { useDispatch } from "react-redux";
import { createAccount } from "../../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

// container
function Signup() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [signUpState, setSignUpState] = useState({
		firstName: "",
		email: "",
		mobileNumber: "",
		password: "",
	});

	function handleUserInput(e) {
		const { name, value } = e.target;
		setSignUpState({
			...signUpState,
			[name]: value,
		});
	}

	async function handleFormSubmit(e) {
		e.preventDefault();
		console.log(signUpState);

		if (
			!signUpState.email ||
			!signUpState.mobileNumber ||
			!signUpState.password ||
			!signUpState.firstName
		) {
			toast.error("Missing values from the form");
			return;
		}

		if (
			signUpState.firstName.length < 5 ||
			signUpState.firstName.length > 20
		) {
			toast.error(
				"First name should be atleast 5 character long and max length should be less than 20"
			);
			return;
		}
		if (
			!signUpState.email.includes("@") ||
			!signUpState.email.includes(".")
		) {
			toast.error("Invalid email address");
			return;
		}
		if (
			signUpState.mobileNumber.length < 10 ||
			signUpState.mobileNumber.length > 12
		) {
			toast.error("Mobile number should be between 10-12 characters");
			return;
		}

		const apiResponse = await dispatch(createAccount(signUpState));
		console.log("Sign up Api Response ", apiResponse);
		if (apiResponse.payload?.data.success) {
			navigate("/auth/login");
		}
		console.log("ApiResponse is", apiResponse);
	}

	return (
		<>
			<SignUpPresentation
				handleFormSubmit={handleFormSubmit}
				handleUserInput={handleUserInput}
			/>
		</>
	);
}
export default Signup;
