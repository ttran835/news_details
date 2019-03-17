require('dotenv').config();
const Axios = require('Axios');
const express = require('express');
const { news } = require('../../database/models/news');

const url = `https://newsapi.org/v2/everything?q=u.s.&apiKey=${
  process.env.NEWS_API
}`;

const ClientNewsController = {
  get: (req, res) => {
    news
      .findAll({})
      .then(articles => {
        res.status(200).send(articles);
      })
      .catch(err => {
        if (err) console.error(err);
      });
  },

  post: (req, res) => {
    res.status(201).send('hello from post client');
  },
};

module.exports = { ClientNewsController };
