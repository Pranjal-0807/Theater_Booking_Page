import React from "react";

const Heading = ({ cssClass, headingText }) => {
  return <h1 className={cssClass ? cssClass : ""}>{headingText}</h1>;
};

export default Heading;
