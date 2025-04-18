import { useRef, useState } from "react";
import TaskList from "./TaskList";
import TaskAppender from "./TaskAppender";
import Alert from "./modal/Modal";

export default function TodoApp() {
  const alertRef = useRef();

  const [alertMessage, setAlertMessage] = useState();
  const [todoLists, setTodoLists] = useState([
    {
      id: "item1",
      task: "React Component Master",
      dueDate: "2025-12-31",
      priority: 1,
      done: true,
    },
    {
      id: "item2",
      task: "React Props Master",
      dueDate: "2025-10-11",
      priority: 1,
      done: true,
    },
    {
      id: "item3",
      task: "React States Master",
      dueDate: "2025-09-07",
      priority: 1,
      done: false,
    },
  ]);

  return (
    <>
      <div className="wrapper">
        <header>React Todo</header>
        <TaskList
          todoLists={todoLists}
          setTodoLists={setTodoLists}
          setAlertMessage={setAlertMessage}
          alertRef={alertRef}
        />
        <TaskAppender setTodoLists={setTodoLists} />
      </div>
      <Alert ref={alertRef}>
        <div>
          <h3>{alertMessage}</h3>
        </div>
      </Alert>
    </>
  );
}
