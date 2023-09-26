import React from "react";
import signupImage from "../assets/images/singup.svg";
import classes from "./styles/Illustration.module.css";

export default function Illustration() {
	return (
		<div className={classes.illustration}>
			<img src={signupImage} alt="Signup" />
		</div>
	);
}
