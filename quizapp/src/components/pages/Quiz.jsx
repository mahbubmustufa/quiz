import React from "react";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

export default function Quiz() {
	return (
		<>
			<h1>Pick three of your favorite star wars Flims</h1>
			<f4>Question can have multiple answers</f4>
			<Answers />
			<ProgressBar />
			<MiniPlayer />
		</>
	);
}
