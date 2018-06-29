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
      <input
        type="checkbox"
        className="zoom-3x"
        checked={this.state.checks[i] == "T"}
        onChange={() => this.clickHandler(i)}
      />);
  }

  render() {
    const success = this.state.checks == "FFF";
    return (
      <div>
        <div>
          {this.renderCheckbox(0)}
          {this.renderCheckbox(1)}
          {this.renderCheckbox(2)}
        </div>
        <div>
          <button className="btn btn-outline-dark">¯\_(ツ)_/¯</button>
          <button className="btn btn-outline-dark">\(^.^)/</button>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#puzzle_container');
ReactDOM.render(e(Puzzle), domContainer);
