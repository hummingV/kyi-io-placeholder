'use strict';

const e = React.createElement;

function toggle(input, i){
  let inputArr = input.split("")
  inputArr[i] = flip(inputArr[i])
  if(i > 0) inputArr[i-1] = flip(inputArr[i-1])
  if(i < input.length-1) inputArr[i+1] = flip(inputArr[i+1])
  return inputArr.join("")
}
function flip(s){
  return s == "T" ? "F" : "T"
}

class Puzzle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checks: "FTF",
    }
  }

  clickHandler(i){
    this.setState({
      checks: toggle(this.state.checks, i)
    });
  }

  renderCheckbox(i){
    return (
          React.createElement("input", {
            type: "checkbox",
            className: "zoom-3x",
            checked: this.state.checks[i] == "T",
            onClick: (() => this.clickHandler(i)),
          })
      );
  }

  render() {
    const success = this.state.checks == "FFF";
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        this.renderCheckbox(0),
        this.renderCheckbox(1),
        this.renderCheckbox(2),
        React.createElement("button", { className: "btn btn-outline-dark"}, " \xAF\\_(\u30C4)_/\xAF "),
      ),

      !success ? null : React.createElement(
        "div",
        null,
        React.createElement("button", { className: "btn btn-outline-dark"}, "(\u2310\u25A0_\u25A0) Yeah! "),
      )
    );

  }
}

const domContainer = document.querySelector('#puzzle_container');
ReactDOM.render(e(Puzzle), domContainer);
