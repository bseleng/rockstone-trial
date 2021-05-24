import React, { useEffect, useState } from "react";
import classes from "./MclMessageInput.module.css";
import AtmTextArea from "../../Ad_Atoms/AtmTeaxtArea/AtmTextArea";
import AtmButton from "../../Ad_Atoms/AtmButton/AtmButton";

/**
 * компонент, который содедржит логику отправки сообщения и ререндера при изменении массива сообщений
 *
 * @param  {string} btnName - отображаемое название кнопки
 * @param {Object[]} messageArr - массив сообщений для вывода
 * @param {callback} setMessageArr - ф-я для изменения массива сообщений
 * @returns {JSX.Element}
 * @constructor
 */
const MclMessageInput = ({ btnName, messageArr, setMessageArr }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message !== "") {
      setMessageArr((prev) => [...prev, `${message}`]);
      setMessage("");
    } else {
      alert("Сообщение не может быть пустым");
    }
  };

  useEffect(() => {}, [messageArr]);

  return (
    <div className={classes.AdMessageInput}>
      <AtmTextArea
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
      <AtmButton name={btnName} message={message} onClick={sendMessage} />
    </div>
  );
};

export default MclMessageInput;
