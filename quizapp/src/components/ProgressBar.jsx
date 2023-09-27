import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import Button from "./Button";
import classes from "./styles/ProgressBar.module.css";

export default function ProgressBar() {
	return (
		<div className={classes.progressBar}>
			<div className={classes.backButton}>
				<span>
					<ArrowBackIcon />
				</span>
			</div>
			<div className={classes.rangeArea}>
				<div className={classes.tooltip}>24% Complete!</div>
				<div className={classes.rangeBody}>
					<div className={classes.progress} style={{ width: "20%" }}></div>
				</div>
			</div>
			<a>
				<Button className={classes.next}>
					<span>Next Question</span>
					<span>
						<ArrowForwardIcon />
					</span>
				</Button>
			</a>
		</div>
	);
}
