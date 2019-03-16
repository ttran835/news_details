const request = require('supertest');
const { NewsOuletSeparator } = require('../../helper/newsOuletSeparator');

//I can definitely have a seprate object. That object will have all newsOutlet
//if it does not, then it will create a new property key.

//the function needs to first create object key = [];
//then push all of matching values into the array;

describe('Function should separate newsoutlet into different category', () => {
  const exampleData = [
    {
      _id: 1,
      source: [['id', 'the-new-york-times'], ['name', 'The New York Times']],
      author: 'DAVE PHILIPPS',
      title: 'White Supremacism in the U.S. Military, Explained',
    },
    {
      _id: 2,
      source: [['id', 'wall-street-journal'], ['name', 'Wallstreet Journal']],
      author: 'DAVE PHILIPPS',
      title: 'White Supremacism in the U.S. Military, Explained',
    },
  ];

  const returnObject = {
    'The New York Times': [
      {
        _id: 1,
        source: [['id', 'the-new-york-times'], ['name', 'The New York Times']],
        author: 'DAVE PHILIPPS',
        title: 'White Supremacism in the U.S. Military, Explained',
      },
    ],

    'Wallstreet Journal': [
      {
        _id: 2,
        source: [['id', 'wall-street-journal'], ['name', 'Wallstreet Journal']],
        author: 'DAVE PHILIPPS',
        title: 'White Supremacism in the U.S. Military, Explained',
      },
    ],
  };

  const objectKeys = ['The New York Times', 'Wallstreet Journal'];
  it('should create new object with correct key properties with name of newsOutlet', async () => {
    const testResults = NewsOuletSeparator(exampleData);
    expect(testResults).toMatchObject(returnObject);
    expect(Object.keys(returnObject)).toEqual(objectKeys);
  });

  it('should push the newsoutlet company to the correct array', async () => {
    const separator = NewsOuletSeparator(exampleData);
    const testResult = separator['The New York Times'].map(elts => {
      return elts.source[1][1];
    });
    expect(testResult).toEqual(['The New York Times']);
  });
});
