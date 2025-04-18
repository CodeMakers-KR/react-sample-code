import TaskList from "./TaskList";
import TaskAppender from "./TaskAppender";
import TaskContextProvider from "../Contexts/TaskContext";

export default function TodoApp() {
  const initialTasks = [
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
  ];

  return (
    <TaskContextProvider initialState={initialTasks}>
      <div className="wrapper">
        <header>React Todo</header>
        <TaskList />
        <TaskAppender />
      </div>
    </TaskContextProvider>
  );
}
