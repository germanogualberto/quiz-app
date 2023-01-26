import React, { Component } from "react";
import Header from "./Header";
import QuizSection from "./QuizSection";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <QuizSection />
      </div>
    );
  }
}

export default App;
