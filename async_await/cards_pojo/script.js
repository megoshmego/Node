// 1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck and console.log the value and the suit.
fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
  .then(response => response.json())
  .then(data => {
    const card = data.cards[0];
    console.log(`${card.value} of ${card.suit}`);
  })
  .catch(error => console.error(error));

// 2. Make a request to the same API to get one more card from the same deck.
fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
  .then(response => response.json())
  .then(data => {
    const card = data.cards[0];
    console.log(`${card.value} of ${card.suit}`);
  })
  .catch(error => console.error(error));

// 3. Once you have both cards, console.log the values and suits of both cards.
Promise.all([
  fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1'),
  fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
])
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(data => {
    const cards = data.map(response => response.cards[0]);
    cards.forEach(card => {
      console.log(`${card.value} of ${card.suit}`);
    });
  })
  .catch(error => console.error(error));


const button = document.getElementById('draw-card');
let deckId;

// Function to fetch a new deck
function fetchNewDeck() {
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => response.json())
    .then(data => {
      deckId = data.deck_id;
      button.disabled = false;
    })
    .catch(error => console.error(error));
}

// Function to draw a card from the deck
function drawCard() {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(response => response.json())
    .then(data => {
      const card = data.cards[0];
      console.log(`${card.value} of ${card.suit}`);
    })
    .catch(error => console.error(error));
}

// Event listener for the draw card button
