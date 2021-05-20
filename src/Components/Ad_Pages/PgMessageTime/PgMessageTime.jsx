import React from "react";
import OrgMessagesWrapper from "../../Ad_Organisms/OrgMessagesWrapper/OrgMessagesWrapper";
import classes from "./PgMessageTime.module.css";
import SwipeableViews from "react-swipeable-views";

const PgMessageTime = () => (
  <SwipeableViews>
    <div className={Object.assign({}, classes.Base)}>
      <OrgMessagesWrapper btnName={"Отправить"} />
    </div>
    <div className={Object.assign({}, classes.Base)}> it's a clock</div>
  </SwipeableViews>
);

export default PgMessageTime;
