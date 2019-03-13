//function to separate out newsOulet.
const jsonData = require('../__test__/fake_data/data/pg_db.json');

//to separate and create obj keys with [] values;

const exampleData = [
  {
    _id: 1,
    source: [['id', 'the-new-york-times'], ['name', 'The New York Times']],
    author: 'DAVE PHILIPPS',
    title: 'White Supremacism in the U.S. Military, Explained',
  },
  {
    _id: 2,
    source: [['id', 'wall-street-journal'], ['name', 'Wallstreet Journal ']],
    author: 'DAVE PHILIPPS',
    title: 'White Supremacism in the U.S. Military, Explained',
  },
];

//to push into array of matching news publisher/outlet
const NewsOuletSeparator = arr => {
  //created object with category for news
  const obj = {};
  arr.forEach(article => {
    const outlet = article.source[1][1];
    if (obj[outlet]) {
      obj[outlet].push(article);
    } else {
      obj[outlet] = [article];
    }
  });
  return obj;
};

module.exports = { NewsOuletSeparator };
