Of course! I'll break down the script for you and explain each part in detail.

```javascript
// Function to make a request to the Numbers API and get a fact about a number
function getNumberFact(number) {
  return new Promise((resolve, reject) => {
    fetch(`http://numbersapi.com/${number}?json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error fetching number fact');
        }
      })
      .then(data => {
        resolve(data.text);
      })
      .catch(error => {
        reject(error);
      });
  });
}
```

This is a function named `getNumberFact` that takes a `number` parameter. It returns a promise. Inside the promise, it uses the `fetch` function to make a request to the Numbers API. The URL includes the `number` parameter, and `?json` is appended to indicate that we want to receive the response in JSON format.

The `fetch` function returns a promise that resolves with the response. We use the `.then()` method to handle the response. If the response is successful (status code 200), we call the `json()` method on the response object to parse the response as JSON. This returns another promise that resolves with the JSON data.

If there is an error with the response (status code other than 200), we throw an error using the `throw` statement. This will trigger the `catch` block of the promise chain.

The next `.then()` block handles the resolved JSON data. In this case, it extracts the `text` property from the data and resolves the outer promise with that value.

If there is an error during the request or any of the promise chain, the `catch` block will be executed, and the outer promise will be rejected with the error.

```javascript
// Function to get multiple number facts using Promise.all
function getMultipleNumberFacts(numbers) {
  const promises = numbers.map(number => getNumberFact(number));
  return Promise.all(promises);
}
```

This is a function named `getMultipleNumberFacts` that takes an array of `numbers` as a parameter. Inside the function, we use the `map` method to create an array of promises. For each `number` in the input array, we call the `getNumberFact` function, which returns a promise. This creates an array of promises that fetch facts about each number.

We then use `Promise.all(promises)` to wait for all the promises to be resolved. This returns a new promise that resolves with an array of the resolved values from the input promises.

```javascript
// Get 4 facts on your favorite number (replace 'your_favorite_number' with your actual favorite number)
const favoriteNumber = 'your_favorite_number';
getMultipleNumberFacts([favoriteNumber, favoriteNumber, favoriteNumber, favoriteNumber])
  .then(facts => {
    // Display the facts on the page
    facts.forEach(fact => {
      const factElement = document.createElement('p');
      factElement.textContent = fact;
      document.body.appendChild(factElement);
    });
  })
  .catch(error => {
    console.error(error);
  });
```

In this part, we define a constant variable `favoriteNumber` and set it to the string `'your_favorite_number'`. You should replace this with your actual favorite number.

We then call the `getMultipleNumberFacts` function, passing an array with four instances of `favoriteNumber`. This will fetch four facts about the favorite number.

The `.then()` block handles the resolved value, which is an array of facts. Inside the block, we use the `forEach` method to iterate over