import { useState } from "react";
import "./styles.css";

const App = () => {
  const [classes, setClasses] = useState("red");
  const [innerTxt, setInnerTxt] = useState("blue");
  const onClickBtn = () => {
    setClasses((prev) => (prev === "red" ? "blue" : "red"));
    setInnerTxt((prev) => (prev === "Hi" ? "Bye" : "Hi"));
  };
  return (
    <button className={classes} onClick={onClickBtn}>
      {innerTxt}
    </button>
  );
};

export default App;
