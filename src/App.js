import React, { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput';
import { detectBadWords } from './badWords'; // Update the import

function App() {
  const [inputText, setInputText] = useState('');
  const [chatMessages, setChatMessages] = useState([]); // Add chatMessages state

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);
  };

  const handleAlternativeClick = (index, alternative) => {
    const words = inputText.split(' ');
    const wordToReplace = detectedWords[index];
    const updatedWords = words.map(word => (word === wordToReplace ? alternative : word));
    const newText = updatedWords.join(' ');
    setInputText(newText);
  };

  const handleSendClick = () => {
    if (inputText.trim() !== '') {
      setChatMessages([...chatMessages, inputText]);
      setInputText('');
    }
  };

  const { detectedWords, alternatives } = detectBadWords(inputText);

  return (
    <div className="App">
      <h1>Inclusive Language App</h1>
      <TextInput
        onInputChange={handleInputChange}
        inputText={inputText}
        detectedWords={detectedWords}
        alternatives={alternatives}
        onAlternativeClick={handleAlternativeClick}
        onSendClick={handleSendClick}
        chatMessages={chatMessages}   
      />
    </div>
  );
}

export default App;
