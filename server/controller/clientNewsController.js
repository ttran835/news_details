require('dotenv').config();
const Axios = require('Axios');
const express = require('express');
const { news } = require('../../database/models/news');

const ClientNewsController = {
  get: (req, res) => {
    const { searchTerm } = req.body;
    if (searchTerm) {
      searchTerm.replace(/ /g, '_');
      Axios.get(
        `https://newsapi.org/v2/top-headlines?q=${searchTerm}&apiKey=${
          process.env.NEWS_API
        }`
      )
        .then(data => {
          res.status(200).send(data);
        })
        .catch(err => console.error(err));
    } else {
      //get news from news API
      news
        .findAll({})
        .then(articles => {
          res.status(200).send(articles);
        })
        .catch(err => {
          if (err) console.error(err);
        });
    }
  },

  post: (req, res) => {
    res.status(201).send('hello from post client');
  },
};

module.exports = { ClientNewsController };
