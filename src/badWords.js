const badWords = {
  fuck: 'heck',
  cunt: 'bad person',
  'a twink': 'gay',
  'a bitch': 'a terrible woman'
  // ...
};

export function detectBadWords(inputText) {
  const inputLower = inputText.toLowerCase();
  const detectedWords = [];
  const alternatives = [];
  
 for (const word in badWords) {
    if (inputLower.includes(word)) {
      detectedWords.push(word);
      alternatives.push(badWords[word]);
    }
  }

  return { detectedWords, alternatives };
}

export default badWords;
