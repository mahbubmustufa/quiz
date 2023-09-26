import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import classes from "./styles/Account.module.css";

export default function Account() {
	return (
		<div className={classes.account}>
			<span className="" title="Account">
				<AccountCircleIcon />
			</span>
			<a href="signup.html">Signup</a>
			{/*
        <span className={material-icons-outlined}
            title="Logout">
            Logut
        </span>
    */}
		</div>
	);
}
