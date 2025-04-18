import { useState } from "react";

export default function TaskAppender({ onButtonClick }) {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState();

  const onButtonClickHandler = () => {
    if (!task) {
      alert("Task를 입력하새요.");
      return;
    }

    if (!dueDate) {
      alert("Due Date를 입력하세요.");
      return;
    }

    if (!priority) {
      alert("Priority를 선택하세요.");
      return;
    }
    onButtonClick(task, dueDate, priority);
  };

  const onTodoInputKeyUpHandler = (event) => {
    setTask(event.currentTarget.value);
  };

  const onPriorityChangeHandler = (event) => {
    setPriority(event.currentTarget.value);
  };

  const onDueDateChangeHandler = (event) => {
    setDueDate(event.currentTarget.value);
  };
  return (
    <footer>
      <input type="text" placeholder="Task" onKeyUp={onTodoInputKeyUpHandler} />
      <input type="date" onChange={onDueDateChangeHandler} />
      <select onChange={onPriorityChangeHandler}>
        <option value="">우선순위</option>
        <option value="1">높음</option>
        <option value="2">보통</option>
        <option value="3">낮음</option>
      </select>
      <button type="button" onClick={onButtonClickHandler}>
        Save
      </button>
    </footer>
  );
}
