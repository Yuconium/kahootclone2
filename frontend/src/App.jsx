import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import WelcomeMenu from "./sites/WelcomeMenu";
import Quiz from "./sites/Quiz";
import QuizCreator from "./sites/QuizCreator";

import "./App.css";

function App() {
  const [id, setId] = useState(1);

  function goToQuiz(quizId) {}

  return (
    <>
      <div></div>
      <div className="h-screen">
        <Router>
          <Routes>
            <Route exact path="/" Component={WelcomeMenu} />
            <Route path="/quiz/:id" Component={Quiz} />
            <Route path="createQuiz" Component={QuizCreator} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
