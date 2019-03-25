const Axios = require('axios');

const spellingCheckAxios = str => {
  const strArr = str.split(' ');

  let axiosPromises;

  axiosPromises = strArr.map(word => {
    return Axios.get(`https://api.datamuse.com/sug?s=${word}`);
  });

  console.log(axiosPromises);

  Axios.all(axiosPromises)
    .then(responses => {
      responses.forEach(response => {
        let axiosReponseObj = {};
        const path = response.request.path;
        const data = response.data;
        return (axiosReponseObj[path] = data);
      });
    })
    .catch(err => console.error(err));
};

console.log(spellingCheckAxios('stock market'));

module.exports = { spellingCheckAxios };
