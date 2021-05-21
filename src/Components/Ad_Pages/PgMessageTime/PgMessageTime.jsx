import React, {useRef, useState} from "react";
import OrgMessagesWrapper from "../../Ad_Organisms/OrgMessagesWrapper/OrgMessagesWrapper";
import classes from "./PgMessageTime.module.css";
import SwipeableViews from "react-swipeable-views";
import AtmClock from "../../Ad_Atoms/AtmClock/AtmClock";

const PgMessageTime = () => {
  const messageRef = useRef(0)
  const timeRef = useRef(0)
  const testRef = useRef(0)
  const [yOffset, setYOffset] =  useState(0)
  const getYOffset = () => {
    console.log('🐞 messages', messageRef.current.scrollTop)
  }


  const getYOffset2 = () => {
    console.log('🐞 time 2', testRef.current.scrollTop)
  }

  return (
    <div className={classes.Container}>
      <SwipeableViews >
        <div className={`${classes.Base} ${classes.Messages}`}  ref={messageRef} onScroll={getYOffset}>
          <OrgMessagesWrapper btnName={"Отправить"} />
        </div>
        <div className={`${classes.Base}`} ref={timeRef}>
          Текущее время
          <AtmClock/>
        </div>
        <div className={`${classes.Base} ${classes.Time}`} ref={testRef} onScroll={getYOffset2}>
          Текущее время 2
          <AtmClock/>
          Текущее время 3
          <AtmClock/>
          Текущее время 3
          <AtmClock/>
          Текущее время 3
          <AtmClock/>
          Текущее время 4
          <AtmClock/>
          Текущее время 5
          <AtmClock/>
          Текущее время 6
          <AtmClock/>
          Текущее время 7
          <AtmClock/>
          Текущее время 8
          <AtmClock/>
          Текущее время 9
          <AtmClock/>
          Текущее время 10
          <AtmClock/>
          Текущее время 11
          <AtmClock/>
          Текущее время 12
          <AtmClock/>
        </div>
      </SwipeableViews>

    </div>
  )
};

export default PgMessageTime;
