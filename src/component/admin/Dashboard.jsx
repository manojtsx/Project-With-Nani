import React, { useState } from "react";
import {
  countQuestion,
  getAllQuestion,
  deleteQuestion,
} from "../../utils/question";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(getAllQuestion());

  function deleteQues(index) {
    setQuestions(deleteQuestion(questions, index));
  }

  return (
    <div className="p-6">
      <div className="flex flex-col items-center bg-purple-600 text-white text-2xl p-4 rounded-lg shadow-md mb-6">
        <p className="mb-2">Number of Questions:</p>
        <p className="text-4xl font-bold">{countQuestion()}</p>
      </div>
      <div className="flex justify-between my-4">
        <h1 className="text-2xl underline">Questions</h1>
        <button className="bg-blue-500 text-white px-4 py-2 border rounded-md flex items-center gap-1" onClick={()=>navigate('/add')}><AddIcon/><span>Add Question</span></button>
      </div>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-green-400 text-left">
            <th className="py-3 px-4">SN</th>
            <th className="py-3 px-4">Question</th>
            <th className="py-3 px-4">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr
              key={index}
              className={`${
                (index + 1) % 2 === 0 ? "bg-blue-500" : "bg-blue-600"
              } text-white hover:bg-blue-700 transition-colors duration-200`}
            >
              <td className="py-3 px-4">{index + 1}</td>
              <td className="py-3 px-4">{question.question}</td>
              <td className="py-3 px-4 flex space-x-2">
                <EditIcon onClick={()=> navigate(`/edit/${index}`)} className="cursor-pointer hover:text-yellow-300" />
                <DeleteIcon
                  onClick={() => deleteQues(index)}
                  className="cursor-pointer hover:text-red-300"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;