import React from "react";
import images from "../assets/images/3.jpg";
import classes from "./styles/Video.module.css";

export default function Video() {
	return (
		<div className={classes.video}>
			<img src={images} alt="Video Title" />
			<p>#23 React Hooks Bangla React useReducer hook Bangla</p>
			<div className={classes.qmeta}>
				<p>10 Questions</p>
				<p>Score: Not taken yet</p>
			</div>
		</div>
	);
}
