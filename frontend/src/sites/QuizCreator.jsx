import "../App.css";
import { useState, useEffect } from "react";

import CreateQuestionMenu from "../components/CreateQuestionMenu";

function QuizCreator() {
  let [quiz, setQuiz] = useState({});

  return (
    <>
      <div className="flex justify-center">
        <CreateQuestionMenu />
      </div>
    </>
  );
}

export default QuizCreator;
