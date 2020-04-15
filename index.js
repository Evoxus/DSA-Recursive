// ** Counting Sheep **

function countSheep(number) {
  if (number === 0) {
    return "All sheep jumped over the fence.";
  }
  return (
    `${number}: Another sheep jumps over the fence \n` + countSheep(number - 1)
  );
}

// console.log(countSheep(5))


// ** Power Calculator **

function powerCalculator(base, exponent) {
  if (exponent < 0) {
    return "exponent should be >= 0";
  }
  if (exponent === 1) {
    return base;
  }
  return base * powerCalculator(base, exponent - 1);
}

// console.log(powerCalculator(10, 5));


// ** Reverse String **

function reverseString(string) {
  if (string.length === 0) {
    return "";
  }
  return string[string.length - 1] + reverseString(string.slice(0, -1));
}

// console.log(reverseString('another test'));


// ** nth Triangular Number **

function triangleNumber(number) {
  if (number === 1) {
    return number;
  }
  return number + triangleNumber(number - 1);
}

// console.log(triangleNumber(6));


// ** String Splitter **

function stringSplitter(string, separator, currentString = '') {
  let result = [];
  if (string.length === 0) {
    return [currentString];
  }
  if (string[0] === separator) {
    return [currentString, ...stringSplitter(string.slice(1), separator)];
  }
  currentString = currentString + string[0];

  return stringSplitter(string.slice(1), separator, currentString)
}

// console.log(stringSplitter('02/20/2020', '/'));


// ** Fibonacci **

function fibonacciGenerator(number) {
  if (number < 2) {
    return number;
  }
  return fibonacciGenerator(number - 1) + fibonacciGenerator(number - 2);
}

// console.log(fibonacciGenerator(7));


// ** Factorial **

function factorial(number) {
  if (number === 1) {
    return number;
  }
  return number * factorial(number - 1);
}

// console.log(factorial(5));


// ** Find ALL ways out of the maze **

let mySmallMaze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"],
];

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"],
];


function mazeSolver(maze, row, column) {
  //check all borders
  if (maze.length <= row || maze.length <= column || column < 0 || row < 0) {
    return
  }
  // console.log(row, column)
  if (maze[row][column] === "e") {
    // console.log("exit found")
    return
  }
  if (maze[row][column] === "*") {
    return
  }

  maze[row][column] = '*'
  mazeSolver(maze, row + 1, column) //down
  mazeSolver(maze, row, column + 1) //right
  mazeSolver(maze, row - 1, column) //up
  mazeSolver(maze, row, column - 1) //left
  maze[row][column] = ' '
}
mazeSolver(mySmallMaze, 0, 0)



// ** Anagrams **

function anagram(word) {
  if (word.length < 2) {
    return word;
  }
  let result = [];
  for (let i = 0; i < word.length; i++) {
    let character = word[i];
    if (word.indexOf(character) != i) {
      continue;
    }

    let restOfWord = word.slice(0, i) + word.slice(i + 1, word.length);

    for (let otherWords of anagram(restOfWord)) {
      result.push(character + otherWords);
    }
  }

  return result;
}
// console.log(anagram('east'));


