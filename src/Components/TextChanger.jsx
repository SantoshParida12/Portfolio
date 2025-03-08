import React, { useState, useEffect } from "react";

const TextChanger = () => {
  const texts = ["Hi, I'm Santosh", "Hi! I'm Santosh", "I build amazing things"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length + 5) {
        setIsForward(false);
      }

      if (endValue < 1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length); // Fix: Cycle through texts
      }
    }, 100); // Fix: Slower speed for better readability

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="transition-ease duration-300 text-white text-4xl mb-4">{currentText}</div>;
};

export default TextChanger;
