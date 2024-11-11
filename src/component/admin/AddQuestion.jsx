import React, { useState } from "react";
import quizData from "../../data/quiz";

function AddQuestion() {
  const [options, setOptions] = useState([]);
  const [option, setOption] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setOptions([...options, option]);
      setOption("");
    }
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setOption(event.target.value);
  };

  const handleRadioButtonPress = (event) => {
    setCorrectAnswer(event.target.value);
  };

  const handleFormSubmit = (event) => {
    if (event.key === "Enter") {
      return;
    }
    event.preventDefault();
    console.log(quizData);
    quizData.push({ question, options, correctAnswer });
    console.log(quizData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="question">Question: </label>
        <input
          type="text"
          name=""
          value={question}
          handleChange={(event) => {
            setQuestion(event.target.value);
          }}
        />
      </div>
      <div>
        <p className="text-blue-400">Enter the options: </p>
        {options.map((opt, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                name="option"
                value={opt}
                onKeyDown={handleRadioButtonPress}
              />
              <input
                type="text"
                value={opt}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
              />
            </div>
          );
        })}
        <div>
          <input type="radio" name="option" />
          <input
            type="text"
            name="option"
            value={option}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddQuestion;
