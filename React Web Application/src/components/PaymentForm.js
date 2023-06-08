import { useContext } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MyButton from "./MyButton";
import formatCurrency from "../utils/formatCurrency";
import { CartContext } from "../context/CartContext";

const PaymentForm = () => {
	const { clearCart, cartTotal } = useContext(CartContext);

	const onPaymentSubmit = (e) => {
		e.preventDefault();
		console.log("yeet");
		clearCart();
	};

	const formattedTotal = formatCurrency(cartTotal);

	return (
		<form onSubmit={onPaymentSubmit}>
			<TextField
				// onChange={(e) => setInputText(e.target.value)}
				id="outlined-size-small"
				fullWidth
				type="text"
				placeholder="Name"
				required
				name="name"
				// value={inputText}
				sx={{}}
				style={{ background: "white", borderRadius: "4px" }}
			/>
			<TextField
				// onChange={(e) => setInputText(e.target.value)}
				id="outlined-size-small"
				fullWidth
				type="text"
				placeholder="Address"
				required
				name="address"
				// value={inputText}
				sx={{}}
				style={{ background: "white", borderRadius: "4px" }}
			/>
			<TextField
				// onChange={(e) => setInputText(e.target.value)}
				id="outlined-size-small"
				fullWidth
				type="text"
				placeholder="Credit Card"
				required
				name="credit-card"
				// value={inputText}
				sx={{}}
				style={{ background: "white", borderRadius: "4px" }}
			/>
			<div style={{ marginTop: "10px" }} className="button-err-flex">
				<Typography id="modal-modal-title" variant="h6" component="h2">
					{formattedTotal}
				</Typography>
				<MyButton type="submit" styleType="solid">
					Submit
				</MyButton>
			</div>
		</form>
	);
};

export default PaymentForm;
