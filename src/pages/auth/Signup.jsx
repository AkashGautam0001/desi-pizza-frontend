import { useState } from "react";
import toast from "react-hot-toast";
import SignUpPresentation from "./SignupPresentation";

// container
function Signup() {
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

	function handleFormSubmit(e) {
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
