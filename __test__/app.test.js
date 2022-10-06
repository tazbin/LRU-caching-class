const LRUCache = require('../app');

describe('LRU cache test suit', () => {


    test('get(1) --> should return 1', () => {

        let lRUCache = new LRUCache(2);
        lRUCache.put(1, 1);
        lRUCache.put(2, 2);
        result = lRUCache.get(1);

        expect(result).toBe(1);
    });

    test('get(2) --> should return -1', () => {

        let lRUCache = new LRUCache(2);
        lRUCache.put(1, 1);
        lRUCache.put(2, 2);
        lRUCache.get(1);
        lRUCache.put(3, 3);
        result = lRUCache.get(2);

        expect(result).toBe(-1);
    });

    test('get(1) --> should return -1', () => {

        let lRUCache = new LRUCache(2);
        lRUCache.put(1, 1);
        lRUCache.put(2, 2);
        lRUCache.get(10);
        lRUCache.put(3, 3);
        lRUCache.get(2);
        lRUCache.put(4, 4);
        result = lRUCache.get(1);

        expect(result).toBe(-1);
    });

    test('get(3) --> should return 3', () => {

        let lRUCache = new LRUCache(2);
        lRUCache.put(1, 1);
        lRUCache.put(2, 2);
        lRUCache.get(1);
        lRUCache.put(3, 3);
        lRUCache.get(2);
        lRUCache.put(4, 4);
        lRUCache.get(1);
        result = lRUCache.get(3);

        expect(result).toBe(3);
    });

    test('get(4) --> should return 4', () => {

        let lRUCache = new LRUCache(2);
        lRUCache.put(1, 1);
        lRUCache.put(2, 2);
        lRUCache.get(1);
        lRUCache.put(3, 3);
        lRUCache.get(2);
        lRUCache.put(4, 4);
        lRUCache.get(1);
        lRUCache.get(3);
        result = lRUCache.get(4);

        expect(result).toBe(4);
    });

});