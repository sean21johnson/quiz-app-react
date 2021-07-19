import React from "react";

function CurrentQuestion({ thisQuestion, onButtonSubmit }) {

	return (
		<>
			<div>
				<h2>Current Question</h2>
			</div>

			<form className="form" onSubmit={onButtonSubmit}>
				{thisQuestion.possibleAnswers.map((answer, i) => (
					<div key={i}>
						<input type="radio" id={answer} name="answers" value={answer}></input>
                        <label htmlFor={answer}>{answer}</label>
					</div>
				))}

                <button type="submit">Submit</button>
			</form>
		</>
	);
}

export default CurrentQuestion;
