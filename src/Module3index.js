import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: "Science Lab",
      items: [{ firstName: "Steve", lastName: "Bates" }]
    };
  }
  componentDidMount() {
    /*
    this.setState(function(state, props) {
      return {
        questionId: 2
      };
    });
    */
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
    console.log(event.target.id);
    console.log(event.target.value);
    console.log("restrictions:" + this.state.restrictions);
  };

  addPerson = event => {
    var itemsCopy = this.state.items.slice();

    itemsCopy.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      activity: this.state.activity
    });
    itemsCopy.sort((a, b) => {
      return b.lastName - a.lastName;
    });
    this.setState({ items: itemsCopy, value: "" });
    // todo: clear state
    // todo: validate firstname and lastname entered
    console.log("clicked");
  };

  removePerson = event => {
    console.log("c1");
    console.log(event);
    //var itemsCopy = this.state.items.splice(event, 1);
    var itemsCopy = this.state.items.slice();
    itemsCopy.splice(event, 1);
    this.setState({ items: itemsCopy, value: "" });
  };

  render() {
    return (
      <div className="App">
        <label>First Name</label>
        <br />
        <input
          id="firstName"
          className="InputBox"
          onChange={this.handleChange.bind(this)}
        />
        <br />
        <label>Last Name</label>
        <br />
        <input
          id="lastName"
          className="InputBox"
          onChange={this.handleChange.bind(this)}
        />
        <br />
        <label>Select Activity</label>
        <br />
        <select
          id="activity"
          className="InputBox"
          onChange={this.handleChange.bind(this)}
        >
          <option>Science Lab</option>
          <option>Swimming</option>
          <option>Cooking</option>
          <option>Painting</option>
        </select>
        <br />
        <label>Check all that apply</label>
        <br />
        <input
          type="checkbox"
          id="restrictions"
          className="InputBox"
          onChange={this.handleChange.bind(this)}
          value="a"
        />
        <label>a) Dietary Restrictions"</label>
        <br />
        <input
          type="checkbox"
          id="restrictions"
          className="InputBox"
          value="b"
          onChange={this.handleChange.bind(this)}
        />
        <label>b) Physical Disabilities</label>
        <br />
        <input
          type="checkbox"
          id="restrictions"
          className="InputBox"
          value="c"
          onChange={this.handleChange.bind(this)}
        />
        <label>c) Medical Needs"</label>
        <p>
          <button onClick={() => this.addPerson()}>Submit</button>
        </p>
        <Results
          personList={this.state.items}
          removePerson={this.removePerson}
        />
      </div>
    );
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <label>{this.props.title}</label>
        <br />
        <input className="InputBox" />
      </div>
    );
  }
}

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <table className="results">
          <thead>
            <tr>
              <td>Remove</td>
              <td>FirstName</td>
              <td>LastName</td>
              <td>Activity</td>
              <td>Restrictions</td>
            </tr>
          </thead>
          <ResultsBody
            personList={this.props.personList}
            removePerson={this.props.removePerson}
          />
        </table>
      </div>
    );
  }
}

class ResultsBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <tbody>
        {this.props.personList.map((item, index) => (
          <Row
            RowIndex={index}
            removePerson={this.props.removePerson}
            FirstName={item.firstName}
            LastName={item.lastName}
            Activity={item.activity}
            Restrictions={item.restrictions}
          />
        ))}
      </tbody>
    );
  }
}

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <tr>
        <td>
          <button onClick={() => this.props.removePerson(this.props.RowIndex)}>
            x
          </button>
        </td>
        <td>{this.props.FirstName}</td>
        <td>{this.props.LastName}</td>
        <td>{this.props.Activity}</td>
        <td>{this.props.Restrictions}</td>
      </tr>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
