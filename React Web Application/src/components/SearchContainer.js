import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";
import RadioButtonsGroup from "./RadioButtonsGroup";
import MyButton from "./MyButton";
import API from "../utils/API";

const SearchContainer = () => {
	const [isError, setIsError] = useState(false);
	const [isAnimated, setIsAnimated] = useState("");
	const [searchMethod, setSearchMethod] = useState("name");
	const [searchInputText, setSearchInputText] = useState("");
	const [genSearchParam, setGenSearchParam] = useState("");
	const [typeSearchParam, setTypeSearchParam] = useState("");
	const [altPokes, setAltPokes] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		setAltPokes([]);
	}, []);

	const errorToggle = isError ? "visible" : "hidden";
	const flexJustifyFix = searchMethod === "name" ? "button-err-flex" : "card-actions-flex";

	const pokeTypesArray = [
		"bug",
		"dark",
		"dragon",
		"electric",
		"fairy",
		"fighting",
		"fire",
		"flying",
		"grass",
		"ground",
		"ice",
		"normal",
		"poison",
		"psychic",
		"rock",
		"steel",
		"water",
	];

	const generationsArray = [
		"Gen 1",
		"Gen 2",
		"Gen 3",
		"Gen 4",
		"Gen 5",
		"Gen 6",
		"Gen 7",
		"Gen 8",
	];

	const handleNameSearch = async () => {
		try {
			const response = await API.findPokemonById(searchInputText.toLowerCase().trim());
			const poke = response.data;
			setSearchInputText("");
			setIsError(false);
			navigate(`/info/${searchInputText}`, { state: { poke } });
		} catch (err) {
			if (err) {
				setIsError(true);
				setIsAnimated("animate-error");
				setSearchInputText("");
				console.error("ERR-OR", err);
			}
		}
	};
	const handleTypeSearch = async () => {
		try {
			const response = await API.findPokemonByType(typeSearchParam);
			setAltPokes(response.data.pokemon);
			navigate(`/products/${typeSearchParam}`, { state: { altPokes } });
		} catch (err) {
			if (err) {
				console.error(err);
			}
		}
	};

	const handleGenerationSearch = () => {};

	const onFormSubmit = (e) => {
		e.preventDefault();
		if (searchMethod === "name") handleNameSearch();
		if (searchMethod === "type") handleTypeSearch();
	};

	const renderSearchComponent = () => {
		if (searchMethod === "name")
			return (
				<SearchBar
					isAnimated={isAnimated}
					setIsAnimated={setIsAnimated}
					isError={isError}
					inputText={searchInputText}
					setInputText={setSearchInputText}
				/>
			);
		if (searchMethod === "type")
			return (
				<DropDown
					title="Type"
					selectionArray={pokeTypesArray}
					searchParam={typeSearchParam}
					setSearchParam={setTypeSearchParam}
				/>
			);
		if (searchMethod === "generation")
			return (
				<DropDown
					title="Generation"
					selectionArray={generationsArray}
					searchParam={genSearchParam}
					setSearchParam={setGenSearchParam}
				/>
			);
	};

	return (
		<div className="search-container-flex">
			<RadioButtonsGroup searchMethod={searchMethod} setSearchMethod={setSearchMethod} />
			<form onSubmit={onFormSubmit} style={{ width: "100%", margin: "auto" }}>
				{renderSearchComponent()}
				<div className={flexJustifyFix}>
					{searchMethod === "name" ? (
						<p
							className={isAnimated}
							onAnimationEnd={() => setIsAnimated("")}
							style={{
								color: "red",
								visibility: errorToggle,
								marginTop: "15px",
								marginBottom: "0",
							}}
						>
							Pokemon not found
						</p>
					) : null}
					<MyButton type="submit" styleType="solid">
						Go
					</MyButton>
				</div>
			</form>
		</div>
	);
};

export default SearchContainer;
