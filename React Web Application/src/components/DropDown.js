import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

function getStyles(name, searchParam, theme) {
	return {
		fontWeight:
			searchParam.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

const DropDown = ({ selectionArray, title, searchParam, setSearchParam }) => {
	const theme = useTheme();

	const handleChange = (e) => {
		setSearchParam(e.target.value);
	};

	return (
		<div>
			<FormControl fullWidth required>
				<Select
					displayEmpty
					style={{ background: "white", borderRadius: "4px" }}
					value={searchParam}
					onChange={handleChange}
					input={<OutlinedInput />}
					renderValue={(selected) => {
						if (selected.length === 0) {
							return <em>{title}</em>;
						}

						return selected;
					}}
					MenuProps={MenuProps}
					inputProps={{ "aria-label": "Without label" }}
				>
					<MenuItem disabled value="">
						<em>{`Select a ${title}`}</em>
					</MenuItem>
					{selectionArray.map((name) => (
						<MenuItem
							key={name}
							value={name}
							style={getStyles(name, searchParam, theme)}
						>
							{name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default DropDown;
