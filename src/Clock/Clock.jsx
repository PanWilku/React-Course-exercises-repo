import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}: ${padZero(minutes)}: ${padZero(seconds)} ${padZero(meridem)}`;
  }

  function padZero(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  return (
    <>
      <p>{formatTime()}</p>
    </>
  );
}

export default Clock;
