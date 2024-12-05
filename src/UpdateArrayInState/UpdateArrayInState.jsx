import { useEffect, useState } from "react";

function UpdateArrayInState() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  useEffect(() => {}, [setFoods]);

  function handleAddFood() {
    const foodInput = document.getElementById("food-input");
    const foodInputValue = foodInput.value;
    if (foodInputValue.trim()) {
      setFoods((prevFoods) => [...prevFoods, foodInputValue]);
      foodInput.value = "";
    } else {
      alert("Please Enter a valid item!");
    }
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <>
      <div>
        <h2>List of Food</h2>
        <ul>
          {foods.map((food, index) => (
            <li
              key={index}
              value={food}
              onClick={() => handleRemoveFood(index)}
              style={{ cursor: "pointer" }}
            >
              {food}
            </li>
          ))}
        </ul>
        <input id="food-input" placeholder="Enter a food to add"></input>
        <button onClick={() => handleAddFood()}>Add</button>
      </div>
    </>
  );
}

export default UpdateArrayInState;
