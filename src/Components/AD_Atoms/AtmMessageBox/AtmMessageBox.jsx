import React from "react";
import classes from "./AtmMessageBox.module.css";
import Typewriter from "typewriter-effect";

/**
 * компонент, который посимвольно выводит сообщение
 *
 * @param {string} message - текст сообщения
 * @returns {JSX.Element}
 * @constructor
 */
const AtmMessageBox = ({ message }) => {
  return (
    <div className={classes.AtmMessageBox} >
      <Typewriter
        options={{
          strings: message,
          autoStart: true,
          cursor: "",
          delay: 50,
        }}
      />
    </div>
  );
};
export default AtmMessageBox;
