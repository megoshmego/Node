**Important Terms:**

1. Promise: A JavaScript object that links the producing code and the consuming code together. In other words, a Promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

2. .then(): A Promise method used to schedule a callback function to be run once the Promise resolves.

3. .catch(): A Promise method used to schedule a callback function to be run if the Promise rejects.

4. Resolve: When the outcome of the promise is successful, it is said to be "resolved." This is also the function used to indicate the successful completion of the Promise.

5. Reject: When the outcome of the Promise fails, it is said to be "rejected." This is also the function used to indicate the unsuccessful completion of the Promise.

6. setTimeout(): A JavaScript method that calls a function or evaluates an expression after a specified number of milliseconds.

**Important Ideas:**

1. Creation of a Promise: A Promise object is created using the `new Promise` syntax. This Promise takes a single function as its argument. This function, in turn, accepts two arguments - typically referred to as `resolve` and `reject`.

2. Promise Resolution: If the Promise is successful (i.e., it resolves), the `.then()` method is invoked. If the Promise fails (i.e., it rejects), the `.catch()` method is invoked.

3. Using Promises: The speaker demonstrates a way to use Promises to handle asynchronous tasks in JavaScript, such as waiting for a certain period of time before executing a function.

**Demonstration of Concepts:**

Let's take a look at a simple JavaScript Promise:

```javascript
let promise = new Promise(function(resolve, reject) {
  // an asynchronous operation goes here
  setTimeout(() => resolve("Promise is resolved!"), 1000); // wait 1 sec, then resolve the promise
});

// using .then to schedule what happens when the promise resolves
promise.then(
  result => console.log(result), // if the promise resolves, it will log "Promise is resolved!"
  error => console.log(error) // if the promise rejects, it will log the error
);
```

In the code above, we create a new Promise that resolves after 1 second. Then, we use the `.then()` method to schedule a function to be run once the Promise resolves. If the Promise successfully completes, it will log "Promise is resolved!" to the console. If there's an error and the Promise rejects, it will log the error message.

In the speaker's example, they are using Promises to handle an asynchronous task - changing the color of a text header after a delay. The speaker uses `setTimeout()` to create the delay, and then uses a Promise to handle the asynchronous task. The Promise is resolved once the color has been changed, triggering the `.then()` method. The speaker demonstrates that the Promise can be returned immediately, and the `.then()` method can be used to schedule what happens next, after the Promise is resolved or rejected.
