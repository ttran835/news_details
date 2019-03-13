const request = require('supertest');
const {
  NewsOuletSeparator,
  categorizeNewsOutlets,
} = require('../../helper/newsOuletSeparator');

//I can definitely have a seprate object. That object will have all newsOutlet
//if it does not, then it will create a new property key.

//the function needs to first create object key = [];
//then push all of matching values into the array;
define('Function should separate newsoutlet into different category'),
  () => {
    const exampleData = [
      {
        _id: 1,
        source: [['id', 'the-new-york-times'], ['name', 'The New York Times']],
        author: 'DAVE PHILIPPS',
        title: 'White Supremacism in the U.S. Military, Explained',
      },
      {
        _id: 2,
        source: [
          ['id', 'wall-street-journal'],
          ['name', 'Wallstreet Journal '],
        ],
        author: 'DAVE PHILIPPS',
        title: 'White Supremacism in the U.S. Military, Explained',
      },
    ];

    it('should create a key value pair of the newsoulet', async () => {
      const createNewsOutletKey = arr => {
        arr.map(elt => {});
      };

      expect('').toBe(Object);
    });

    it('should push the newsoutlet company to the correct array', async () => {});
  };
