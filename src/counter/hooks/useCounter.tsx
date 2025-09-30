import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSubtrac = () => {
    if (counter > 1) setCounter((prevState) => prevState - 1);
  };
  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    //Values
    counter,

    //Methos /Actions
    handleAdd,
    handleSubtrac,
    handleReset,
  };
};
