import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import Account from "./Account";
import classes from "./styles/Nav.module.css";

export default function Nav() {
	return (
		<nav className={classes.nav}>
			<ul>
				<li>
					<Link to="/" className={classes.brand}>
						<img src={logo}></img>
						<h3>Learn with sumit</h3>
					</Link>
				</li>
			</ul>
			<Account />
		</nav>
	);
}
