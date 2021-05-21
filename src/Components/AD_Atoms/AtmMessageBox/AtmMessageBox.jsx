import React from "react";
import classes from "./AtmMessageBox.module.css";

const AtmMessageBox = ({ message }) => {
  return <div className={classes.AtmMessageBox}>{message}</div>;
};
export default AtmMessageBox;
