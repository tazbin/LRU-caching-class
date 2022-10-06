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
To build docker image
```bash
docker compose build --no-cache
```

To run he containers in detached mode (wait for a while for database connecton)
```bash
docker compose up -d
```

To view running containers
```bash
docker container ps
```

To view API logs
```bash
docker logs lru-cache-c
```

To run tests, first enter within the API container
```bash
docker exec -it lru-cache-c /bin/sh
```
Then, run this command to execute tests
```bash
npm test
```
To exit from API container, press ```CTRL + D``` on terminal

To stops the containers
```bash
docker compose down
```

