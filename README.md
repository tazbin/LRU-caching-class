# LRU caching class implementation

**LRU cache** is a data structure that removed the least recently used ```(key, value)``` pair from the cache & puts the most recently pair data at top/ begining of it. Thus it allows to access recently used data faster & easier. The least recently used pair is always stays at the bottom/ end and the most recently used pair is always stays at the top/ begining of this LRUCache.

## Implementation:
- ```LRUCache```
  - A class named with it is implemeted which provies properties & methoods to implement this data structure
  - Size of it must be initialized while declaring
  
- ```get(key)``` 
  - returns the ```value``` of this key if this key exists in he LRUcache
  - returns ```-1``` of this key if this key doesn't exists in he LRUcache
  - puts this ````(key, value)```` pair on top/ beginning of the LRUCache
- ```put(key, value)``` 
  - if this ```key``` exits, then it changes its ```value``` with new one & puts this ````(key, value)```` pair on top/ beginning of the LRUCache
  - if this ```key``` doesn't exits, but the cache is full; then it deletes the least used ```(key, value)``` pair from bottom/ end & adds this new ```(key, value)``` pair on top/ begning of the LRUCache
  - if this ```key``` doesn't exits and the cache is nlt full; then it just adds this new ```(key, value)``` pair on top/ begning of the LRUCache

## Tech used:

**Runtime environment**
- [x] Node.js

**Testing framework**
- [x] Jest

## How to install & run:
### Using Git (recommended)
1. Navigate & open CLI into the directory where you want to put this project & Clone this project (will be cloned inside LRU-cache folder) using this command.
   
```bash
git clone https://github.com/tazbin/LRU-caching-class.git ./LRU-cache
```
### Using manual download ZIP
1. Download repository
2. Extract the zip file, navigate into it & copy the folder to your desired directory

### Running the project
Build the docker image

```bash
docker build -t lru-node .
```

Then run the project using

```bash
docker run lru-node
```
You'll see the ```LRUCache``` is implemeted & the test cased has been been executed resulting in terminal as below

```bash
> lru-caching-class@1.0.0 test
> jest

PASS ./app.test.js
  LRU cache test suit
    ✓ get(1) --> should return 1 (3 ms)
    ✓ get(2) --> should return -1 (1 ms)
    ✓ get(1) --> should return -1 (1 ms)
    ✓ get(3) --> should return 3 (1 ms)
    ✓ get(4) --> should return 4

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        0.651 s
Ran all test suites.
```
