import HelpIcon from "@mui/icons-material/Help";
import React from "react";
import Answers from "./Answers";
import classes from "./styles/Qustion.module.css";

export default function Qustion() {
	return (
		<div className={classes.qustion}>
			<div className={classes.qtitle}>
				<HelpIcon />
				Hear goes the qustion from Learn with sumit?
			</div>
			<Answers />
		</div>
	);
}
