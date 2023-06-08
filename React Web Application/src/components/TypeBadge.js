import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const typeColors = {
	bug: "#B1C12E",
	dark: "#4F3A2D",
	dragon: "#755EDF",
	electric: "#FCBC17",
	fairy: "#F4B1F4",
	fighting: "#BB5544",
	fire: "#E73B0C",
	flying: "#A3B3F7",
	ghost: "#6060B2",
	grass: "#74C236",
	ground: "#D3B357",
	ice: "#A3E7FD",
	normal: "#C8C4BC",
	poison: "#934594",
	psychic: "#ED4882",
	rock: "#B9A156",
	steel: "#B5B5C3",
	water: "#3295F6",
};

let color = "";

const TypeBadge = ({ children, pokeType }) => {
	const badgeStyle = {
		background: `${color} !important`,
		color: "white !important",
		fontWeight: "bold",
		border: "none ",
		outline: "none",
		fontSize: "12px",
		borderRadius: "500px",
		padding: "2px 10px",
		minWidth: "83px",
	};

	const StyledBadge = styled(Button)(badgeStyle);

	const setTypeColor = (typeProp) => {
		color = typeColors[typeProp];
	};

	setTypeColor(pokeType);

	return (
		<StyledBadge style={{ marginLeft: "auto" }} size="small" variant="solid" disabled>
			{children}
		</StyledBadge>
	);
};

export default TypeBadge;
