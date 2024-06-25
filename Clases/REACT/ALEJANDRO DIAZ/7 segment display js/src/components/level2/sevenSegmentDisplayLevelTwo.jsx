import React, { useState } from "react";
import { Button } from "../button/button.jsx";
import { SevenSegmentDisplay } from "../level1/sevenSegmentDisplay.jsx";
import "../../assets/style/button.css";

export const SevenSegmentDisplayLevelTwo = ({ text }) => {
  const [count, setCount] = useState(0);

  const sum = () => {
    setCount((prev) => (prev === 9 ? 0 : prev + 1));
  };
  const res = () => {
    setCount((prevCount) => (prevCount === 0 ? 9 : prevCount - 1));
  };
  return (
    <>
      <div className="container">
        <SevenSegmentDisplay digit={count} text={text} />
        <Button res={res} sum={sum} />
      </div>
    </>
  );
};
