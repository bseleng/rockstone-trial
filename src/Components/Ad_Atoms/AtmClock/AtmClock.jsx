import React, { useRef, useState } from "react";
import Typewriter from "typewriter-effect";

/**
 *  компонент который возвращает JSX с текущем временем в формате "ЧЧ : ММ : СС"
 *  либо анимацию "...", пока время не определено
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AtmClock = () => {
  const dateNow = new Date();

  const timeRef = useRef(null);
  const [time, setTime] = useState(null);

  /**
   * добавляет 0 слева, если длина строки меньше 2
   * @param {number} timeSegment - секунды, минуты или часы из объекта даты
   * @returns {string} - строка длиной в 2 символа, с лидирующим 0 при необходимости
   */
  const addForwardZero = (timeSegment) => {
    return timeSegment.toString().padStart(2, "0");
  };

  /**
   * получает секунды из объекта даты, добавляет 0, если значение меньше 10
   * @returns {string} -двузначное значение секунд
   */
  const getSeconds = () => {
    return addForwardZero(dateNow.getSeconds());
  };

  /**
   * получает минуты из объекта даты, добавляет 0, если значение меньше 10
   * @returns {string} -двузначное значение минут
   */
  const getMinutes = () => {
    return addForwardZero(dateNow.getMinutes());
  };

  /**
   * получает часы из объекта даты, добавляет 0, если значение меньше 10
   * @returns {string} -двузначное значение часов
   */
  const getHours = () => {
    return addForwardZero(dateNow.getHours());
  };

  /**
   *  собирает все элементы даты длиной из 2 символов в строку, разделённую ":"
   * @returns {string} текущее значение времени в формате "ЧЧ : ММ : СС"
   */
  const getCurrentTime = () => {
    return `${getHours()} : ${getMinutes()} : ${getSeconds()}`;
  };

  timeRef.current = getCurrentTime();
  setInterval(() => {
    setTime(timeRef.current);
  }, 1000);

  return (
    <>
      {!time
        ?
          <Typewriter
            options={{
              strings: '...',
              autoStart: true,
              cursor: "",
              loop: true,
              delay: 50,
              deleteSpeed: 50,
              pauseFor: 50,

        }}
      />
        :
          <div> {time}</div>}

    </>
  );
};
export default AtmClock;
