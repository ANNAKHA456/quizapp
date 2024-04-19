import React, { useState } from "react";
import "./QuizWrapper.css";
import LandingPage from "./LandingPage";
import QuestionsPage from "./QuestionsPage";

function QuizWrapper() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <div>
      {isQuizStarted ? (
        <QuestionsPage setIsQuizStarted={setIsQuizStarted}/>
      ) : (
        <LandingPage setIsQuizStarted={setIsQuizStarted} />
      )}
    </div>
  );
}

export default QuizWrapper;
