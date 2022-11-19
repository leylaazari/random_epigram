import { useState, useEffect } from "react";
import { CountdownProps } from "src/common/interfaces";

const intial = 10;

const CountDownTimer = ({ handleResetTimer }: CountdownProps) => {
  const [countDown, setCountDown] = useState(intial);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countDown <= 0) {
        handleResetTimer();
        setCountDown(intial);
      } else {
        setCountDown(countDown - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown]);

  return <div className="refresh-after">Refresh After: {countDown} s</div>;
};

export default CountDownTimer;
