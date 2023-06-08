import { createContext, useState } from "react";
export const ModalContext = createContext();

const ModalContextProvider = (props) => {
	const [open, setOpen] = useState(false);
	const toggleModal = () => {
		open ? setOpen(false) : setOpen(true);
	};

	console.log("THIS IS FROM ModalContext", open);

	return (
		<ModalContext.Provider value={{ open, toggleModal }}>
			{props.children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;
