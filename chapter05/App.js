function App() {
  const onButtonClickHandler = () => {
    alert("Todo 추가!");
  };

  const onTodoInputKeyUpHandler = (event) => {
    console.log(event.currentTarget.value);
  };

  const onPriorityChangeHandler = (event) => {
    alert(event.currentTarget.value);
  };

  return (
    <div className="wrapper">
      <header>React Todo</header>
      <ul className="tasks">
        <li className="tasks-header">
          <input id="checkall" type="checkbox" />
          <label>Task</label>
          <span className="due-date">Due date</span>
          <span className="priority">Priority</span>
        </li>
        <li className="task-item">
          <input id="todo_1" type="checkbox" />
          <label htmlFor="todo_1">React Component 마스터</label>
          <span className="due-date">2025-12-31</span>
          <span className="priority">1</span>
        </li>
        <li className="task-item">
          <input id="todo_2" type="checkbox" />
          <label htmlFor="todo_2">React Component 마스터</label>
          <span className="due-date">2025-12-31</span>
          <span className="priority">1</span>
        </li>
      </ul>
      <footer>
        <input
          type="text"
          placeholder="Task"
          onKeyUp={onTodoInputKeyUpHandler}
        />
        <input type="date" />
        <select onChange={onPriorityChangeHandler}>
          <option>우선순위</option>
          <option value="1">높음</option>
          <option value="2">보통</option>
          <option value="3">낮음</option>
        </select>
        <button type="button" onClick={onButtonClickHandler}>
          Save
        </button>
      </footer>
    </div>
  );
}

export default App;
