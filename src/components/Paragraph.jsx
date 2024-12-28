import React from "react";

const Paragraph = ({ cssClass, paraText }) => {
  return <p className={cssClass ? cssClass : ""}>{paraText}</p>;
};

export default Paragraph;
