import { useEffect, useState } from "react";

const useCounter = (direction) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === "aumentar" || !direction) {
        setCounter((prevCounter) => prevCounter + 1);
      } else if (direction === "diminuir") {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [direction]);

  return counter;
};

export default useCounter;