import React from "react";

const Seat = ({ handleClick, cssClass, divText }) => {
  return (
    <div onClick={handleClick} className={cssClass}>
      {divText}
    </div>
  );
};

export default Seat;
