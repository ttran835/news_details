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
    alright then, so what happens if I place them all into an array and then return all of it? 
    Then write atest for it
*/

// return correct spelling at the end of function
const spellingCheck = str => {
  const correctStr = [];
  const strArr = str.split(' ');
  //to handle Axios responses

  let completeAxiosPromises, axiosPromises;

  axiosPromises = strArr.forEach(word => {
    return Axios.get(`https://api.datamuse.com/sug?s=${word}`);
  });

  async function axios(arr) {
    await Axios.all(arr).then(responses => {
      let axiosReponseObj = {};
      responses.forEach(response => {
        const path = response.request.path;
        const data = response.data;
        axiosReponseObj[path] = data;
      });
      correctStr.push(arr);
    });
  }

  axios(axiosPromises);
  // console.log(completearr);
  // console.log({ correctStr });
  return correctStr;
};

console.log(spellingCheck('stock market'));

module.exports = { spellingCheck };
