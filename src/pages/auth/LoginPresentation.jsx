import { Link } from "react-router-dom";

function LoginPresentation({ handleUserInput, handleFormSubmit }) {
	return (
		<>
			<section className="text-gray-600 body-font bg-login-image ">
				<div className="flex items-center h-screen px-4 py-6">
					<div className="hidden md:block md:ml-60 md:text-center">
						<h1 className="md:text-9xl px-4 font-serif text-neutralText md:backdrop-blur-xl ">
							PIZZIFY
						</h1>
						<p className="text-xl font-bold text-black mb-3 md:backdrop-blur-xl">
							Delicious and Yummy pizza delivered fast & fresh
						</p>
					</div>

					<form className="flex flex-col w-full p-8 mt-10 bg-transparent backdrop-blur-md rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
						<h2 className="mb-5 text-xl font-bold text-black title-font">
							Sign In
						</h2>

						<div className="relative mb-4">
							<label
								htmlFor="email"
								className="text-md leading-7 text-gray-800 font-bold"
							>
								Email <span className="text-red-500">*</span>
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								onChange={handleUserInput}
								placeholder="John@example.com"
								className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none"
							/>
						</div>

						<div className="relative mb-4">
							<label
								htmlFor="password"
								className="text-md leading-7 text-gray-800 font-bold"
							>
								Password <span className="text-red-500">*</span>
							</label>
							<input
								type="password"
								id="password"
								name="password"
								required
								onChange={handleUserInput}
								placeholder="Enter your password"
								className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none"
							/>
						</div>

						<button
							type="submit"
							onClick={handleFormSubmit}
							className="w-full px-8 py-2 text-lg text-white bg-primary border-0 rounded focus:outline-none hover:bg-black transition-all duration-300 ease-in-out"
						>
							Sign In
						</button>

						<p className="mt-3 text-lg text-gray-800">
							Do'nt have an account ?
							<Link
								to="/auth/signup"
								className="text-primary font-bold hover:underline underline-offset-4"
							>
								{" "}
								Sign Up
							</Link>
						</p>
					</form>
				</div>
			</section>
		</>
	);
}

export default LoginPresentation;
