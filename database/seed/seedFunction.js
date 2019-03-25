// The purpose of this function is to seed
// All defined Enlgish words into the database
// Used to check against user's input when entering information

const { wordCheck } = require('../models/wordCheck');
const wordsJson = require('./dictionaryArr.json');

const seedEnlgishWords = arr => {
  arr.forEach(word => {
    wordCheck
      .create({
        word: word,
      })
      .then(() => console.log('words saved'))
      .catch(err => console.error(err));
  });
};

seedEnlgishWords(wordsJson);
