import React from "react";
import SingupForm from "../singupForm";
import classes from "../styles/Singup.module.css";

export default function Signup() {
	return (
		<>
			<h1>Create an account</h1>
			<div className={classes.column}>
				<SingupForm />
			</div>
		</>
	);
}
