require('dotenv').config();
const Axios = require('Axios');
const express = require('express');

const spellingCheck = {
  get: (req, res) => {
    res.status(200).send('hello from spellingcheck');
  },

  post: (req, res) => {
    res.status(201).send('hello from spellingcheck post');
  },
};

module.exports = { spellingCheck };
