import React, { Component } from "react";

import "./QuizSection.css";
import Quiz from "./Quiz";

class QuizSection extends Component {
  state = { showQuiz: false };

  handleStart = () => {
    this.setState({ showQuiz: true });
  };

  render() {
    const { showQuiz } = this.state;
    return (
      <div className="quiz-main">
        {!showQuiz && <button onClick={this.handleStart}>Start</button>}
        {showQuiz && <Quiz />}
      </div>
    );
  }
}

export default QuizSection;
