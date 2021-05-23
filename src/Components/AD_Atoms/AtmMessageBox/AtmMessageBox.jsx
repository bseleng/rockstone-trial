import React, { useRef } from "react";
import classes from "./AtmMessageBox.module.css";
import Typewriter from "typewriter-effect";
import TypeWriterEffect from "react-typewriter-effect";

const AtmMessageBox = ({ message }) => {
  const msgBoxRef = useRef(null);
  return (
    <div className={classes.AtmMessageBox} ref={msgBoxRef}>
      <Typewriter
        options={{
          strings: message,
          autoStart: true,
          // loop: true,
          cursor: "",
          delay: 50,
        }}
      />
      {/*<Typewriter*/}
      {/*  onInit={(typewriter) => {*/}
      {/*    typewriter*/}
      {/*      .typeString(message)*/}
      {/*      .callFunction(() => {*/}
      {/*        console.log("String typed out!");*/}
      {/*      })*/}
      {/*      .pauseFor(2500)*/}
      {/*      .deleteAll()*/}
      {/*      .callFunction(() => {*/}
      {/*        console.log("All strings were deleted");*/}
      {/*      })*/}
      {/*      .start()*/}
      {/*      .stop();*/}
      {/*  }}*/}
      {/*/>*/}
      <br />
      {/*<TypeWriterEffect*/}
      {/*  textStyle={{ fontFamily: "Red Hat Display", fontSize: "1rem" }}*/}
      {/*  startDelay={10}*/}
      {/*  cursorColor="white"*/}
      {/*  text={message}*/}
      {/*  typeSpeed={50}*/}
      {/*  hideCursorAfterText={true}*/}
      {/*/>*/}
      {/*<div>{message}</div>*/}
    </div>
  );
};
export default AtmMessageBox;
