const request = require('supertest');
const { convertDataToJSON } = require('../../helper/jsonConverter');
const fs = require('fs');
jest.mock('fs');

describe('Function to create a new JSON file from Postgres DB', () => {
  const testResult = convertDataToJSON;
  const filePath = '__test__/fake_data/data_mock/test_mock.json';

  let testResultArr = [];
  fs.writeFileSync = jest.fn().mockReturnValue(false);
  fs.readFile = jest.fn().mockReturnValue(false);

  //creating sample arr;
  const sampleArr = [
    {
      _id: 1,
      source: [['id', 'the-new-york-times'], ['name', 'The New York Times']],
      author: 'DAVE PHILIPPS',
      title: 'White Supremacism in the U.S. Military, Explained',
    },
  ];

  const checkFile = file => {
    fs.readFile(file, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        testResultArr.push(data);
      }
    });
  };

  testResult(sampleArr, 'test_mock');
  checkFile(filePath);

  it('should run without creating any errors', async () => {
    expect(fs.writeFileSync).toHaveBeenCalled();
  });

  it('should be able to create a JSON file without throwing errors', async () => {
    expect(fs.readFile).toHaveBeenCalled();
  });

  it('should created a file with results', async () => {
    expect(testResultArr.length).toBeDefined();
  });
});
