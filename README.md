# JSON Server

JSON Server helps creating a full fake REST API with zero coding. Therefore, Front-end Developer don't need to wait for Back-end Developer to complete their API. Front-end Developer can create fake API to test first. [Get more information here](https://github.com/typicode/json-server).

## Installation

```
npm install -g json-server
```

## Start Json Server

```
json-server --watch db.json --port 5000
```

After starting json server, you would see Resources and Home link. JSON Server open on port 3000 by default.
If you would like to change port it has two ways:

1. Include `--port <port_number>` flag at the end of the command
2. Create `json-server.json` configuration file
   ```js
   {
     "port": 5000
   }
   ```

## GET Request

```js
const getAllPosts = async () => {
  const url = 'http://localhost:3000/posts';

  const res = await fetch(url);
  const posts = await res.json();
  console.log(posts);
};
```

## Get Request with Single Item

```js
const id = new URLSearchParams(window.location.search).get('id');

const getSinglePost = async () => {
  const url = 'http://localhost:3000/posts';

  const res = await fetch(`${url}/${id}`);
  const post = await res.json();
  console.log(post);
};
```

## Sort data via sending request

```js
// ascending
const url = 'http://localhost:3000/posts?_sort=likes';
// descending
const url = 'http://localhost:3000/posts?_sort=likes&_order=desc';
```

## POST Request

POST request make change to db.json like it is a database.

```js
const createPost = async () => {
  const post = {
    title: 'New World',
    body: 'A wonder full world cover with dark sky',
  };

  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: { 'Content-Type': 'application/json' },
  });
};
```

## DELETE Request

```js
const deletePost = async () => {
  await fetch('http://localhost:3000/posts/' + id, {
    method: 'DELETE',
  });
};
```

## Searching Data

```js
const searchPost = async (term) => {
  await fetch('http://localhost:3000/posts)

  // easy search with q argument
  // it will find the matched string inside data in db.json
  if (term) {
      uri += `&q=${term}`
  }

  ...
};
```
