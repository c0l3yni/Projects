import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ProductsContainer from "../components/ProductsContainer";

import API from "../utils/API";

const AltProductsPage = () => {
	const location = useLocation();

	const [pokes, setPokes] = useState([]);

	useEffect(() => {
		const replacePokesArray = async () => {
			let fillArray = [];
			try {
				for (const poke of location.state.altPokes) {
					const pokeId = uuidv4();
					const urlArray = poke.pokemon.url.split("/");
					const dexNo = urlArray[urlArray.length - 2];
					const onePoke = await API.findPokemonById(dexNo);
					const pokeObj = { ...onePoke.data, pokeId };

					fillArray = [...fillArray, pokeObj];
				}
			} catch (err) {
				if (err) console.error(err);
			}
			setPokes(fillArray);
		};
		replacePokesArray();
	}, [location.state.altPokes, pokes.length]);

	return (
		<>
			<ProductsContainer pokes={pokes} />
		</>
	);
};

export default AltProductsPage;
