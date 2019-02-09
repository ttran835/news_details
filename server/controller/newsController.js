require('dotenv').config();
const Axios = require('axios');
const express = require('express');

const { news } = require('../../database/models/news');

const url = `https://newsapi.org/v2/everything?q=u.s.&apiKey=${
  process.env.NEWS_API
}`;

const NewsController = {
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

module.exports = { NewsController };