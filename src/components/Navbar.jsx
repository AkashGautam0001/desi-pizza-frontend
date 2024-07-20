import { useDispatch, useSelector } from "react-redux";
import profile from "../assets/profile.png";
import cartImage from "../assets/cartImage.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/AuthSlice";
import { useEffect } from "react";
import { getCartDetails } from "../redux/slices/CartSlice";

function Navbar() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { cartsData } = useSelector((state) => state.cart);
	const { pathname } = useLocation();

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
		<>
			<div className="sticky top-0 z-50 font-sans md:hidden block bg-black">
				<div className="flex  flex-row justify-center items-center gap-1 transition-all duration-300 ease-in-out">
					<NavLink
						to={`/menu`}
						className={
							pathname == "/menu"
								? "head-navbar-mob-active"
								: "head-navbar-mob"
						}
					>
						Menu
					</NavLink>
					<NavLink
						to={`/restaurants`}
						className={
							pathname == "/restaurants"
								? "head-navbar-mob-active"
								: "head-navbar-mob"
						}
					>
						Restaurant
					</NavLink>
					<NavLink
						to={`/bulk-ordering`}
						className={
							pathname == "/bulk-ordering"
								? "head-navbar-mob-active"
								: "head-navbar-mob"
						}
					>
						Corporate
					</NavLink>
					<NavLink
						to={`/contact`}
						className={
							pathname == "/contact"
								? "head-navbar-mob-active"
								: "head-navbar-mob"
						}
					>
						Contact
					</NavLink>
				</div>
				<hr className="h-1 w-full" />
			</div>

			<nav className="flex items-center justify-around bg-black h-16 text-neutralText font-mono border-none shadow-md">
				<div className="flex items-center justify-center cursor-pointer">
					<Link
						className="text-4xl font-serif"
						to={"/"}
					>
						<strong className="text-primary">Pizzify.</strong>{" "}
					</Link>
				</div>
				<div className="font-sans hidden md:block">
					<div className="flex gap-4 text-lg">
						<NavLink
							to={`/`}
							className={
								pathname == "/"
									? "head-navbar-active"
									: "head-navbar"
							}
						>
							Home
						</NavLink>
						<NavLink
							to={`/menu`}
							className={
								pathname == "/menu"
									? "head-navbar-active"
									: "head-navbar"
							}
						>
							Our Menu
						</NavLink>
						<NavLink
							to={`/restaurants`}
							className={
								pathname == "/restaurants"
									? "head-navbar-active"
									: "head-navbar"
							}
						>
							Restaurant
						</NavLink>
						<NavLink
							to={`/bulk-ordering`}
							className={
								pathname == "/bulk-ordering"
									? "head-navbar-active"
									: "head-navbar"
							}
						>
							Corporate
						</NavLink>
						<NavLink
							to={`/contact`}
							className={
								pathname == "/contact"
									? "head-navbar-active"
									: "head-navbar"
							}
						>
							Contact
						</NavLink>
					</div>
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
								<p className="font-sans bg-accent text-white rounded-full px-2.5 py-0.5 mx-1">
									{cartsData?.items?.length > 0 &&
										cartsData?.items?.length}
								</p>
							</div>
						)}
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
