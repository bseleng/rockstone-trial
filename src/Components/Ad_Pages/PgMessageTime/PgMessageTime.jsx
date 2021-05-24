import React, { useRef, useState } from "react";
import OrgMessagesWrapper from "../../Ad_Organisms/OrgMessagesWrapper/OrgMessagesWrapper";
import classes from "./PgMessageTime.module.css";
import SwipeableViews from "react-swipeable-views";
import AtmClock from "../../Ad_Atoms/AtmClock/AtmClock";

const PgMessageTime = () => {
  const messageRef = useRef(0);
  const timeRef = useRef(0);

  const [offsetY, setOffsetY] = useState({
    0: messageRef.current,
    1: timeRef.current,
  });

  const getOffsetY = (index) => {
    switch (index) {
      case "0":
        setOffsetY((offsetY) => ({
          ...offsetY,
          ["0"]: messageRef.current.scrollTop,
        }));
        break;
      case "1":
        setOffsetY((offsetY) => ({
          ...offsetY,
          ["1"]: timeRef.current.scrollTop,
        }));
        break;
      default:
        return;
    }
  };

  const testChange = (index) => {
    switch (index) {
      case 0:
        messageRef.current.scrollTop = offsetY["0"];
        break;
      case 1:
        timeRef.current.scrollTop = offsetY["1"];
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <SwipeableViews
        enableMouseEvents={true}
        onChangeIndex={(index, indexLatest) => testChange(index, indexLatest)}
      >
        <div
          className={`${classes.Base} ${classes.Messages}`}
          ref={messageRef}
          onScroll={() => getOffsetY("0")}
        >
          <OrgMessagesWrapper btnName={"Отправить"} />
        </div>
        <div
          className={`${classes.Base} ${classes.Time}`}
          ref={timeRef}
          onScroll={() => getOffsetY("1")}
        >
          Текущее время
          <AtmClock />
        </div>
      </SwipeableViews>
    </div>
  );
};

export default PgMessageTime;
