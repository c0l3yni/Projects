import { useContext } from "react";
import ProductsContainer from "../components/ProductsContainer";
import MyModal from "../components/MyModal";
import MyButton from "../components/MyButton";
import { CartContext } from "../context/CartContext";
import { ModalContext } from "../context/ModalContext";

const CartPage = () => {
	const { cartItems, clearCart } = useContext(CartContext);
	const { open, toggleModal } = useContext(ModalContext);

	return (
		<>
			<MyButton handleClick={toggleModal} styleType="solid">
				Checkout
			</MyButton>
			<MyModal open={open} toggleModal={toggleModal} />

			<MyButton handleClick={clearCart} styleType="hollow">
				Clear Cart
			</MyButton>

			<ProductsContainer pokes={cartItems} />
		</>
	);
};

export default CartPage;
