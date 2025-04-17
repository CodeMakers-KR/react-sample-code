import TaskAppender from "./Components/TaskAppender";
import TaskHeader from "./Components/TaskHeader";
import TaskItem from "./Components/TaskItem";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="wrapper">
      <header>React Todo</header>
      <TaskList>
        <TaskHeader />
        <TaskItem
          id="item1"
          task="React Component Master"
          dueDate="2025-12-31"
          priority="1"
        />
        <TaskItem
          id="item2"
          task="React Props Master"
          dueDate="2025-10-11"
          priority="2"
        />
      </TaskList>
      <TaskAppender />
    </div>
  );
}

export default App;
