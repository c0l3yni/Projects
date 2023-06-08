import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const RadioButton = ({ value, label, handleClick }) => {
	return (
		<FormControlLabel
			value={value}
			control={
				<Radio
					color="secondary"
					sx={{
						color: "white",
						"&.Mui-checked": {
							color: "white",
						},
					}}
				/>
			}
			label={label}
		/>
	);
};

export default RadioButton;
