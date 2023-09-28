import React from "react";
import Button from "../Button";
import Form from "../Form";
import TextInput from "../TextInput";
import classes from "../styles/Login.module.css";

export default function Login() {
	return (
		<>
			<h1>Login First</h1>
			<div className={classes.column}>
				<Form className={classes.login}>
					<TextInput type="text" placeholder="Enter username or email" />
					<TextInput type="password" placeholder="Enter your password" />
					<Button>
						<span>Login</span>
					</Button>
				</Form>
			</div>
		</>
	);
}
