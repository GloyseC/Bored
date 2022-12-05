import React from "react";
import css from './ToggleSwitch.module.css';


  
const ToggleSwitch = ({ label }) => {
    const [darkMode, setDarkMode] = React.useState(false);

    const [btnName, setBtnName] = React.useState("Enable Dark mode");

    React.useEffect(() => {
      if (darkMode) {
        document.body.classList.add("dark");
        setBtnName(" Light ")
      } else {
        document.body.classList.remove("dark");
        setBtnName(" Dark ")
      }
    }, [darkMode]);


    

  return (
    <> <button className={`${css.h_btn}`} onClick={() => setDarkMode(!darkMode)}>{btnName}</button>
   
      </>
  );
};
  
export default ToggleSwitch;