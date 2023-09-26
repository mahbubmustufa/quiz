import Form from "Form";
import Illustration from "illustration";
import React from "react";
import classes from "../styles/Singup.module.css";

export default function Signup() {
	return (
		<>
			<h1>Create ab account</h1>
			<div className={classes.column}>
				<Illustration />
				<Form className={`${classes.signup} form`} />
			</div>
		</>
	);
}
