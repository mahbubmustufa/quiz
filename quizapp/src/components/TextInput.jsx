import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import classes from "./styles/TextInput.module.css";

export default function TextInput(props) {
	return (
		<div className={classes.textInput}>
			<input {...props} />
			<span>
				<PersonIcon />
			</span>
		</div>
	);
}
