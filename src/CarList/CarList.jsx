import { useState } from "react";
import styles from "./CarList.module.css";

function CarList() {
  const [year, setYear] = useState("");
  const [maker, setMaker] = useState("");
  const [model, setModel] = useState("");
  const [cars, setCars] = useState([]);

  function handleYear(event) {
    setYear(event.target.value);
  }

  function handleMaker(event) {
    setMaker(event.target.value);
  }

  function handleModel(event) {
    setModel(event.target.value);
  }

  function handleAddCar() {
    const NewCar = { Year: year, Maker: maker, Model: model };

    setCars((prevCars) => [...prevCars, NewCar]);
  }

  function handleCarDelete(index) {
    setCars((prevCars) => prevCars.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className={styles["list-div"]}>
        <h2>List of Car Objects</h2>
        <ul className={styles["ul-styling"]}>
          {cars.map((car, index) => (
            <li key={index} onClick={() => handleCarDelete(index)}>
              {" "}
              {car.Year} {car.Maker} {car.Model}
            </li>
          ))}
        </ul>

        <div className={styles["input-div"]}>
          <input
            placeholder="year eg. 2020"
            onChange={(e) => handleYear(e)}
          ></input>
          <input
            placeholder="Car Maker"
            onChange={(e) => handleMaker(e)}
          ></input>
          <input
            placeholder="Car Model"
            onChange={(e) => handleModel(e)}
          ></input>
        </div>
        <button id={styles["button"]} onClick={handleAddCar}>
          Add Car
        </button>
      </div>
    </>
  );
}

export default CarList;

// function CarList() {

//     const [year, setYear] = useState("");
//     const [maker, setMaker] = useState("");
//     const [model, setModel] = useState("");
//     const [cars, setCars] = useState([]);

//     function handleYear(e) {
//         const year = e.target.value
//         setYear(() => year)
//     }

//     function handleMaker(e) {
//         const maker = e.target.value
//         setMaker(() => maker)
//     }

//     function handleModel(e) {
//         const model = e.target.value
//         setModel(() => model)
//     }

//     function handleAddCar() {
//         const NewCar = {Year: year,
//                         Maker: maker,
//                         Model: model}

//         setCars(prevCars => [...prevCars, NewCar])
//     }

//     function handleRemoveCar(index){
//         setCars(cars.filter((_, i) => i !== index));
//     }

//     return(
//         <>

//             <div className={styles["list-div"]}>
//                 <h2>List of Car Objects</h2>
//                 <ul className={styles["ul-styling"]}>
//                     {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.Year} {car.Maker} {car.Model}</li>)}
//                 </ul>

//                 <div className={styles["input-div"]}>
//                     <input placeholder='Year eg. 2020' onChange={(e) => handleYear(e)}></input>
//                     <input placeholder='Car Maker' onChange={(e) => handleMaker(e)}></input>
//                     <input placeholder='Car model' onChange={(e) => handleModel(e)}></input>
//                 </div>
//                 <button onClick={() => handleAddCar()} id={styles["button"]}>Add Car</button>
//             </div>

//         </>
//     );

// }
