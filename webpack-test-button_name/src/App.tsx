import "./styles.css";
import React, { useState } from "react";

const App = () => {
  const [classes, setClasses] = useState("red");
  const [innerTxt, setInnerTxt] = useState("red");
  const onClickBtn = () => {
    setClasses((prev) => (prev === "red" ? "blue" : "red"));
    setInnerTxt((prev) => (prev === "red" ? "blue" : "red"));
  };
  return (
    <button className={classes} onClick={onClickBtn}>
      {innerTxt}
    </button>
  );
  // return <div>hello webpack</div>;
};

export default App;
