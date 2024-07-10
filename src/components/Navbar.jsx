import { useDispatch, useSelector } from "react-redux";
import profile from "../assets/profile.png";
import cartImage from "../assets/cartImage.png";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/AuthSlice";
import { useEffect } from "react";
import { getCartDetails } from "../redux/slices/CartSlice";

function Navbar() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { cartsData } = useSelector((state) => state.cart);

	console.log("Navbar cartsData", cartsData);
	async function handleLogout(e) {
		e.preventDefault();
		dispatch(logout());
	}

	async function fetchCartDetails() {
		const res = await dispatch(getCartDetails());
		if (res?.payload?.isUnauthorized) {
			dispatch(logout());
		}
	}

	useEffect(() => {
		console.log(typeof isLoggedIn);
		if (isLoggedIn) {
			fetchCartDetails();
		}
	}, []);
	return (
		<nav className="flex items-center justify-around bg-black h-16 text-neutralText font-mono border-none shadow-md">
			<div className="flex items-center justify-center cursor-pointer">
				<h1 className="text-4xl font-serif">
					<strong className="text-primary">Pizzify.</strong>{" "}
				</h1>
			</div>
			<div className="font-sans hidden md:block">
				<ul className="flex gap-4 hover: ">
					<li className="hover:bg-primary hover:text-white py-2 px-4 rounded-md cursor-pointer transition-all duration-500 ease-in-out">
						{" "}
						<Link to={"/menu"}>Our Menu</Link>
					</li>
					<li className="hover:bg-primary p-2 py-2 px-4 rounded-md cursor-pointer transition-all duration-500 ease-in-out">
						{" "}
						<p>Restaurant Or Store</p>
					</li>
					<li className="hover:bg-primary p-2 py-2 px-4 rounded-md cursor-pointer transition-all duration-500 ease-in-out">
						Bulk Booking
					</li>
					<li className="hover:bg-primary p-2 py-2 px-4 rounded-md cursor-pointer transition-all duration-500 ease-in-out">
						Contact
					</li>
				</ul>
			</div>
			<div className="flex">
				<ul className="flex justify-center items-center space-x-4">
					<li className="hover:text-[#FF9110]">
						{isLoggedIn ? (
							<div className="flex cursor-pointer hover:border-red-50 hover:bg-white p-[1.5px] bg-white rounded-full">
								{/* <p className="font-serif text-2xl uppercase bg-primary px-4 py-2 text-white rounded-md">
									Book Your Bite
								</p> */}
								<img
									width={24}
									src={profile}
									alt="Profile"
								/>
								{/* <Link onClick={handleLogout}>Logout</Link> */}
							</div>
						) : (
							<>
								<Link to={"/auth/login"}>Login</Link>
							</>
						)}
					</li>

					{isLoggedIn && (
						<div className="flex justify-center items-center">
							<Link to={`/cart`}>
								<img
									className="font-neutralText"
									width={28}
									src={cartImage}
									alt="cartimage"
								/>
							</Link>
							<p className="font-sans">
								{cartsData?.items?.length > 0 &&
									cartsData?.items?.length}
							</p>
						</div>
					)}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
