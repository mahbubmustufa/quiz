import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "./styles/Account.module.css";

export default function Account() {
	const { currentUser, logout } = useAuth();
	return (
		<div className={classes.account}>
			{currentUser ? (
				<>
					<AccountCircleIcon />

					<span>{currentUser.displayName}</span>
					<span onClick={logout}> Logout </span>
				</>
			) : (
				<>
					<Link to="/signup">Signup</Link>
					<Link to="/login">Login</Link>
				</>
			)}
		</div>
	);
}
