import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductInfoContainer from "../components/ProductInfoContainer";
import configurePokeObject from "../utils/configurePokeObj";
import API from "../utils/API";

const ProductInfoPage = () => {
	const [speciesData, setSpeciesData] = useState({});
	const location = useLocation();
	const { poke } = location.state;

	const completePokeObj = configurePokeObject(poke);

	useEffect(() => {
		let isMounted = true;
		const getSpeciesData = async () => {
			try {
				const response = await API.findSpeciesDataById(poke.id);

				const filteredLanguages = response.data.flavor_text_entries.filter(
					(item) => item.language.name === "en"
				);
				response.data.flavor_text_entries = filteredLanguages;

				if (isMounted) setSpeciesData(response.data);
			} catch (err) {
				if (err) console.error(err);
			}
		};
		getSpeciesData();
		return () => (isMounted = false);
	}, [poke.id]);

	return (
		<>
			<ProductInfoContainer poke={completePokeObj} speciesData={speciesData} />
		</>
	);
};

export default ProductInfoPage;
