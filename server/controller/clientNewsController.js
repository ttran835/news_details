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
    const { searchTerm } = req.body;
    if (searchTerm) {
      const strArr = searchTerm.split(' ');
      let axiosPromises;
      axiosPromises = strArr.map(word => {
        return Axios.get(`https://api.datamuse.com/sug?s=${word}`);
      });

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

          return Axios.get(
            `https://newsapi.org/v2/top-headlines?q=${correctedSearchQuery}&apiKey=${
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

//iteration

/*
// const wordArrForAxios = wordsArr.map(word => {
      //   return `${process.env.DATAMUSE}/sug?s=${word}`;
      // });

      // console.log({ wordArrForAxios });

      // wordArrForAxios.forEach(word => {

      // Axios.get(wordArrForAxios[0])
      //   .then(response => {
      //     const testData = response.data;
      //     const bestMatch = testData.map(elt => {
      //       let scoreArr = Object.values(elt.score);
      //       console.log({ scoreArr });
      //       return Math.max(scoreArr);
      //     });
      //     console.log({ testData });
      //     console.log({ bestMatch });
      //   })
      //   .catch(err => console.error(err));
      // });
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
*/
