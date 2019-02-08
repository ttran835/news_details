require('dotenv').config();
const Axios = require('axios');

const getMovies = title => {
  try {
    return Axios.get(
      `https://private-070548-simkl.apiary-mock.com/search/type?q=john%20wick&client_id=${
        process.env.SIMKL_CLIENT_API
      }`
    );
  } catch (error) {
    console.error(error);
  }
};

const countMovies = (title, cb) => {
  const movies = getMovies(title)
    .then(response => {
      if (response.data) {
        console.log(
          `received movie data ${Object.entries(reponse.data).length}`
        );
        cb(response.data);
      }
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = { countMovies };
