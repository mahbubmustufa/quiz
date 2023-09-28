import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles/Account.module.css";

export default function Account() {
	return (
		<div className={classes.account}>
			<span className="" title="Account">
				<AccountCircleIcon />
			</span>
			<Link to="/signup">Signup</Link>
			<Link to="/login">Login</Link>
			{/*
        <span className={material-icons-outlined}
            title="Logout">
            Logut
        </span>
    */}
		</div>
	);
}
