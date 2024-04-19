import React from "react";
import { data } from "../database/questions";

function ResultPage(props) {
  const result = props.selectedAnswers.reduce(
    (sum, answer, index) =>
      (sum += answer === data[index].correct_answer ? 1 : 0),
    0
  );
  const handleClick = () => {
    props.setIsQuizStarted(false);
  };
  return (
    <div>
      <div>Score is : {result}</div>
      <div>{result > 7 ? "Passed!" : "Please try again!"}</div>
      <div>
        <button onClick={handleClick}>Home</button>
      </div>
    </div>
  );
}

export default ResultPage;
