//function used to check whether or not the word works
const Axios = require('axios');

const spellingCheck = obj => {
  const output = [];
  let sortOutput;
  for (let key in obj) {
    let dataArr = obj[key];
    const highestWord = dataArr.reduce((max, scores) => {
      return max.score > scores.score ? max : score;
    });
    output.push(highestWord);
  }
  sortOutput = output.sort((a, b) => {
    return b.score - a.score;
  });

  return sortOutput;
};

// console.log(spellingCheck(testObj));

module.exports = { spellingCheck };
