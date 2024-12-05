import styles from "./ToDoList.module.css";

function ToDoListRouterButton() {
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/to-do-list";
        }}
        className={styles["toDoListRouterButton"]}
      >
        Go to To Do List
      </button>
    </>
  );
}

export default ToDoListRouterButton;
