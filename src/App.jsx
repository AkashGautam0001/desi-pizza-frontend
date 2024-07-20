import "./App.css";
import { Routes, Route } from "react-router-dom";
import Denied from "./pages/Denied";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound";
import AddProduct from "./pages/admins/AddProduct";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProductDetails from "./pages/products/ProductDetails";
import CartDetails from "./pages/cart/CartDetails";
import Order from "./pages/order/Order";
import OrderSuccess from "./pages/order/OrderSuccess";
import RequireAuth from "./components/auth/RequireAuth";
import AllProducts from "./pages/AllProducts";
import Contact from "./pages/Contact.jsx";
import ResHome from "./Restaurants/ResHome.jsx";
import BookingSuccess from "./Restaurants/BookingSuccess.jsx";
import Corporate from "./pages/bulkOrder/Corporate.jsx";

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
					path="/menu"
					element={<AllProducts />}
				/>

				<Route
					path="/restaurants"
					element={<ResHome />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/bulk-ordering"
					element={<Corporate />}
				/>

				<Route element={<RequireAuth />}>
					<Route
						path="/order"
						element={<Order />}
					/>
					<Route
						path="/order/success"
						element={<OrderSuccess />}
					/>
					<Route
						path="/cart"
						element={<CartDetails />}
					/>
					<Route
						path="/restaurants/success"
						element={<BookingSuccess />}
					/>
				</Route>

				<Route
					path="/admin/addProduct"
					element={<AddProduct />}
				/>

				<Route
					path="/products/:productId"
					element={<ProductDetails />}
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
