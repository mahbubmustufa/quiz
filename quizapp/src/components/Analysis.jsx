import React from "react";
import Qustion from "./Qustion";
import classes from "./styles/Analysis.module.css";

export default function Analysis() {
	return (
		<div className={classes.analysis}>
			<h1>Question Analysis</h1>
			<h4>You answerd 5 out of 10 qustion correctly</h4>
			<Qustion />
		</div>
	);
}
