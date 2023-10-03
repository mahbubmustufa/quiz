import React from "react";
import LoginForm from "../LoginForm";
import classes from "../styles/Login.module.css";

export default function Login() {
	return (
		<>
			<h1>Login First</h1>
			<div className={classes.column}>
				<LoginForm />
			</div>
		</>
	);
}
