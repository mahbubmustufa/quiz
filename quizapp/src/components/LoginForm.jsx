import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [error, setError] = useState();
	const [loading, setLoading] = useState();

	const { login } = useAuth();
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		//do validation

		try {
			setError("");
			setLoading(true);
			await login(email, password);
			navigate("/");
		} catch (err) {
			console.log(err);
			setLoading(false);
			setError("Failed to login");
		}
	}

	return (
		<Form onSubmit={handleSubmit} style={{ height: "330px" }}>
			<TextInput
				required
				type="text"
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Enter username or email"
			/>
			<TextInput
				onChange={(e) => setPassword(e.target.value)}
				required
				type="password"
				placeholder="Enter your password"
			/>
			<Button type="submit">
				<span>Login</span>
			</Button>
			{error && <p className="error">{error}</p>}
			<div className="info">
				You have no account yet!! Lets <Link to="/signup">Create</Link> an
				account.
			</div>
		</Form>
	);
}
