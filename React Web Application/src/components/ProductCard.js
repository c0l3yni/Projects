import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MyButton from "./MyButton";
import TypeBadge from "./TypeBadge";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ poke }) => {
	const { addItemToCart, clearCart } = useContext(CartContext);
	const pathName = useLocation().pathname;

	const { name, sprites, types } = poke;
	const typeOne = types[0].type.name;
	const typeTwo = types[1] ? types[1].type.name : null;

	const handleAddToCart = () => addItemToCart(poke);

	const renderAddButton = () => {
		if (pathName !== "/cart") {
			return (
				<MyButton handleClick={handleAddToCart} styleType="hollow">
					Add
				</MyButton>
			);
		}
	};

	return (
		<Card sx={{ maxWidth: 345 }} className="product-card">
			<CardMedia
				component="img"
				// height="auto"
				sx={{ height: "200px", width: "auto" }}
				image={sprites.other["official-artwork"].front_default}
				alt={name}
			/>
			<CardContent style={{ paddingTop: "5px" }}>
				<Typography
					align="center"
					className="poke-name"
					gutterBottom
					variant="h5"
					component="div"
				>
					{name}
				</Typography>
				<Typography align="center" variant="body2" color="text.secondary">
					{typeTwo ? (
						<>
							<TypeBadge pokeType={typeOne}>{typeOne}</TypeBadge>
							<TypeBadge pokeType={typeTwo}>{typeTwo}</TypeBadge>
						</>
					) : (
						<TypeBadge pokeType={typeOne}>{typeOne}</TypeBadge>
					)}
				</Typography>
			</CardContent>
			<CardActions className="card-actions-flex">
				{renderAddButton()}
				<Link to={`/info/${name}`} state={{ poke }}>
					<MyButton styleType="solid">View</MyButton>
				</Link>
			</CardActions>
		</Card>
	);
};

export default ProductCard;
