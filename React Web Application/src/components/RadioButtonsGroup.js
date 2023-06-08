import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import RadioButton from "./RadioButton";

const RadioButtonsGroup = ({ searchMethod, setSearchMethod }) => {
	const onRadioClick = (e) => {
		setSearchMethod(e.target.value);
	};
	return (
		<FormControl>
			<RadioGroup
				row
				aria-labelledby="demo-row-radio-buttons-group-label"
				name="row-radio-buttons-group"
				value={searchMethod}
				onChange={onRadioClick}
				defaultValue="name"
			>
				<RadioButton value="name" label="Name" handleClick={onRadioClick} />
				<RadioButton value="type" label="Type" handleClick={onRadioClick} />
				<RadioButton value="generation" label="Generation" handleClick={onRadioClick} />
			</RadioGroup>
		</FormControl>
	);
};

export default RadioButtonsGroup;
