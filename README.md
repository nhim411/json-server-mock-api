# Mock api server with `json-server`

> A free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.


## About

Free fake API for testing and prototyping.

Website: [https://mock-api-demo.herokuapp.com](https://mock-api-demo.herokuapp.com/)

## Deploy (local)

- Requited: Node js environment [Node js](https://nodejs.org/en/)
- Clone this project
- Run step by step in terminal

```
npm install

node generate-data.js //optional: generate random data

npm run dev //start dev server
// Open in browser: https://localhost:3000/
```

## Usage
Getting a resource

```js
fetch('https://mock-api-demo.herokuapp.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
```
👇 Output
```js
{
  id: 1,
  title: '...',
  body: '...',
  userId: 1
}
```

Listing all resources
```js
fetch('https://mock-api-demo.herokuapp.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
```
👇 Output
```js
[
  { id: 1, title: '...' /* ... */ },
  { id: 2, title: '...' /* ... */ },
  { id: 3, title: '...' /* ... */ },
  /* ... */
  { id: 100, title: '...' /* ... */ },
];
```

Creating a resource
```js
fetch('https://mock-api-demo.herokuapp.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```
👇 Output
```js
{
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
}
```
Updating a resource
```js
fetch('https://mock-api-demo.herokuapp.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```
👇 Output
```js
{
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1
}
```
Patching a resource
```js
fetch('https://mock-api-demo.herokuapp.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```
👇 Output
```js
{
  id: 1,
  title: 'foo',
  body: '...',
  userId: 1
}
```

Deleting a resource
```js
fetch('https://mock-api-demo.herokuapp.com/posts/1', {
  method: 'DELETE',
});
```

Filtering resources
```js
// This will return all the posts that belong to the first user
fetch('https://mock-api-demo.herokuapp.com/posts?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json));
```


Listing nested resources
```js
// This is equivalent to /comments?postId=1
fetch('https://mock-api-demo.herokuapp.com/posts/1/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));
```

The available nested routes are:
- [/api/posts/1/comments](https://mock-api-demo.herokuapp.com/api/posts/1/comments)
- [/api/albums/1/photos](https://mock-api-demo.herokuapp.com/api/albums/1/photos)
- [/api/users/1/albums](https://mock-api-demo.herokuapp.com/api/users/1/albums)
- [/api/users/1/todos](https://mock-api-demo.herokuapp.com/api/users/1/todos)
- [/api/users/1/posts](https://mock-api-demo.herokuapp.com/api/users/1/posts)
---

## License

[MIT](LICENSE) License.