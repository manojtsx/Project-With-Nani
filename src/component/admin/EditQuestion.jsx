import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import quizData from '../../data/quiz';

function EditQuestion() {
    const { id } = useParams();
    const [question, setQuestion] = React.useState("");
    const [options, setOptions] = React.useState([]);
    const [option, setOption] = React.useState("");
    const [correctAnswer, setCorrectAnswer] = React.useState("");
    
    useEffect(()=>{
        quizData.filter((data, index)=>{
            if(index == id){
                setQuestion(data.question);
                setOptions(data.choices);
                setCorrectAnswer(data.correctAnswer);
            }
        })
    })
    const handleChange =  (event) => {
    }

    const handleKeyPress = (event) => {
    }

    const handleRadioButtonPress = (event) => {
    }



  return (
    <form
    //   onSubmit={handleFormSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md"
    >
      <div className="mb-4">
        <label
          htmlFor="question"
          className="block text-gray-700 font-bold mb-2"
        >
          Question:
        </label>
        <input
          type="text"
          name="question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <p className="text-blue-400 font-bold mb-2">Enter the options:</p>
        {options.map((opt, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="radio"
              name="option"
              value={opt}
              onClick={handleRadioButtonPress}
              className="mr-2"
            />
            <input
              type="text"
              value={opt}
              onChange={handleChange}
              onKeyDown={handleKeyPress}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}
        <div className="flex items-center mb-2">
          <input type="radio" name="option" className="mr-2" />
          <input
            type="text"
            name="option"
            value={option}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full my-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Add
      </button>
      <button
        onClick={() => navigate("/dashboard")}
        className="w-full my-4 bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Go To Dashboard
      </button>
    </form>
  )
}

export default EditQuestion