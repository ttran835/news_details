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

process.env.DATAMUSE
*/
const ClientNewsController = {
  get: (req, res) => {
    const { searchTerm } = req.body;
    if (searchTerm) {
      let englishWords = true;
      const wordsArr = searchTerm.split(' ');

      const wordArrForAxios = wordsArr.map(word => {
        return `${process.env.DATAMUSE}/sug?s=${word}`;
      });

      console.log({ wordArrForAxios });

      wordArrForAxios.forEach(word => {
        Axios.get(word)
          .then(response => {
            console.log(response);
          })
          .catch(err => console.error(err));
      });
      // wordArrForAxios.forEach(word => {
      //   console.log({ word });
      //   Axios.all([Axios.get(word)])
      //     .then(
      //       Axios.spread(words => {
      //         console.log({ words });
      //       })
      //     )
      //     .catch(err => console.error(err));
      // });
      // searchTerm.replace(/ /g, '_');
      // Axios.get(
      //   `https://newsapi.org/v2/top-headlines?q=${searchTerm}&apiKey=${
      //     process.env.NEWS_API
      //   }`
      // )
      //   .then(data => {
      //     res.status(200).send(data);
      //   })
      //   .catch(err => console.error(err));
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
