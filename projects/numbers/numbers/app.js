// Part 1: Number Facts using Promises

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
  
  // Function to get multiple number facts using Promise.all
  function getMultipleNumberFacts(numbers) {
    const promises = numbers.map(number => getNumberFact(number));
    return Promise.all(promises);
  }
  
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
  