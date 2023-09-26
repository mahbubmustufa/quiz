import React from "react";
import classes from "./styles/Nav.module.css";

export default function Nav() {
	return (
		<nav className={classes.nav}>
			<ul>
				<li>
					<a className={classes.brand} href="index.html">
						<img src=""></img>
						<h3>Learn with sumit</h3>
					</a>
				</li>
			</ul>
		</nav>
	);
}
