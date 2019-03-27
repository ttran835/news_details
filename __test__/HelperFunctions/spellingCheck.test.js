const { spellingCheck } = require('../../helper/spellingCheck');

describe('The function is used to get object with highest score', () => {
  const testObj1 = {
    stock: [
      { word: 'stock', score: 69180 },
      { word: 'stocking', score: 65439 },
      { word: 'stocky', score: 65290 },
    ],
    market: [
      { word: 'market', score: 80000 },
      { word: 'marketing', score: 66273 },
      { word: 'marketplace', score: 65534 },
      { word: 'marketer', score: 65014 },
      { word: 'marketeer', score: 64876 },
    ],
  };

  const testObj2 = {
    trump: [
      { word: 'trump', score: 70728 },
      { word: 'trumpet', score: 65659 },
      { word: 'trumpery', score: 65408 },
    ],
    in: [
      { word: 'in', score: 22912 },
      { word: 'into', score: 6144 },
      { word: 'integrity', score: 5048 },
      { word: 'interest', score: 3945 },
    ],
    us: [
      { word: 'u.s.a', score: 199 },
      { word: 'u.s. government', score: 22 },
      { word: 'u.s. mint', score: 18 },
      { word: 'u.s. house of representatives', score: 16 },
    ],
  };
  it('should return the length of the array to equal the same amount of object keys', () => {
    const result1 = spellingCheck(testObj1);
    const result2 = spellingCheck(testObj2);

    expect(result1.length).toEqual(2);
    expect(result2.length).toEqual(3);
  });

  it('should return an array with tuples sorted from greatest to least', () => {
    const result1 = spellingCheck(testObj1);
    const result2 = spellingCheck(testObj2);

    expect(result1[0].word).toBe('market');
    expect(result2[0].word).toBe('trump');
  });
});
