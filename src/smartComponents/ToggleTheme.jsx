import React from "react";
import Button from "../components/Button";

const ToggleTheme = ({ handleToggleTheme, theme }) => {
  return (
    <Button
      handleClick={handleToggleTheme}
      btnText="Toggle Theme"
      cssClass={`mt-4 px-6 py-2 rounded transition ${
        theme === "light"
          ? "bg-gray-400 text-black hover:bg-gray-500"
          : "bg-black text-white hover:bg-gray-800"
      }`}
    />
  );
};

export default ToggleTheme;
