require('dotenv').config();
const express = require('express');

const MoviesController = {
  get: (req, res) => {
    res.status(200).send('hello from homeGet');
  },

  post: (req, res) => {
    res.status(201).send('hello from homePost');
  },
};

module.exports = { MoviesController };
