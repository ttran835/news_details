require('dotenv').config();
const Axios = require('Axios');
const express = require('express');
const { news } = require('../../database/models/news');
const { wordCheck } = require('../../database/models/wordCheck');

/*
findAll({
        limit: 10,
        where: {
            asset_name: {
                $like: '%' + request.body.query + '%'
            }

iterate through word string, then check whether or not they exit in database
if they exist in database, set englishWords to true;
*/
const ClientNewsController = {
  get: (req, res) => {
    const { searchTerm } = req.body;
    if (searchTerm) {
      let englishWords = true;
      const word = searchTerm.split(' ');
      console.log({ word });
      word.forEach(elt => {
        console.log({ elt });
        wordCheck
          .findAll({
            where: {
              word: {
                $like: `%${elt}%`,
              },
            },
          })
          .then(words => {
            console.log('will it hit his statement', words);
          });
      });
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
