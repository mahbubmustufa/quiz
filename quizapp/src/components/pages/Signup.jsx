import React from "react";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import classes from "../styles/Singup.module.css";

export default function Signup() {
	return (
		<>
			<h1>Create ab account</h1>
			<div className={classes.column}>
				<Illustration />
				<Form className={`${classes.signup}`}>
					<TextInput type="text" placeholder="Enter name" />
					<TextInput type="email" placeholder="Enter email" />
					<TextInput type="password" placeholder="Enter password" />
					<TextInput type="password" placeholder="Confirm password" />

					<Checkbox text="I agree to the trems &amp; conditation" />
					<Button>Submit Now</Button>
					<div className="info">
						Already have an account? <a href="login.html">Login</a> instead.
					</div>
				</Form>
			</div>
		</>
	);
}
