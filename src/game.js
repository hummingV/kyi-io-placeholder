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
function generate(length, moves){
  let puzzle = (new Array(length)).fill("T").join("")
  for(let i = 0; i < moves; i++){
    let j = getRandomInt(length)
    puzzle = toggle(puzzle, j)
  }
  return puzzle;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
class Puzzle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checks: "FTF",
    }
  }

  nextGame(){
    const checks = this.state.checks;
    const nextGameLength = checks.length + 1;
    this.setState({
      checks: generate(nextGameLength, nextGameLength*2)
    });
  }

  clickHandler(i){
    this.setState({
      checks: toggle(this.state.checks, i)
    });
  }

  renderCheckboxs(){
    const checks = this.state.checks;
    const win = checks.indexOf("T") == -1;
    const checkboxes = checks.split("").map(((val, i) => {
      return (
        <input
          key={i}
          type="checkbox"
          className="zoom-3x"
          disabled={win ? "disabled" : ""}
          checked={val == "T"}
          onChange={() => this.clickHandler(i)}
        />);
    }));
    return checkboxes;
  }

  render() {
    const win = this.state.checks.indexOf("T") == -1;
    return (
      <div>
        <div>
          {this.renderCheckboxs()}
        </div>
        <div>
          <button className="btn btn-outline-dark">¯\_(ツ)_/¯</button>
          {win ? <button className="btn btn-outline-dark" onClick={() => this.nextGame()}>\(^.^)/</button> : null }
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#puzzle_container');
ReactDOM.render(e(Puzzle), domContainer);
