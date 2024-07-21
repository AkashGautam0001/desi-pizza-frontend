import { useState } from "react";
import LoginPresentation from "./LoginPresentation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [signInState, setSignInState] = useState({
		email: "",
		password: "",
	});

	function handleUserInput(e) {
		const { name, value } = e.target;
		setSignInState({
			...signInState,
			[name]: value,
		});
	}

	async function handleFormSubmit(e) {
		e.preventDefault();

		if (!signInState.email || !signInState.password) {
			toast.error("Error ! Missing Values");
			return;
		}

		if (
			!signInState.email.includes("@") ||
			!signInState.email.includes(".")
		) {
			toast.error("Please enter valid email");
			return;
		}

		if (signInState.password.length < 8) {
			toast.error("Password should be greater than 8");
			return;
		}
		console.log(signInState);
		const apiResponse = await dispatch(login(signInState));
		console.log("Api response ", apiResponse);
		if (apiResponse.payload?.data.success) {
			navigate("/");
		}
	}

	return (
		<>
			<LoginPresentation
				handleUserInput={handleUserInput}
				handleFormSubmit={handleFormSubmit}
			/>
		</>
	);
}

export default Login;
