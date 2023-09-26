import React from "react";
import logo from "../assets/images/logo-bg.png";

import Account from "./Account";
import classes from "./styles/Nav.module.css";

export default function Nav() {
	return (
		<nav className={classes.nav}>
			<ul>
				<li>
					<a className={classes.brand} href="index.html">
						<img src={logo}></img>
						<h3>Learn with sumit</h3>
					</a>
				</li>
			</ul>
			<Account />
		</nav>
	);
}
