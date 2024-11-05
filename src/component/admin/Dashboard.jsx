import React from "react";
import { countQuestion, getAllQuestion } from "../../utils/question";

function Dashboard() {
  return (
    <div>
      <div className="flex flex-col items-center bg-purple-600 text-white text-2xl">
        <p>No of Questions : </p>
        <p>{countQuestion()}</p>
      </div>
      {getAllQuestion().map((question) => {
        return <p>{question.question}</p>;
      })}
    </div>
  );
}

export default Dashboard;
