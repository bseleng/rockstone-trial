import React, { useRef, useState } from "react";

const AtmClock = ({ setTimestamp }) => {
  const dateNow = new Date();

  const timeRef = useRef(null);
  const [time, setTime] = useState(timeRef.current);

  const addForwardZero = (timeSegment) => {
    return timeSegment.toString().padStart(2, "0");
  };
  const getSeconds = () => {
    return addForwardZero(dateNow.getSeconds());
  };
  const getMinutes = () => {
    return addForwardZero(dateNow.getMinutes());
  };
  const getHours = () => {
    return addForwardZero(dateNow.getHours());
  };
  const getCurrentTime = () => {
    return `${getHours()} : ${getMinutes()} : ${getSeconds()}`;
  };

  timeRef.current = getCurrentTime();
  setInterval(() => {
    setTime((seconds) => timeRef.current);
  }, 1000);

  if (!time) {
    return null;
  }

  return (
    <>
      <div> {time}</div>
    </>
  );
};
export default AtmClock;
