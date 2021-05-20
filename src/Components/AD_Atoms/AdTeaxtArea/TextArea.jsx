import React from "react";

const AdTextArea = ({ message, setMessage, sendMessage }) => {
  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  const handleEnter = event => {
    if(event.charCode === 13 && !event.shiftKey) {
      event.preventDefault()
      sendMessage()
    }
  }
  return (
    <div>
      {" "}
      <textarea
        onChange={handleInput}
        // defaultValue={message}
        value={message}
        placeholder={"Введи сообщение"}
        onKeyPress={handleEnter}
      />
    </div>
  );
};

export default AdTextArea;
