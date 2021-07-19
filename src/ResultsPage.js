import React from "react";

function ResultsPage({ onReset }) {
	return (
		<div>
			<h3>Game Over</h3>
			<button onClick={onReset}>Try Again</button>
		</div>
	);
}

export default ResultsPage;
