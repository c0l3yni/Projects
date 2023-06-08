import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductInfoPage from "./pages/ProductInfoPage";
import CartPage from "./pages/CartPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import CartContextProvider from "./context/CartContext";
import ModalContextProvider from "./context/ModalContext";
import SearchContainer from "./components/SearchContainer";
import CartIcon from "./components/CartIcon";
import "./stylesheets/App.css";

const App = () => {
	return (
		<CartContextProvider>
			<ModalContextProvider>
				{/* <nav style={{ background: "white", height: "auto" }}> */}
				<nav
					className="r-logo-flex"
					style={{ textAlign: "center", justifyContent: "space-around" }}
				>
					<Link to="/">
						<img
							className=""
							style={{ maxHeight: "60px" }}
							alt="rocket-logo"
							src="images/r-logo.png"
						/>
					</Link>

					<CartIcon />
				</nav>

				<SearchContainer />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/products" element={<ProductsPage />} />
					<Route path="/info/:id" element={<ProductInfoPage />} />
					<Route exact path="/cart" element={<CartPage />} />

					<Route path="/products/:id" element={<SearchResultsPage />} />
				</Routes>
			</ModalContextProvider>
		</CartContextProvider>
	);
};

export default App;
