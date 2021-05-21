import React from "react";
import OrgMessagesWrapper from "../../Ad_Organisms/OrgMessagesWrapper/OrgMessagesWrapper";
import classes from "./PgMessageTime.module.css";
import SwipeableViews from "react-swipeable-views";
import AtmClock from "../../Ad_Atoms/AtmClock/AtmClock";

const PgMessageTime = () => (
  <SwipeableViews>
    <div className={Object.assign({}, classes.Base)}>
      <OrgMessagesWrapper btnName={"Отправить"} />
    </div>
    <div className={Object.assign({}, classes.Base)}>
      Текущее время
      <AtmClock/>
    </div>
  </SwipeableViews>
);

export default PgMessageTime;
