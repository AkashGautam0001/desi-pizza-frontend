import "./App.css";
import Denied from "./pages/Denied";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AddProduct from "./pages/admins/AddProduct";
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
					path="/denied"
					element={<Denied />}
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
					path="/admin/addProduct"
					element={<AddProduct />}
				/>

				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
		</>
	);
}

export default App;
