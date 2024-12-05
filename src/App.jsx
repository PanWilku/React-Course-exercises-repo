import Footer from "./Footer";
import List from "./List";
import EventButton from "./EventButton/EventButton";
import OnChange from "./OnChange";
import { useState } from "react";
import DeliveryComponent from "./DeliveryComponent/DeliveryComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubmitPage from "./SubmitPage/SubmitPage";
import ColorPicker from "./ColorPicker/ColorPicker";
import styles from "./App.module.css";
import UpdateArrayInState from "./UpdateArrayInState/UpdateArrayInState";
import CarList from "./CarList/CarList";
import ToDoList from "./ToDoList/ToDoList";
import ToDoListRouterButton from "./ToDoList/ToDoListRouterButton";
import Clock from "./Clock/Clock";
import UseContenxtComponentA from "./useContextComponent/UseContextComponentA";
import Timer from "./Timer/Timer";


function App() {
  const [inputLength, setInputLength] = useState(0);

  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 56 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "strawberry", calories: 150 },
    { id: 5, name: "watermelon", calories: 77 },
  ];

  const veggies = [
    { id: 1, name: "cabbage", calories: 44 },
    { id: 2, name: "tomato", calories: 65 },
    { id: 3, name: "beetroot", calories: 34 },
    { id: 4, name: "carrot", calories: 78 },
    { id: 5, name: "daikon", calories: 101 },
  ];

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className={styles["frames-styling"]}>
                  <List items={fruits} category="fruits"></List>
                  <List items={veggies} category="veggies"></List>
                  <EventButton inputLength={inputLength}></EventButton>
                  <CarList></CarList>
                </div>
                <OnChange setInputLength={setInputLength}></OnChange>
                <UpdateArrayInState></UpdateArrayInState>
                <br />
                <div className={styles["div-styling"]}>
                  <DeliveryComponent></DeliveryComponent>
                  <ColorPicker></ColorPicker>
                  <Clock></Clock>
                  <Timer></Timer>
                  <Timer></Timer>
                </div>
                <ToDoListRouterButton></ToDoListRouterButton>
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/submit"
            element={
              <>
                <SubmitPage></SubmitPage>
              </>
            }
          />
          <Route
            path="/to-do-list"
            element={
              <>
                <ToDoList></ToDoList>
              </>
            }
          ></Route>
          <Route
            path="/context"
            element={
              <>
                <UseContenxtComponentA></UseContenxtComponentA>
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
