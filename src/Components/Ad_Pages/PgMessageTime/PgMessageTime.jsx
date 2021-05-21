import React, {useState} from "react";
import OrgMessagesWrapper from "../../Ad_Organisms/OrgMessagesWrapper/OrgMessagesWrapper";
import classes from "./PgMessageTime.module.css";
import SwipeableViews from "react-swipeable-views";
import AtmClock from "../../Ad_Atoms/AtmClock/AtmClock";

const PgMessageTime = () => {
  const [yOffset, setYOffset] =  useState(0)
  const getYOffset = () => {
    console.log('🐞 window.scrollY', window.scrollY)
  }


  return (
    <div >
      <SwipeableViews ignoreNativeScroll={true}>
        <div className={Object.assign({}, classes.Base)}>
          <OrgMessagesWrapper btnName={"Отправить"} onScroll={getYOffset}/>
        </div>
        <div className={Object.assign({}, classes.Base)}>
          Текущее время
          <AtmClock/>
        </div>
        <div className={Object.assign({}, classes.Base)}>
          Текущее время 2
          <AtmClock/>
        </div>
      </SwipeableViews>

    </div>
  )
};

export default PgMessageTime;
