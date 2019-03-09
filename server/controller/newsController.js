require('dotenv').config();
const Axios = require('axios');
const express = require('express');

const { news } = require('../../database/models/news');

//This controller primarily acts as a Cron. It will grab news and update the database at midnight and delete the previous' day database
const url = `https://newsapi.org/v2/everything?q=u.s.&apiKey=${
  process.env.NEWS_API
}`;

const NewsController = {
  get: (req, res) => {
    Axios.get(url)
      .then(response => {
        if (response) {
          let articles = response.data.articles;
          articles
            .map(article => {
              news.create({
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
              });
            })
            .then(response => {
              res
                .status(200)
                .send('Successfully saved information into database');
            });
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
