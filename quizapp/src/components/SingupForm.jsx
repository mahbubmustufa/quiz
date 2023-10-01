import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SingupForm() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [agree, setAgree] = useState("");
	const [error, setError] = useState();
	const [loading, setLoading] = useState();

	const { signup } = useAuth();
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		//do validation
		if (password !== confirmPassword) {
			return setError("Password don't match!");
		}
		try {
			setError("");
			setLoading(true);
			await signup(username, email, password);
			navigate("/");
		} catch (err) {
			console.log(err);
			setLoading(false);
			setError("Failed to create an account");
		}
	}

	return (
		<div>
			<Form style={{ height: "500px" }} onSubmit={handleSubmit}>
				<TextInput
					value={username}
					required
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="Enter name"
				/>
				<TextInput
					value={email}
					required
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Enter email"
				/>
				<TextInput
					value={password}
					required
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Enter password"
				/>
				<TextInput
					value={confirmPassword}
					required
					onChange={(e) => setConfirmPassword(e.target.value)}
					type="password"
					placeholder="Confirm password"
				/>

				<Checkbox
					value={agree}
					required
					onChange={(e) => setAgree(e.target.value)}
					text=" I agree to the trems &amp; conditation"
				/>
				<Button disabled={loading} type="submit">
					<span>Submit Now</span>
				</Button>
				{error && <p className="error">{error}</p>}
				<div className="info">
					Already have an account?
					<Link to="/login">Login</Link> instead.
				</div>
			</Form>
		</div>
	);
}
