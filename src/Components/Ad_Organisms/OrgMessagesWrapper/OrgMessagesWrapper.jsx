import React, { useState } from "react";
import classes from "./OrgMessageWrapper.module.css";
import MclMessageInput from "../../Ad_Molecules/MclMessageInput/MclMessageInput";
import AtmMessageBox from "../../Ad_Atoms/AtmMessageBox/AtmMessageBox";

/**
 * Компонент, который выводит блок ввода сообщения и обрабатывает массив сообщений для вывода
 * @param {string} btnName - название кнопки
 * @returns {JSX.Element}
 * @constructor
 */
const OrgMessagesWrapper = ({ btnName }) => {
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
        return <AtmMessageBox key={`msg-${index}`} message={message} />;
      })}
    </div>
  );
};

export default OrgMessagesWrapper;
