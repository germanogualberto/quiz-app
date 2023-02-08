import React, { Component } from "react";
import Question from "./Question";

class Quiz extends Component {
  render() {
    const { questions } = this.props;
    return <Question />;
  }
}

export default Quiz;
