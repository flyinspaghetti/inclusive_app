import React from 'react';
import './TextInput.css';

const TextInput = ({
  onInputChange,
  inputText,
  detectedWords,
  alternatives,
  onAlternativeClick,
  onSendClick,
  chatMessages
}) => {
  return (
    <div className="message-app">
      <div className="message-header">John Doe</div>
      <div className="message-list">
        {chatMessages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          onChange={onInputChange}
          value={inputText}
          className="text-input"
        />
        <button className="send-button" onClick={onSendClick}>
          Send
        </button>
      </div>
      <div className="suggestions">
        {detectedWords.map((word, index) => (
          <span
            key={index}
            className="suggestion"
            onClick={() => onAlternativeClick(index, alternatives[index])}
          >
            {`The word "${word}" might be offensive, use "${alternatives[index]}" instead`}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextInput;
