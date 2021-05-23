import React, { useState } from "react";
import classes from "./OrgMessageWrapper.module.css";
import MclMessageInput from "../../Ad_Molecules/MclMessageInput/MclMessageInput";
import AtmMessageBox from "../../Ad_Atoms/AtmMessageBox/AtmMessageBox";

const OrgMessagesWrapper = ({ btnName, timestamp }) => {
  const [messageArr, setMessageArr] = useState([]);

  return (
    <div className={classes.OrgMessageWrapper}>
      <div className={classes.InputBar}>
        <div className={classes.MessageInput}>
          <MclMessageInput
            btnName={btnName}
            messageArr={messageArr}
            setMessageArr={setMessageArr}
          />
        </div>
      </div>
      {messageArr.map((message, index) => {
        return (
          <AtmMessageBox
            key={`msg-${index}`}
            message={message}
            timestamp={timestamp}
          />
        );
      })}
    </div>
  );
};

export default OrgMessagesWrapper;
