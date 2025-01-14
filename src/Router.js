import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payments";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
	"pk_test_51PKNUGIuk8IDsJIX39CjDVKeCKa4QxWPY3wFpIl8uf4WkTNpplMami7uc3yDIQYH5zEnqgSOsarYKVKsXHi29n8z006B1WB98b"
);

function Routing() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/auth" element={<Auth />} />
				<Route
					path="/payments"
					element={
						<ProtectedRoute
							message={"you must log in to pay"}
							redirect={"/payments"}
						>
							<Elements stripe={stripePromise}>
								<Payment />
							</Elements>
						</ProtectedRoute>
					}
				/>

				<Route
					path="/orders"
					element={
						<ProtectedRoute
							message={"you must log in to access orders"}
							redirect={"/orders"}
						>
							<Orders />
						</ProtectedRoute>
					}
				/>
				<Route path="/cart" element={<Cart />} />
				<Route path="/category/:categoryName" element={<Results />} />
				<Route path="/products/:productId" element={<ProductDetail />} />
			</Routes>
		</Router>
	);
}

export default Routing;
