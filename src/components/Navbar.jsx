import { useDispatch, useSelector } from "react-redux";
import Pizzalogo from "../assets/images/pizza1.png";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/AuthSlice";
import { useEffect } from "react";
import { getCartDetails } from "../redux/slices/CartSlice";

function Navbar() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { cartsData } = useSelector((state) => state.cart);

	console.log(cartsData);
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
		<nav className="flex items-center justify-around h-16 text-[#6B72200] font-mono border-none shadow-md">
			<div className="flex items-center justify-center">
				<p>Pizza App</p>
				<img
					onClick={() => navigate("/")}
					src={Pizzalogo}
					alt="Pizza logo"
				/>
			</div>
			<div className="hidden md:block">
				<ul className="flex gap-4">
					<li className="hover:text-[#FF9110]">
						{" "}
						<p>Menu </p>
					</li>
					<li className="hover:text-[#FF9110]">
						{" "}
						<p>Services </p>
					</li>
					<li className="hover:text-[#FF9110]"> About </li>
				</ul>
			</div>
			<div className="flex space-x-4">
				<ul className="flex">
					<li className="hover:text-[#FF9110]">
						{isLoggedIn ? (
							<Link onClick={handleLogout}>Logout</Link>
						) : (
							<Link to={"/auth/login"}>Login</Link>
						)}
					</li>

					{isLoggedIn && (
						<Link to={`/cart`}>
							<li className="flex space-x-3">
								<svg
									width="8%"
									height="8%"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5.00014 14H18.1359C19.1487 14 19.6551 14 20.0582 13.8112C20.4134 13.6448 20.7118 13.3777 20.9163 13.0432C21.1485 12.6633 21.2044 12.16 21.3163 11.1534L21.9013 5.88835C21.9355 5.58088 21.9525 5.42715 21.9031 5.30816C21.8597 5.20366 21.7821 5.11697 21.683 5.06228C21.5702 5 21.4155 5 21.1062 5H4.50014M2 2H3.24844C3.51306 2 3.64537 2 3.74889 2.05032C3.84002 2.09463 3.91554 2.16557 3.96544 2.25376C4.02212 2.35394 4.03037 2.48599 4.04688 2.7501L4.95312 17.2499C4.96963 17.514 4.97788 17.6461 5.03456 17.7462C5.08446 17.8344 5.15998 17.9054 5.25111 17.9497C5.35463 18 5.48694 18 5.75156 18H19M7.5 21.5H7.51M16.5 21.5H16.51M8 21.5C8 21.7761 7.77614 22 7.5 22C7.22386 22 7 21.7761 7 21.5C7 21.2239 7.22386 21 7.5 21C7.77614 21 8 21.2239 8 21.5ZM17 21.5C17 21.7761 16.7761 22 16.5 22C16.2239 22 16 21.7761 16 21.5C16 21.2239 16.2239 21 16.5 21C16.7761 21 17 21.2239 17 21.5Z"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<p>{cartsData?.items?.length}</p>
							</li>
						</Link>
					)}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
