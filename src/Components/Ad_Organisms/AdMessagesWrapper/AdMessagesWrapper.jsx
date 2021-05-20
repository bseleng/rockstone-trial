import React, { useState } from "react";
import AdMessageInput from "../../Ad_Molecules/AdMessageInput/AdMessageInput";

const AdMessagesWrapper = ({ btnName }) => {
  const [messageArr, setMessageArr] = useState([]);



  return (
    <div>
      <AdMessageInput
        btnName={btnName}
        messageArr={messageArr}
        setMessageArr={setMessageArr}
      />
      {messageArr.map((message) => {
        return <div > {message} </div>;
      })}
    </div>
  );
};

export default AdMessagesWrapper;
