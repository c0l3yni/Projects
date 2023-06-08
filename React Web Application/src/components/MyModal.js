import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PaymentForm from "./PaymentForm";
import { CartContext } from "../context/CartContext";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "#333",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const MyModal = ({ open, toggleModal }) => {
	const { cartItems, cartTotal } = useContext(CartContext);
	const pathName = useLocation().pathname;

	const renderModalContent = () => {
		if (pathName !== "/cart") {
			return (
				<Typography align="center" id="modal-modal-title" variant="h6" component="h2">
					Temporarily out of stock.
				</Typography>
			);
		} else if (pathName === "/cart" && !cartItems.length) {
			return (
				<Typography align="center" id="modal-modal-title" variant="h6" component="h2">
					Your cart is empty.
				</Typography>
			);
		} else return <PaymentForm />;
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={toggleModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>{renderModalContent()}</Box>
			</Modal>
		</div>
	);
};

export default MyModal;
