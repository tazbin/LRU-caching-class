# LRU caching class implementation

**LRU cache** is a data structure that removed the least recently used ```(key, value)``` pair from the cache & puts the most recent pair data at the top/beginning of it. Thus it allows to access recently used data faster & easier. The least recently used pair always stays at the bottom/ end and the most recently used pair always stays at the top/beginning of this LRUCache.

## Implementation:
- ```LRUCache```
  - a class named with it is implemented which provides properties & methods to implement this data structure
  - the size of it must be initialized while declaring
  
- ```get(key)``` 
  - returns the ```value``` of this key if this key exists in the LRUcache
  - returns ```-1``` of this key if this key doesn't exist in the LRUcache
  - puts this ````(key, value)```` pair on top/ beginning of the LRUCache
- ```put(key, value)``` 
  - if this ```key``` exits, then it changes its ```value``` with the given new one & puts this ````(key, value)```` pair on top/ beginning of the LRUCache
  - if this ```key``` doesn't exist, but the cache is full; then it deletes the least used ```(key, value)``` pair from the bottom/ end & adds this new ```(key, value)``` pair on top/beginning of the LRUCache
  - if this ```key``` doesn't exist and the cache is not full; then it just adds this new ```(key, value)``` pair on top/beginning of the LRUCache

## Tech used:

**Runtime environment**
- [x] Node.js

**Testing framework**
- [x] Jest

## Getting the app:
#### Using Git (recommended)
1. Navigate & open CLI into the directory where you want to put this project & Clone this project (will be cloned inside LRU-cache folder) using this command.
   
```bash
git clone https://github.com/tazbin/LRU-caching-class.git ./LRU-cache
```
#### Using manual download ZIP
1. Download the repository
2. Extract the zip file, navigate into it & copy the folder to your desired directory

## Running the app:
Build the docker image

```bash
docker build -t lru-node .
```

Then run the docker container in detached mode

```bash
docker run -d --name lru-node-c lru-node 
```
To view the logs of the container
```bash
docker logs lru-node-c
```
To execute commands within the ```lru-node-c``` containers
```bash
docker exec -it lru-node-c /bin/sh
```
Now we can run our test within the ```lru-node-c``` container
```bash
npm test
```
You'll see the ```LRUCache``` is implemented & the test cases have been executed resulting in the terminal as below

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
To stop the ```lru-node-c``` container
```bash
docker stop lru-node-c
```
To remove the ```lru-node-c``` container
```bash
docker rm lru-node-c
```
