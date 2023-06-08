import { Link } from "react-router-dom";
import MyButton from "../components/MyButton";

const Home = () => {
	return (
		<div
			className="home-flex"
			style={{
				justifyContent: "space-around",
				marginTop: "50px",
				background: "white",
				width: "100%",
				borderRadius: "4px",
			}}
		>
			<img
				style={{ maxWidth: "300px", borderRadius: "4px" }}
				src="images/giovanni_redesign.jpg"
				alt="giovanni"
			/>
			<div style={{ display: "flex", flexFlow: "column", justifyContent: "space-around" }}>
				<img style={{ maxHeight: "350px" }} alt="rocket-logo" src="images/r-logo.png" />

				<MyButton styleType="hollow">
					<Link to="products" style={{ width: "100% !important" }}>
						Shop Black Market
					</Link>
				</MyButton>
			</div>
		</div>
	);
};

export default Home;
