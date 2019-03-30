//function to separate out newsOulet.
const jsonData = require('../__test__/fake_data/data/pg_db.json');

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
