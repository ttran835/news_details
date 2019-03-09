//function to convert pg to JSON file.
const fs = require('fs');

const convertDataToJSON = arr => {
  fs.writeFileSync(__dirname + '/data/pg_db.json', arr, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`sucessfully created file`);
    }
  });
};

module.exports = { convertDataToJSON };
