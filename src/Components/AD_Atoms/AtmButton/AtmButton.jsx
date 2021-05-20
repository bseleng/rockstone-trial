import React from "react";

const AtmButton = ({ name, onCllick }) => {
  return <button onClick={onCllick}> {name}</button>;
};

export default AtmButton;
