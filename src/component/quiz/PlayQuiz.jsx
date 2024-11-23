import React, { useState } from "react";
import quizData from "../../data/quiz";

function PlayQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checkedOption, setCheckedOption] = useState("");
  const [score, setScore] = useState(0);
  const checkAnswer = () => {
    if(checkedOption === ""){
        window.alert("You haven't selected a option.")
        return;
    }
    if (quizData[currentIndex].correctAnswer === checkedOption) {
      setScore(score + 1);
    }
    setCurrentIndex(currentIndex + 1);
    setCheckedOption("");
    if (currentIndex === quizData.length - 1) {
      window.alert("Your score is " + score);
      location.reload();
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Play Quiz</h1>
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
        <div className="mb-4">
          <h2 className="text-lg font-bold">
            {quizData[currentIndex].question}
          </h2>
        </div>
        <div className="mb-4">
          <ul>
            {quizData[currentIndex].choices.map((choice, index) => (
              <li key={index} className="mb-2">
                <label>
                  <input
                    type="radio"
                    name="choice"
                    value={choice}
                    onChange={(event) => setCheckedOption(event.target.value)}
                    checked={checkedOption === choice}
                  />
                  {choice}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentIndex(currentIndex - 1)}
            disabled={currentIndex === 0}
            hidden={currentIndex === 0}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Previous
          </button>
          <button
            onClick={checkAnswer}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            {currentIndex === quizData.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayQuiz;
