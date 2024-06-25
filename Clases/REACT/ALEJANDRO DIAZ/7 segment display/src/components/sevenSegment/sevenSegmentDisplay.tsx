import React, { useState, useEffect } from "react";

export const SevenSegmentDisplay = ({ text }: { text: string }) => {
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    setActiveButton(text === undefined ? "defaultId" : text);
  }, [text]);

  const displayText = (): string => {
    return activeButton === `${text}` ? "verdadero" : "falso";
  };
  console.log(activeButton)
  return (
    <>
      <button
        id={activeButton}
        onClick={(e) => {
          setActiveButton(e.target.id);
        }}
      >
        {displayText()}
        {text}
      </button>
    </>
  );
};