import React from 'react';
import './TextInput.css';

const TextInput = ({ onInputChange, inputText, detectedWords, alternatives, onAlternativeClick }) => {
  return (
    <div>
      <input
        type="text"
        onChange={onInputChange}
        className="text-input"
        value={inputText}
      />
      <div className="suggestions">
        {detectedWords.length > 0 && (
          <p className="suggestion-message">
            This might be offensive. Use the following alternative instead:
          </p>
        )}
        {detectedWords.map((word, index) => (
          <span key={word} className="suggestion">
            <span className="offensive-word">{word}</span>
            <span
              className="alternative"
              onClick={() => onAlternativeClick(index, alternatives[index])}
            >
              ({alternatives[index]})
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextInput;
