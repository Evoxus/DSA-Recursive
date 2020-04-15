function countSheep(number) {
  if (number === 0) {
    return "All sheep jumped over the fence.";
  }
  return (
    `${number}: Another sheep jumps over the fence \n` + countSheep(number - 1)
  );
}

// console.log(countSheep(5))

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

function reverseString(string) {
  if (string.length === 0) {
    return "";
  }
  return string[string.length - 1] + reverseString(string.slice(0, -1));
}

// console.log(reverseString('another test'));

function triangleNumber(number) {
  if (number === 1) {
    return number;
  }
  return number + triangleNumber(number - 1);
}

// console.log(triangleNumber(6));

function stringSplitter(string, separator) {
  let result = [];
  // TODO: Not working, prints whole string in array instead of sub strings arrayed together
  if (string.length === 0) {
    return [];
  }
  if (string[0] === separator) {
    return [[] + stringSplitter(string.slice(1), separator)];
  }
  result.push(string[0] + stringSplitter(string.slice(1), separator));
  return result;
}

console.log(stringSplitter('02/20/2020', '/'));

function fibonacciGenerator(number) {
  if (number < 2) {
    return number;
  }
  return fibonacciGenerator(number - 1) + fibonacciGenerator(number - 2);
}

// console.log(fibonacciGenerator(7));

function factorial(number) {
  if (number === 1) {
    return number;
  }
  return number * factorial(number - 1);
}

// console.log(factorial(5));

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

function mazeSolver(maze) {
  function move(column, row) {
    if (maze[column][row] === "e") {
      return `Solved at ${column} ${row}`;
    } else if (maze[column][row] === " ") {
    }
  }

  return;
}

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

// function binaryRepresentation(number) {
//   for (let i = 1; i > 0; i = i / 2) {
//     if (number === i) {
//       console.log("1");
//     } else {
//       console.log("0");
//     }
//   }
// }

// console.log(binaryRepresentation(3));
