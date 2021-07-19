import React, { useState } from "react";
import CurrentQuestion from "./CurrentQuestion";
import ResultsPage from "./ResultsPage";

import "./App.css";

// create state
// state will be an array of question objects
// each question will have a few properties:
// questionNumber, question, possibleAnswers (array), correctAnswer

const questionsArr = [
	{
		questionNumber: 1,
		question: "Where does Dwight Schrute live?",
		possibleAnswers: ["Kansas", "Schrute Farm", "Milwaukee", "Pumpkin Farm"],
		answer: "Schrute Farm",
	},
	{
		questionNumber: 2,
		question: "Where did Ryan come from before Dunder Mifflin?",
		possibleAnswers: [
			"Dunder Mifflin Training Program",
			"Business School",
			"Temp Agency",
			"Google",
		],
		answer: "Temp Agency",
	},
	{
		questionNumber: 3,
		question: "Who is Jim Halpers wife?",
		possibleAnswers: ["Karen", "Pam", "Phyllis", "Michael"],
		answer: "Pam",
	},
	{
		questionNumber: 4,
		question: "Where is the Dunder Mifflin Pennsylvania branch located",
		possibleAnswers: ["Scranton", "Pittsburgh", "Philadelphia", "Harrison"],
		answer: "Scranton",
	},
	{
		questionNumber: 5,
		question: "What does Dwight grow on his farm?",
		possibleAnswers: ["Oranges", "Beets", "Celery", "Tomatoes"],
		answer: "Beets",
	},
];

// need a currentQuestion component
// currentQuestion component will need the object of the currentQuestion passed to it
// will also need a button that that the user can click to submit a response
// need a resultsPage component

// get the value the user selected after submit button is called
// pass the value into a method called checkIfAnswerCorrect
// checkIfAnswerCorrect will compare the value obtained by submission to the correct answer
// if true, call all 'update' methods
// if false, call all 'update' methods except the updateTotalCorrect
// after that functionality is in place, need to handle final results page
// set conditional rendering on the 'scoring' div
// currentQuestionNumber < questionsArr.length
// else
// render the resultsPage
// create a new component which is a reset button, onClick method that will reset all of the data

function App() {
	let [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
	let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	let [totalCorrect, setTotalCorrect] = useState(0);

	// update the total # correct
	const updateTotalCorrect = () => {
		setTotalCorrect(totalCorrect += 1);
	};

	// update current question number
	const updateCurrentQuestionIndex = () => {
		setCurrentQuestionIndex(currentQuestionIndex += 1);
	};

	const updateCurrentQuestionNumber = () => {
		setCurrentQuestionNumber(currentQuestionNumber += 1);
	};

	const handleButtonSubmit = (e) => {
		e.preventDefault();

		// get the current correct answer
		const correctAnswer = questionsArr[currentQuestionIndex].answer;
		const guessedAnswer = e.target.answers.value;

		if (correctAnswer === guessedAnswer) {
			updateTotalCorrect();
			updateCurrentQuestionNumber();
			updateCurrentQuestionIndex();
		} else {
			updateCurrentQuestionNumber();
			updateCurrentQuestionIndex();
		}
	};

  const handleReset = () => {
    setTotalCorrect(totalCorrect = 0)
    setCurrentQuestionIndex(currentQuestionIndex = 0);
    setCurrentQuestionNumber(currentQuestionNumber = 1);
  }


	return (
		<div className="App">
			<h1>React Quiz App</h1>
			<section className="scoring">
				<div>
					<p>
						Question # {currentQuestionNumber} out of {questionsArr.length}{" "}
						total questions
					</p>
				</div>
				<div>
					Total Correct: <span>{totalCorrect}</span>
				</div>
			</section>

      {currentQuestionIndex < questionsArr.length ? 
			<section className="current_question">
				<CurrentQuestion
					onButtonSubmit={handleButtonSubmit}
					thisQuestion={questionsArr[currentQuestionIndex]}
				></CurrentQuestion>
			</section>

 : <ResultsPage onReset={handleReset}/> }
		</div>
	);
}

export default App;
