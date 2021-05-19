import React from "react";

const AdButton = ({ name, onCllick }) => {
  return <button onClick={onCllick}> {name}</button>;
};

export default AdButton;
