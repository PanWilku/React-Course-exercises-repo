import { useState } from "react";
import styles from "./Event.Button.module.css";
import { PropTypes } from "prop-types";

function EventButton({ inputLength }) {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const decrement = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  const reset = () => {
    setNumber(0);
  };

  return (
    <div className={styles["border"]}>
      <h1 className={styles["number"]}>{number}</h1>
      <h1 className={styles["number"]}>{inputLength}</h1>
      <div className={styles["button-div"]}>
        <button className={styles["button"]} onClick={increment}>
          Increment
        </button>
        <button className={styles["button"]} onClick={reset}>
          Reset
        </button>
        <button className={styles["button"]} onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

EventButton.propTypes = {
  inputLength: PropTypes.number,
};

export default EventButton;
