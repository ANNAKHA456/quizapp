import React, { useState } from "react";
import "./QuestionsPage.css";
import { data } from "../database/questions";
import ResultPage from "./ResultPage";

function QuestionsPage(props) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleRadioClick = (event) => {
    setSelectedAnswers([...selectedAnswers, event.target.value]);

    if (questionIndex + 1 < data.length) setQuestionIndex(questionIndex + 1);
  };
  return (
    <div>
      {questionIndex + 1 < data.length ? (
        <div className="question-answers-section">
          <label>{data[questionIndex].question}</label>
          <div className="answers-wrapper">
            {[
              ...data[questionIndex].incorrect_answers,
              data[questionIndex].correct_answer,
            ].map((answer) => (
              <div className="answer-wrapper" key={answer}>
                <input
                  type="radio"
                  value={answer}
                  id={answer}
                  name={"answers"}
                  onChange={handleRadioClick}
                />
                <label for={answer}>{answer}</label>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <ResultPage
          selectedAnswers={selectedAnswers}
          setIsQuizStarted={props.setIsQuizStarted}
        />
      )}
    </div>
  );
}

export default QuestionsPage;
