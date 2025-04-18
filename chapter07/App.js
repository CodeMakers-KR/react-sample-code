import { useState } from "react";
import TaskAppender from "./Components/TaskAppender";
import TaskHeader from "./Components/TaskHeader";
import TaskItem from "./Components/TaskItem";
import TaskList from "./Components/TaskList";

function App() {
  const [todoLists, setTodoList] = useState([
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

  const addNewTodoHandler = (task, dueDate, priority) => {
    setTodoList((prevTodoList) => {
      const newTodoList = [...prevTodoList];
      newTodoList.push({
        id: "item" + (prevTodoList.length + 1),
        task,
        dueDate,
        priority,
        done: false,
      });
      return newTodoList;
    });
  };

  const doneTodoHandler = (event) => {
    const todoId = event.currentTarget.value;
    if (
      window.confirm(
        `${todoId} task를 완료할까요? 이 작업은 되돌릴 수 없습니다.`
      )
    ) {
      setTodoList((prevTodoList) => {
        const newTodoList = [...prevTodoList];

        newTodoList.map((todo) => {
          if (todo.id === todoId) {
            todo.done = true;
          }
          return todo;
        });
        return newTodoList;
      });
    }
  };

  const doneAllTodoHandler = (event) => {
    const processingTodoLength = todoLists.filter((todo) => !todo.done).length;
    if (event.currentTarget.checked && processingTodoLength === 0) {
      alert("완료할 Task가 없습니다.");
      event.currentTarget.checked = false;
      return;
    }
    if (
      event.currentTarget.checked &&
      window.confirm("모든 task를 완료할까요? 이 작업은 되돌릴 수 없습니다.")
    ) {
      setTodoList((prevTodoList) => {
        const newTodoList = [...prevTodoList];

        newTodoList.map((todo) => {
          todo.done = true;
          return todo;
        });
        return newTodoList;
      });

      event.currentTarget.checked = false;
    }
  };

  return (
    <div className="wrapper">
      <header>React Todo</header>
      <TaskList>
        <TaskHeader onCheckboxClick={doneAllTodoHandler} />
        {todoLists.map((item) => (
          <TaskItem
            key={item.id}
            id={item.id}
            task={item.task}
            dueDate={item.dueDate}
            priority={item.priority}
            done={item.done}
            onCheckboxClick={doneTodoHandler}
          />
        ))}
      </TaskList>
      <TaskAppender onButtonClick={addNewTodoHandler} />
    </div>
  );
}

export default App;
