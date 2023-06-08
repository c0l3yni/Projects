import TextField from "@mui/material/TextField";

const SearchBar = ({ inputText, setInputText, isError, isAnimated, setIsAnimated }) => {
	return (
		<>
			<TextField
				onChange={(e) => setInputText(e.target.value)}
				id="outlined-size-small"
				fullWidth
				type="text"
				placeholder="Search by name"
				required
				name="search"
				value={inputText}
				sx={{}}
				style={{ background: "white", borderRadius: "4px" }}
			/>
		</>
	);
};

export default SearchBar;
