import { useState, useEffect } from "react";
import styles from "./ColorPicker.module.css";

function ColorPicker() {
  const [color, setColor] = useState("");

  function handleColor(event) {
    setColor(event.target.value);
  }

  useEffect(() => {
    const isCloseToBlack = (color) => {
      const rgb = color
        .slice(1) // Remove '#'
        .match(/.{2}/g) // Split into pairs of two characters
        .map((hex) => parseInt(hex, 16)); // Convert to decimal

      // Calculate the "distance" from black (0, 0, 0)
      const distanceFromBlack = Math.sqrt(
        rgb.reduce((sum, value) => sum + value ** 2, 0),
      );

      // Check if the distance is within 25% of the maximum distance (255)
      return distanceFromBlack <= 64; // ~25% of 255
    };

    const colorPickerElement = document.getElementById("color-picker");
    if (colorPickerElement) {
      const colorValue = colorPickerElement.value;
      setColor(colorValue);

      const headingValue = document.getElementById("heading");

      if (isCloseToBlack(colorValue)) {
        headingValue.style.color = "white";
      } else {
        headingValue.style.color = "black";
      }
    }
  }, [color]); // Run when the color changes

  return (
    <>
      <div className="color-picker-div">
        <h1>Color Picker</h1>
        <h2
          className={styles["heading-styling"]}
          id="heading"
          style={{ backgroundColor: color }}
        >
          Selected Color:
          <br />
          {color}
        </h2>
        <p>Select a color:</p>
        <input
          type="color"
          id="color-picker"
          value={color}
          onChange={handleColor}
        ></input>
      </div>
    </>
  );
}

export default ColorPicker;
