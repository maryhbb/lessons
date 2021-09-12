const map = require('../src/map.js');

describe('the map function', () => {

   it('should correctly double each value', () => {
      const result = map([1,2,3,7,5,4,2], x => x * 2);
      expect(result).toEqual([2,4,6,14,10,8,2]);   
   });

   it('should correctly square each value', () => {
      const result = map([1,2,3,7,5,4,2], x => x * x);
      expect(result).toEqual([1,4,9,49,25,16,4]);   
   });

   it('should correctly turn each value to lowercase', () => {
      const result = map(["Hello", "CRUEL", "merciless", "World"], s => s.toLowerCase());
      expect(result).toEqual(["hello", "cruel", "merciless", "world"]);   
   });

   it('should correctly turn each value to lowercase', () => {
      const result = map(["we", " hate ", " leading", "and ", "trailing ", " spaces "], s => s.toLowerCase());
      expect(result).toEqual(["we", "hate", "leading", "and", "trailing", "spaces"]);   
   });
});
