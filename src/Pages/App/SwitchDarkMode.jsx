import React, { useContext }  from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "./App";

const SwitchDarkMode = () => {
  const theme = useContext(ThemeContext);

  function changeColor() {
    theme.setDark((prevDark) => !prevDark);
  }
  return (
    <>
      {theme.dark ? <BsFillSunFill id="sun" /> : <BsFillMoonFill id="moon" />}
      <label class="switch">
        <input type="checkbox" onChange={changeColor} />
        <span class="slider round"></span>
      </label>
    </>
  );
};

export default SwitchDarkMode;
