Certainly! Here are code snippets to help you learn the material:

1. **Node.js**:

```javascript
console.log('Hello, Node.js!');
```

2. **Node Package Manager (npm)**:

```bash
# Install a package using npm
npm install packageName

# Use a package in your Node.js file
const packageName = require('packageName');
```

3. **Server-side JavaScript**:

```javascript
// Example server using the Express.js framework
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, server-side JavaScript!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

4. **Modules**:

```javascript
// File: math.js
module.exports = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  }
};

// File: index.js
const math = require('./math');

console.log(math.add(2, 3)); // Output: 5
```

5. **CommonJS Modules**:

```javascript
// File: math.js
exports.add = function (a, b) {
  return a + b;
};

exports.subtract = function (a, b) {
  return a - b;
};

// File: index.js
const math = require('./math');

console.log(math.add(2, 3)); // Output: 5
```

6. **require**:

```javascript
const fs = require('fs');
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);
```

7. **module.exports**:

```javascript
// File: greetings.js
module.exports = 'Hello, World!';

// File: index.js
const greetings = require('./greetings');

console.log(greetings); // Output: Hello, World!
```

8. **Async methods**:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

9. **Promise**:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    if (/* condition */) {
      resolve('Data fetched successfully');
    } else {
      reject('Error occurred');
    }
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

10. **Axios**:

```javascript
const axios = require('axios');

axios.get('https://api.example.com/data')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

11. **Express.js**:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

12. **Environment variables**:

```javascript
const apiKey = process.env.API_KEY;
console.log(apiKey);
```

13. **Middleware**:

```javascript
// Middleware function
function logger(req, res, next) {
  console.log(`Received ${req.method} request for ${req