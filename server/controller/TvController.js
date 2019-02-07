require('dotenv').config();
const express = require('express');

const TvController = {
  get: (req, res) => {
    res.status(200).send('hello from TvGet');
  },

  post: (req, res) => {
    res.status(201).send('hello from TvPost');
  },
};

module.exports = { TvController };
