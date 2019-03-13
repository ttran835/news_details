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

const NewsOuletSeparator = arr => {
  let obj = {};
  arr.forEach(elts => {
    let source = elts.source;
    obj[source[0][1]] = [];
  });
  return obj;
};

console.log(NewsOuletSeparator(exampleData));

//to push into array of matching news publisher/outlet
const categorizeNewsOutlets = arr => {};

module.exports = { NewsOuletSeparator, categorizeNewsOutlets };
