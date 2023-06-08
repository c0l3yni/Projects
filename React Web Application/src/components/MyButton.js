import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const solid = {
	background: "#990000",
	fontWeight: "bold",
	border: "2px solid",
	borderColor: "#990000",
	fontSize: "14px",
	"&:hover": {
		border: "2px solid",
		borderColor: "#64539b",
		background: "#64539b",
	},
};

const hollow = {
	color: "#990000",
	fontWeight: "bold",
	border: "2px solid",
	padding: "4px 10px",
	fontSize: "14px",
	"&:hover": {
		border: "2px solid",
		borderColor: "#64539b",
		color: "#64539b",
	},
};

const MyButton = ({ children, styleType, handleClick, name, type }) => {
	const styleSelector = styleType === "solid" ? solid : hollow;
	const variantSelector = styleType === "solid" ? "contained" : "outlined";
	const StyledButton = styled(Button)(styleSelector);

	return (
		<StyledButton
			name={name}
			color="secondary"
			size="small"
			variant={variantSelector}
			onClick={handleClick}
			type={type}
		>
			{children}
		</StyledButton>
	);
};

export default MyButton;
