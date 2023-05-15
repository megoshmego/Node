Important Terms:

1. **Testing in Node**: Testing is a crucial part of any software development process. In the context of Node.js, several tools are available to conduct tests, one of them being Jest.

2. **Jest**: Jest is an open-source testing platform for JavaScript that was originally put out by Facebook. It's best known for testing React applications, but is also widely used for testing other JavaScript apps. Jest is built on top of Jasmine.

3. **Jasmine**: Jasmine is another JavaScript testing framework. Jest was built on top of Jasmine.

4. **Unit tests**: These are tests that verify the functionality of a specific section of code, typically at the function level.

5. **Matchers**: In the context of testing, matchers are methods that allow you to validate different things. For example, to check if two things are equal, if one thing is greater than another, etc.

6. **npm (Node Package Manager)**: npm is the default package manager for the JavaScript runtime environment Node.js. It is used to install Node.js programs from the npm registry.

7. **Global Install**: When a package is installed globally, it's made available to all the developers on the system. This is as opposed to a local install which is only available in the directory it was installed.

Important Ideas:

1. **Jest is a testing tool**: Jest was initially created for testing React applications, but it has since been adopted for testing any JavaScript codebase. Its philosophy is to make testing JavaScript as easy as possible.

2. **Install Jest globally using npm**: To install Jest, you use the command `npm i --global jest`. This installs Jest globally, meaning you can use it in any project on your computer.

3. **Jest provides a command-line interface**: Once Jest is installed globally, you can run the `jest` command from the terminal to run your tests. This is a big part of why it's often installed globally - to provide a universal command for running tests.

Demonstration:

Let's consider a simple JavaScript function that adds two numbers.

```javascript
function add(a, b) {
    return a + b;
}
module.exports = add;
```

Now, let's write a unit test for this function using Jest. We'll create a new file named `add.test.js`.

```javascript
const add = require('./add');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});
```

In the test file, we first import the function we want to test using `require`. Then we use the `test` function provided by Jest to define a test. The `test` function takes two arguments: a string description of the test, and a callback function which contains our test logic.

In our test logic, we use `expect` and a matcher (in this case, `toBe`) to assert something about our code. Here, we're asserting that when we call `add(1, 2)`, we expect the result to be `3`.

Once we have written our test, we can run it by typing `jest` in the command line from our project's directory. This will give us an output indicating whether our tests passed or failed.