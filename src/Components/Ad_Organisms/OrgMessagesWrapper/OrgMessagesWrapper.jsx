import React, { useState } from "react";
import classes from "./OrgMessageWrapper.module.css";
import MclMessageInput from "../../Ad_Molecules/MclMessageInput/MclMessageInput";
import AtmMessageBox from "../../Ad_Atoms/AtmMessageBox/AtmMessageBox";

const OrgMessagesWrapper = ({ btnName }) => {
  const [messageArr, setMessageArr] = useState([]);

  return (
    <div>
      <div className={classes.MessageInput}>
        <MclMessageInput
          btnName={btnName}
          messageArr={messageArr}
          setMessageArr={setMessageArr}
        />
      </div>
      {messageArr.map((message) => {
        return <AtmMessageBox message={message} />;
      })}
    </div>
  );
};

export default OrgMessagesWrapper;
