
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

function solve2(input){
  const visited = new Set()
  const q = []
  visited.add(input)
  q.push([[], input]) //[list of moves, lastPos]
  let maxLoop = 10000;
  while(q.length > 0 && maxLoop-- > 0){
    let tuple = q.shift()
    let moves = tuple[0]
    let node = tuple[1]
    if(node.indexOf('T') == -1) return moves;
    for(let i = 0; i < node.length; i++){
      let next = toggle(node, i)
      if(!visited.has(next)){
        let newMoves = moves.slice()
        newMoves.push(i)
        q.push([newMoves, next])
      }
    }
  }
  return "shrug"
}

function solve(input){
  const visited = new Set()
  const q = []
  visited.add(input)
  q.push([[], input]) //[list of moves, lastPos]
  let maxLoop = 10000;
  while(q.length > 0 && maxLoop-- > 0){
    let tuple = q.shift()
    let moves = tuple[0]
    let node = tuple[1]
    if(node.indexOf('T') == -1) return moves;
    for(let i = 0; i < node.length; i++){
      let next = toggle(node, i)
      if(!visited.has(next)){
        let newMoves = moves.slice()
        newMoves.push(i)
        q.push([newMoves, next])
      }
    }
  }
  return "shrug"
}

function g(input){
  const inputArr = input.split('F');
  let est = 0;
  for(let i = 0; i < inputArr.length; i++){
    est += Math.ceil(inputArr[i].length / 3)
  }
  return est;
}
