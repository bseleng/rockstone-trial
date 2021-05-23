import React from "react";
import classes from "./AtmMessageBox.module.css";

const AtmMessageBox = ({ message, timestamp }) => {
  return (
    <div className={classes.AtmMessageBox}>
      <div>{timestamp}</div>
      <div>{message}</div>
    </div>
  );
};
export default AtmMessageBox;
