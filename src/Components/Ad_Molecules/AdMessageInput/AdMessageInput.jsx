import React, { useEffect, useState } from "react";
import classes from "./AdMessageInput.module.css";
import AdTextArea from "../../Ad_Atoms/AdTeaxtArea/TextArea";
import AdButton from "../../Ad_Atoms/AdButton/AdButton";

const AdMessageInput = ({ btnName, messageArr, setMessageArr }) => {
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
      <AdTextArea message={message} setMessage={setMessage} />
      <AdButton name={btnName} message={message} onCllick={sendMessage} />
    </div>
  );
};

export default AdMessageInput;
