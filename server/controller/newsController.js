require('dotenv').config();
const Axios = require('axios');
const express = require('express');
const { convertDataToJSON } = require('../../helper/jsonConverter.js');

const { news } = require('../../database/models/news');

//This controller primarily acts as a Cron. It will grab news and update the database at midnight and delete the previous' day database
const url = `https://newsapi.org/v2/everything?q=u.s.&apiKey=${
  process.env.NEWS_API
}`;

const NewsController = {
  //used to convert data into JSON for unit and intergration tests
  get: (req, res) => {
    news
      .findAll({})
      .then(data => {
        const convert = JSON.stringify(data);
        // convertDataToJSON(data);
        res
          .status(200)
          .send(`Converted Data and saved. Return: ${typeof convert}`);
      })
      .catch(err => {
        if (err) console.error(err);
      });
  },

  post: (req, res) => {
    Axios.get(url)
      .then(response => {
        let articles = response.data.articles;
        articles.forEach(article => {
          news
            .create({
              source: [
                ['id', article.source.id],
                ['name', article.source.name],
              ],
              author: article.author,
              title: article.title,
              description: article.description,
              url: article.url,
              urlToImage: article.urlToImage,
              publishedAt: article.publishedAt,
              content: article.content,
            })
            .then(() => console.log('data saved'))
            .catch(err => console.error(err));
        });
        res.status(201).send('Successfully saved information into database');
      })
      .catch(err => {
        console.error(err);
      });
  },
};

module.exports = { NewsController };
