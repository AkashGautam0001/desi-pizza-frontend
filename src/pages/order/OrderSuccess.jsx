import { useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
import OrderSuccessImage from "../../assets/order-success.svg";
function OrderSuccess() {
	const navigate = useNavigate();
	return (
		<Layout>
			<div className="flex  flex-col justify-center items-center bg-black min-h-screen">
				<img
					src={OrderSuccessImage}
					className="w-48 lg:w-80"
				/>

				<p className="text-lg font-semibold mt-7 text-white px-14 text-center">
					Your order has been placed successfully
				</p>

				<button
					onClick={() => navigate("/")}
					className="bg-accent text-white px-4 py-2 rounded mt-4"
				>
					Go Back Home
				</button>
			</div>
		</Layout>
	);
}
export default OrderSuccess;
