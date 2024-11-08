import quizData from "../data/quiz";

export function countQuestion() {
  return quizData.length;
}

export function getAllQuestion() {
  return quizData;
}

export function deleteQuestion(questions, comingIndex) {
  return questions.filter((ques, index) => index !== comingIndex);
}
