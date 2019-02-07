require('dotenv').config();
const Axios = require('axios');
const express = require('express');

const url = `https://api.simkl.com/search/movie?q&client_id=${
  process.env.SIMKL_API
}`;

const MoviesController = {
  get: (req, res) => {
    Axios.get(url)
      .then(response => {
        if (response) {
          console.log(response.data);
          res.status(200).send(response.data);
        }
      })
      .catch(err => {
        console.error(err);
      });
  },

  post: (req, res) => {
    res.status(201).send('hello from homePost');
  },
};

module.exports = { MoviesController };
