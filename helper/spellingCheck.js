//function used to check whether or not the word works
const Axios = require('axios');

// example of object returning
/*
const testObj = {
  stock: [
    { word: 'stock', score: 69180 },
    { word: 'stocking', score: 65439 },
    { word: 'stocky', score: 65290 },
    { word: 'stocks', score: 65203 },
    { word: 'stockade', score: 65115 },
    { word: 'stockpile', score: 65081 },
    { word: 'stockings', score: 64942 },
    { word: 'stocker', score: 64935 },
    { word: 'stockbroker', score: 64867 },
    { word: 'stockiest', score: 64841 },
  ],
  market: [
    { word: 'market', score: 80000 },
    { word: 'marketing', score: 66273 },
    { word: 'marketplace', score: 65534 },
    { word: 'marketer', score: 65014 },
    { word: 'marketeer', score: 64876 },
    { word: 'markets', score: 64848 },
    { word: 'marketable', score: 64844 },
    { word: 'market share', score: 64789 },
    { word: 'marketability', score: 64782 },
    { word: 'market garden', score: 64777 },
  ],
};
*/

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

  return sortOutput[0].word;
};

// console.log(spellingCheck(testObj));

module.exports = { spellingCheck };
