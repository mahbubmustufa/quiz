import React from "react";
import { Link } from "react-router-dom";
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
					<div className="info">
						You have no account yet!! Lets <Link to="/signup">Create</Link> an
						account.
					</div>
				</Form>
			</div>
		</>
	);
}
