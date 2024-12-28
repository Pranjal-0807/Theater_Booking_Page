import React from "react";

const Button = ({ cssClass, btnText, handleClick, disabled }) => {
  return (
    <button
      className={cssClass ? cssClass : ""}
      onClick={handleClick}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default Button;
