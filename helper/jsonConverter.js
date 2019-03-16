//function to convert pg to JSON file.
const path = require('path');
const fs = require('fs');
const Routes = require('../server/routes/Routes');
const { NewsController } = require('../server/controller/newsController');
// console.log(NewsController.get());

// console.log(NewsController);

const convertDataToJSON = (arr, fileName) => {
  if (fileName.includes('mock')) {
    fs.writeFileSync(
      path.join(
        __dirname,
        '../news_details',
        `../__test__/fake_data/data_mock/${fileName}.json`
      ),
      arr,
      err => {
        err
          ? console.error(err)
          : console.log('Successfully created Mocked file!');
      }
    );
  } else {
    fs.writeFileSync(
      path.join(
        __dirname,
        '../news_details',
        `../__test__/fake_data/data/${fileName}.json`
      ),
      arr,
      err => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Sucessfully created file!`);
        }
      }
    );
  }
};

module.exports = { convertDataToJSON };
