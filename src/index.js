import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const questionList = [
  {
    question: "8 x 1",
    answer: "8",
    choice: "1234",
    choices: ["5", "6", "7", "8"]
  },
  {
    question: "4 x 3",
    answer: "12",
    choice: "1234",
    choices: ["5", "6", "7", "12"]
  },
  {
    question: "5 x 3",
    answer: "15",
    choice: "1234",
    choices: ["15", "6", "7", "12"]
  },
  {
    question: "4 x 4",
    answer: "16",
    choice: "1234",
    choices: ["5", "16", "7", "12"]
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const questionId = 0;
    const question = questionList[questionId];

    this.setState(function(state, props) {
      return {
        questionId: questionId,
        question: question.question,
        choices: question.choices,
        choice1: question.choices[0],
        choice2: question.choices[1],
        choice3: question.choices[2],
        choice4: question.choices[3],
        correctCount: 0,
        incorrectCount: 0
      };
    });
  }

  handleClick = choice => {
    const currentQuestion = questionList[this.state.questionId];
    let correctCount = this.state.correctCount;
    let incorrectCount = this.state.incorrectCount;

    if (currentQuestion.answer == choice) {
      correctCount++;
    } else {
      incorrectCount++;
    }

    this.setState(function(state, props) {
      return {
        correctCount: correctCount,
        incorrectCount: incorrectCount
      };
    });

    if (this.state.questionId < questionList.length - 1) {
      const questionId = this.state.questionId + 1;
      const question = questionList[questionId];

      this.setState(function(state, props) {
        return {
          questionId: questionId,
          question: question.question,
          choices: question.choices,
          choice1: question.choices[0],
          choice2: question.choices[1],
          choice3: question.choices[2],
          choice4: question.choices[3]
        };
      });
    }
  };
  /*

        <button onClick={this.handleClick}>Next</button>
  <div>Message:{this.state.answer}</div>
  <div>Choices:{this.state.choices}</div>
*/

  render() {
    return (
      <div className="App">
        <h1>What is {this.state.question}</h1>

        <Buttons
          choice1={this.state.choice1}
          choice2={this.state.choice2}
          choice3={this.state.choice3}
          choice4={this.state.choice4}
          handleClick={this.handleClick}
        />
        <Answer
          correctCount={this.state.correctCount}
          incorrectCount={this.state.incorrectCount}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

class Question extends React.Component {
  render() {
    return <h1>{this.state.question[0]}</h1>;
  }
}

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = choice => {
    this.props.handleClick(choice);
  };

  //        <button>{this.state.choices}</button>
  render() {
    //let buttons = this.props.choices;
    //console.log(button1);

    // pass a function to map
    //const map1 = buttons.map(x => <button></button>);

    //console.log(map1);
    // expected output: Array [2, 8, 18, 32]

    return (
      <div>
        <Button choice={this.props.choice1} handleClick={this.handleClick} />
        <Button choice={this.props.choice2} handleClick={this.handleClick} />
        <Button choice={this.props.choice3} handleClick={this.handleClick} />
        <Button choice={this.props.choice4} handleClick={this.handleClick} />
      </div>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = choice => {
    this.props.handleClick(this.props.choice);
  };

  //        <button>{this.state.choices}</button>
  render() {
    return (
      <button choice={this.props.choice} onClick={this.handleClick}>
        {this.props.choice}
      </button>
    );
  }
}

class Answer extends React.Component {
  /*  constructor(props) {
    super(props);
  }
  */
  render() {
    return (
      <div>
        <h3>Correct: {this.props.correctCount}</h3>
        <h3>Incorrect: {this.props.incorrectCount}</h3>
      </div>
    );
  }
}
/*
const Answerx = props => {
  return (
    <div>
      <h2>answer: {this.state.answer}</h2>
    </div>
  );
};
*/

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
