import { useState, useEffect } from "react";
import styles from "./ToDoList.module.css";

function ToDoList() {
  const [taskValue, setTaskValue] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Add a specific class to the body
    document.body.classList.add(styles["to-do-list-body"]);

    // Clean up to avoid affecting other pages
    return () => {
      document.body.classList.remove(styles["to-do-list-body"]);
    };
  }, []);

  function handleTaskValue(e) {
    setTaskValue(e.target.value);
  }

  function handleAddTask() {
    if (taskValue.trim() === "") return;
    const newTaskValue = {
      string: taskValue,
    };
    setTasks((prevTasks) => [...prevTasks, newTaskValue]);
    setTaskValue("");
  }

  function handleDeleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  function handleUp(index) {
    if (index === 0) {
      return;
    }
    const arr = [...tasks];
    [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
    setTasks(arr);
  }

  function handleDown(index) {
    if (index === tasks.length - 1) {
      return;
    }
    const arr = [...tasks];
    [arr[index + 1], arr[index]] = [arr[index], arr[index + 1]];
    setTasks(arr);
  }

  return (
    <>
      <div className={styles["to-do-list"]}>
        <h1 className={styles["to-do-list-h"]}>To-Do-List</h1>
        <input
          className={styles["task-input"]}
          maxLength={50}
          placeholder="Enter a task..."
          value={taskValue}
          onChange={(e) => handleTaskValue(e)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTask();
            }
          }}
        ></input>
        <button className={styles["add-button"]} onClick={handleAddTask}>
          Add
        </button>

        <div className={styles["tasks-div"]}>
          {tasks.map((task, index) => (
            <div className={styles["task"]} key={index}>
              <p className={styles["task-p"]}>{task.string}</p>
              <span className={styles["task-buttons"]}>
                <button
                  onClick={() => handleDeleteTask(index)}
                  id={styles["delete-button"]}
                >
                  Delete
                </button>
                <button onClick={() => handleUp(index)}>👆</button>
                <button onClick={() => handleDown(index)}>👇</button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ToDoList;
