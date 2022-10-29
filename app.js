// class definiton
class LRUCache {

    constructor(capacity) {
        this.capacity = capacity; // size of the cache
        this.map = new Map(); // cache memory
    }

    // do me a pr review

    
    get(key) {

        if (this.map.has(key)) { // key exists


            let value = this.map.get(key);

            // delete the pair
            this.map.delete(key);

            // add the pair to most recent
            this.map.set(key, value);

            return this.map.get(key);

        } else { // key doesn't exists
            
            return -1;
        }

    }

    put(key, value) {

        // do me a pr review too

        if (this.map.has(key)) { // pair exists

            // delete this pair
            this.map.delete(key);

        } else if (this.capacity === this.map.size) { // pair exists, and map is full

            // delete the pair from first of cache i.e. least recent
            this.map.delete(this.map.keys().next().value);

        }

        // add the pair to most recent
        this.map.set(key, value);

    }
};

module.exports = LRUCache

// here please as well...

// another comment here