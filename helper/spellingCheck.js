//function used to check whether or not the word works
const Axios = require('axios');

/*
   const wordsArr = searchTerm.split(' ');

      const wordArrForAxios = wordsArr.map(word => {
        return `${process.env.DATAMUSE}/sug?s=${word}`;
      });

      console.log({ wordArrForAxios });

      // wordArrForAxios.forEach(word => {

      Axios.get(wordArrForAxios[0])
        .then(response => {
          
          const bestMatch = testData.map(elt => {
            let scoreArr = Object.values(elt.score);
            console.log({ scoreArr });
            return Math.max(scoreArr);
          });
          console.log({ testData });
          console.log({ bestMatch });
        })
        .catch(err => console.error(err));
*/
const spellingCheck = str => {
  Axios.get('https://api.datamuse.com/sug?s=stock').then(response => {
    const testData = response.data;
    console.log({ testData });
  });
};

module.exports = { spellingCheck };
