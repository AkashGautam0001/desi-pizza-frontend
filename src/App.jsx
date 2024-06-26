import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/auth/signup"
					element={<Signup />}
				/>
				<Route
					path="/auth/login"
					element={<Login />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				></Route>
			</Routes>
		</>
	);
}

export default App;
