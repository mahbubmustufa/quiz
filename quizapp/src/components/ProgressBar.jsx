import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React from "react";
import classes from "./styles/ProgressBar.module.css";

export default function ProgressBar() {
	return (
		<div className={classes}>
			<div className={classes.backButton}>
				<span>
					<ArrowBackIcon />
				</span>
			</div>
			<div className={classes.rangeArea}>
				<div className={classes.tooltip}>24% Complete!</div>
				<div className={classes.rangeBody}>
					<div className={classes.backButton}>
						<div className={classes.progress} style={{ width: "20%" }}></div>
					</div>
				</div>
				<a>
					<button className={classes.next}>
						<span>Next Question</span>
						<span>
							<ArrowRightAltIcon />
						</span>
					</button>
				</a>
			</div>
		</div>
	);
}
