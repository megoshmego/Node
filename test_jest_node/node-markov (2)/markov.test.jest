const { MarkovMachine } = require('./markov');

test('MarkovMachine.words is array of words without empty strings', () => {
  let mm = new MarkovMachine("the cat in the hat");

  expect(mm.words).toEqual(["the", "cat", "in", "the", "hat"]);
});

test('MarkovMachine.chains is a map', () => {
  let mm = new MarkovMachine("the cat in the hat");

  expect(mm.chains).toBeInstanceOf(Map);
});

test('MarkovMachine.makeText generates text of the correct length', () => {
  let mm = new MarkovMachine("the cat in the hat");

  let text = mm.makeText(50);

  expect(text.split(' ').length).toBeLessThanOrEqual(50);
});

test('MarkovMachine.makeText generates text that contains only words from the input text', () => {
  let inputText = "the cat in the hat";
  let mm = new MarkovMachine(inputText);

  let text = mm.makeText(50);
  let words = text.split(' ');

  for (let word of words) {
    expect(inputText.includes(word)).toBe(true);
  }
});
