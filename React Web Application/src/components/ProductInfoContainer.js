import { useContext } from "react";
import StatsTable from "./StatsTable";
import Typography from "@mui/material/Typography";
import TypeBadge from "./TypeBadge";
import MyButton from "./MyButton";
import MyModal from "./MyModal";
import formatCurrency from "../utils/formatCurrency";
import { CartContext } from "../context/CartContext";
import { ModalContext } from "../context/ModalContext";

const ProductInfoContainer = ({ poke, speciesData }) => {
	const { addItemToCart } = useContext(CartContext);
	const { open, toggleModal } = useContext(ModalContext);

	const { id: dexNo, name, types, price, quantity, statsOrganized: stats, statTotal } = poke;

	const typeOne = types[0].type.name;
	const typeTwo = types[1] ? types[1].type.name : null;
	const image = poke.sprites.other["official-artwork"].front_default;
	const formattedPrice = formatCurrency(price);

	const handleAddToCart = () => {
		quantity ? addItemToCart(poke) : toggleModal();
	};

	return (
		<>
			<Typography align="center" variant="h6">
				<p
					style={{ fontWeight: "bold", marginBottom: "4px" }}
					className="product-info-name"
				>
					{name}
				</p>
			</Typography>
			<div className="product-info-flex">
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						background: "#333",
						width: "100%",
						color: "white",
						border: "3px solid white",
						borderRadius: "4px",
						padding: "10px 10px",
					}}
				>
					<p
						style={{ fontSize: "1.5rem", margin: "0", padding: "0" }}
						className="product-info-name"
					>
						No. {dexNo}
					</p>
					<Typography variant="body2" color="text.secondary">
						{typeTwo ? (
							<>
								<TypeBadge pokeType={typeOne}>{typeOne}</TypeBadge>
								<TypeBadge pokeType={typeTwo}>{typeTwo}</TypeBadge>
							</>
						) : (
							<TypeBadge pokeType={typeOne}>{typeOne}</TypeBadge>
						)}
					</Typography>
				</div>

				<img className="product-info-image" src={image} alt={name} />

				<div
					style={{
						display: "flex",
						justifyContent: "space-around",
						alignItems: "center",
						width: "60%",
						fontWeight: "bold",
						padding: "10px 10px",
					}}
				>
					<Typography align="center" variant="body" color="text">
						{formattedPrice}
					</Typography>
					<Typography align="center" variant="body" color="text">
						{quantity ? `${quantity} Available` : "Unavailable"}
					</Typography>
				</div>

				<MyButton styleType="hollow" handleClick={handleAddToCart}>
					Add to cart
				</MyButton>
				<MyModal open={open} toggleModal={toggleModal} />
				<Typography
					align="center"
					style={{ width: "60%", marginTop: "30px", marginBottom: "15px" }}
					variant="body"
					color="text"
				>
					{speciesData.flavor_text_entries
						? speciesData.flavor_text_entries[0].flavor_text
						: null}
				</Typography>
				<StatsTable stats={stats} statTotal={statTotal} />
			</div>
		</>
	);
};

export default ProductInfoContainer;
