import React from "react";
import classes from "./AtmMessageBox.module.css";

const AtmMessageBox = ({ message }) => {
  return (
    <div className={classes.AtmMessageBox}>
      <div>{message}</div>
    </div>
  );
};
export default AtmMessageBox;
