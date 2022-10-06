const LRUCache = require('../app');

describe('LRU cache test suit', () => {

    test('get all stage correct values', () => {

        let LRU_Cache = new LRUCache(2);

        LRU_Cache.put(1, 1);
        LRU_Cache.put(2, 2);
        result = LRU_Cache.get(1);
        expect(result).toBe(1);

        LRU_Cache.put(3, 3);
        result = LRU_Cache.get(2);
        expect(result).toBe(-1);

        LRU_Cache.put(4, 4);
        result = LRU_Cache.get(1);
        expect(result).toBe(-1);

        result = LRU_Cache.get(3);
        expect(result).toBe(3);

        result = LRU_Cache.get(4);
        expect(result).toBe(4);
    });

});// your code goes here