import React from "react";

/**
 * компонент, который записывает сообщение, втом числе на ENTER
 *
 * @param {string} message -вводимое сообщение
 * @param {callback} setMessage - хук для записи сообщения
 * @param {callback} sendMessage - ф-я для отправки сообщения
 * @returns {JSX.Element}
 * @constructor
 */
const AtmTextArea = ({ message, setMessage, sendMessage }) => {
  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  const handleEnter = (event) => {
    if (event.charCode === 13 && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };
  return (
    <div>
      {" "}
      <textarea
        onChange={handleInput}
        value={message}
        placeholder={"Введи сообщение"}
        onKeyPress={handleEnter}
      />
    </div>
  );
};

export default AtmTextArea;
