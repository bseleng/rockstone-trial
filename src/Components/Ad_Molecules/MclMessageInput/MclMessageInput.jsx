import React, { useEffect, useState } from "react";
import classes from "./MclMessageInput.module.css";
import AtmTextArea from "../../Ad_Atoms/AtmTeaxtArea/AtmTextArea";
import AtmButton from "../../Ad_Atoms/AtmButton/AtmButton";

const MclMessageInput = ({ btnName, messageArr, setMessageArr }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message !== "") {
      setMessageArr((prev) => [...prev, `${message}`]);
      setMessage("");
      // setMessage(null);
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
      <AtmButton name={btnName} message={message} onCllick={sendMessage} />
    </div>
  );
};

export default MclMessageInput;
