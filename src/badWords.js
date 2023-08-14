const badWordsAndAlternatives = {
  fuck: 'heck',
  cunt: 'bad person',
  twink: 'gay',
  // ...
};

export function detectBadWords(inputText) {
  const detectedWords = [];
  const alternatives = [];
  
  Object.keys(badWordsAndAlternatives).forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    if (regex.test(inputText)) {
      detectedWords.push(word);
      alternatives.push(badWordsAndAlternatives[word]);
    }
  });
  
  return { detectedWords, alternatives };
}

export default badWordsAndAlternatives;
