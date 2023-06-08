import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const CartContext = createContext();

const CartContextProvider = (props) => {
	const [cartItems, setCartItems] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);
	console.log("ThESE ARE YOUR CART ITEMS FROM CARTCONTEXT", cartItems);
	console.log("money!!!!!!!!", cartTotal);

	const addItemToCart = (selectedItem) => {
		const uniqueId = uuidv4();
		const selectedItemWithUniqueId = { ...selectedItem, uniqueId };
		setCartItems([...cartItems, selectedItemWithUniqueId]);
		console.log(selectedItem);
		setCartTotal(cartTotal + selectedItem.price);
	};

	console.log(cartTotal);

	const removeItemFromCart = (selectedItem) => {
		cartItems.filter((item) => item.uniqueId !== selectedItem.uniqueId);
	};

	const clearCart = () => {
		setCartItems([]);
		setCartTotal(0);
	};

	return (
		<CartContext.Provider
			value={{
				cartTotal,
				cartItems,
				addItemToCart,
				removeItemFromCart,
				clearCart,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
