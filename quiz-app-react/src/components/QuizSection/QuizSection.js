import React, { Component } from "react";
import { fetchTriviaData } from "../../api/OpenTDBAPI";
import "./QuizSection.css";
import Quiz from "./Quiz";

class QuizSection extends Component {
  state = {
    showQuiz: false,
    questions: [],
  };

  handleStart = async () => {
    this.setState({ showQuiz: true });
    const fetchedQuestions = await fetchTriviaData();
    this.setState({ questions: fetchedQuestions });
  };

  render() {
    const { showQuiz, questions } = this.state;
    return (
      <div className="quiz-main">
        {!showQuiz && <button onClick={this.handleStart}>Start</button>}
        {showQuiz && <Quiz questions={questions} />}
      </div>
    );
  }
}

export default QuizSection;
