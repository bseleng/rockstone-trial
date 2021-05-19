import React from "react";

const AdTextArea = ({ message, setMessage }) => {
  const handleInput = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      {" "}
      <textarea
        onChange={handleInput}
        // defaultValue={message}
        value={message}
        placeholder={"Введи сообщение"}
      />
    </div>
  );
};

export default AdTextArea;
