const superTest = require('supertest');
const server = require('../../server/index');
const { db } = require('../../database/index');
//Db model
const { news } = require('../../database/models/news');
