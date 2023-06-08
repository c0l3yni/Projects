import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CircularProgress from "@mui/material/CircularProgress";
import ProductsContainer from "../components/ProductsContainer";
import MyButton from "../components/MyButton";
import API from "../utils/API";

const ProductsPage = () => {
	const [pokes, setPokes] = useState([]);
	const [nextURL, setNextURL] = useState("");
	const [prevURL, setPrevURL] = useState("");

	useEffect(() => {
		let isMounted = true;
		const getPokes = async () => {
			try {
				const response = await API.findPokemon();
				if (isMounted) setNextURL(response.data.next);
				if (isMounted) setPrevURL(response.data.previous);

				for (const poke of response.data.results) {
					const pokeId = uuidv4();
					const urlArray = poke.url.split("/");
					const dexNo = urlArray[urlArray.length - 2];
					const onePoke = await API.findPokemonById(dexNo);
					const pokeObj = { ...onePoke.data, pokeId };

					if (isMounted && !pokes.length)
						setPokes((prevArray) => [...prevArray, pokeObj]);
				}
			} catch (err) {
				if (err) console.error(err);
			}
		};
		getPokes();
		return () => (isMounted = false);
	}, []);

	const handlePagination = async (e) => {
		let fillArray = [];
		const url = e.target.name === "next" ? nextURL : prevURL;

		try {
			const response = await API.handlePagination(url);
			setNextURL(response.data.next);
			setPrevURL(response.data.previous);

			for (const poke of response.data.results) {
				const pokeId = uuidv4();
				const urlArray = poke.url.split("/");
				const dexNo = urlArray[urlArray.length - 2];
				const onePoke = await API.findPokemonById(dexNo);
				const pokeObj = { ...onePoke.data, pokeId };

				fillArray = [...fillArray, pokeObj];
			}
		} catch (err) {
			if (err) console.error(err);
		}
		// set state to secondary array to replace all pokes previously in the state array.
		setPokes(fillArray);
	};

	if (pokes.length < 20) return <CircularProgress />;
	return (
		<div className="products" style={{ textAlign: "center" }}>
			<MyButton styleType="solid" name="prev" handleClick={handlePagination}>
				Previous
			</MyButton>
			<MyButton styleType="solid" name="next" handleClick={handlePagination}>
				Next
			</MyButton>
			<ProductsContainer pokes={pokes} />
		</div>
	);
};

export default ProductsPage;
