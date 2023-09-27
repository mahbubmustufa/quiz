import CloseIcon from "@mui/icons-material/Close";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import React from "react";
import images3 from "../assets/images/3.jpg";
import classes from "./styles/MiniPlayeer.module.css";

export default function MiniPlayer() {
	return (
		<div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
			<PlayCircleIcon className={classes.open} />
			<CloseIcon className={classes.close} />
			<img src={images3} alt="Play" />
			<p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
		</div>
	);
}
