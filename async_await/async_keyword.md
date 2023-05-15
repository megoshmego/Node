The transcript discusses async functions and the async/await keywords in JavaScript. Here is a simple demonstration of the concepts:

In JavaScript, an async function is created by placing the `async` keyword in front of a function declaration. For example:
```javascript
async function sayHi() {
  return 'Hello';
}
```
When an async function is called, it always returns a promise. In the example above, calling `sayHi()` will return a promise that resolves to the string 'Hello'. This allows you to work with async code in a more synchronous-looking manner.

You can use the `await` keyword inside an async function to wait for a promise to resolve before proceeding with the code execution. Here's an example:
```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
```
In this example, the `fetchData` function uses the `await` keyword to wait for the `fetch` function to return a response. Then it waits for the response to be converted to JSON before returning the data. By using `await`, you can write code that appears to be executed sequentially, even though it's dealing with asynchronous operations.

The combination of async functions and the await keyword makes it easier to handle asynchronous code and perform tasks in a more synchronous-like manner.

Note: The provided transcript does not include the complete content, so the demonstration is based on the mentioned concepts.