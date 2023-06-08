import { useContext } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import formatCurrency from "../utils/formatCurrency";
import { CartContext } from "../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
}));

const CartIcon = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	const formattedTotal = formatCurrency(cartTotal);

	return (
		<Link to="cart">
			<IconButton aria-label="cart">
				<StyledBadge badgeContent={cartItems.length} color="secondary">
					<CatchingPokemonIcon fontSize="large" sx={{ color: "white" }} />
				</StyledBadge>
			</IconButton>
			<p style={{ color: "white" }}> {formattedTotal}</p>
		</Link>
	);
};

export default CartIcon;
