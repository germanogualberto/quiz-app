import React, { Component } from "react";
import Header from "./components/Header";
import QuizSection from "./components/QuizSection";

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
