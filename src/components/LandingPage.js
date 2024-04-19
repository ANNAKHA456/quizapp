import React from "react";
import "./LandingPage.css";

function LandingPage(props) {
  const startQuiz = () => {
    props.setIsQuizStarted(true);
  };
  return (
    <div>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
}

export default LandingPage;
