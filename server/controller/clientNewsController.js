require('dotenv').config();
const Axios = require('Axios');
const express = require('express');
const { spellingCheck } = require('../../helper/spellingCheck');
const { news } = require('../../database/models/news');
const { wordCheck } = require('../../database/models/wordCheck');

/*
iterate through word string, then check whether or not they exit in database
if they exist in database, set englishWords to true;

process.env.DATAMUSE

Need to write test cases to ensure that changing and testing the information works
This means right after the words are change, we would replace it with that word that works. 
Damn, making it a lot more complicated than expected

Would I still need the db? 
Would I be able to use it redis caching?

*/
const ClientNewsController = {
  get: (req, res) => {
    console.log(req.body);
    const { queries } = req.query;
    const { testQuery } = req.body;
    console.log({ queries });
    console.log({ testQuery });
    if (queries || testQuery) {
      let searchTerm = queries || testQuery;
      const strArr = searchTerm.split(' ');
      let axiosPromises;
      axiosPromises = strArr.map(word =>
        Axios.get(`https://api.datamuse.com/sug?s=${word}`)
      );

      //loop through Axios requests
      Axios.all(axiosPromises)
        .then(responses => {
          let axiosReponseObj = {};
          responses.forEach(response => {
            const data = response.data;
            if (response.request.path !== undefined) {
              const path = response.request.path.slice(
                response.request.path.indexOf('=') + 1
              );
              axiosReponseObj[path] = data;
            } else {
              data.sort((a, b) => {
                return b.score - a.score;
              });
              axiosReponseObj[data[0].word] = data;
            }
          });
          const correctedSearchQuery = spellingCheck(axiosReponseObj);
          const correctedWord = correctedSearchQuery[0].word;

          return Axios.get(
            `https://newsapi.org/v2/top-headlines?q=${correctedWord}&apiKey=${
              process.env.NEWS_API
            }`
          );
        })
        .then(datas => {
          const article = datas.data.articles;
          if (article.length !== 0) {
            res.status(200).send(article);
          } else {
            res
              .status(200)
              .send(
                `Cannot find any articles. Have you try typing in something that is not random?`
              );
          }
        })
        .catch(err => console.error(err));
    } else {
      //get news from news API on initial start-up
      // Axios.get(
      //   `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      //     process.env.NEWS_API
      //   }`
      // )
      //   .then(datas => {
      //     res.status(200).send(datas.data);
      //   })
      //   .catch(err => console.error(err));
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
