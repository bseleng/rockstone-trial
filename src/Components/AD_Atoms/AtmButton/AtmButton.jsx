import React from "react";

/**
 *  компонент базовой кнопки
 *
 * @param {string} name - отображаемое название кнопки
 * @param {callback} onClick - действие по клику на кнопку
 * @returns {JSX.Element}
 * @constructor
 */
const AtmButton = ({ name, onClick }) => {
  return <button onClick={onClick}> {name}</button>;
};

export default AtmButton;
