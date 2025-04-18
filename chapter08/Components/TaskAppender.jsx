import { useRef /*, useState*/ } from "react";

export default function TaskAppender({ onButtonClick }) {
  const taskRef = useRef();
  const dueDateRef = useRef();
  const priorityRef = useRef();

  // const [task, setTask] = useState("");
  // const [dueDate, setDueDate] = useState("");
  // const [priority, setPriority] = useState();

  const onButtonClickHandler = () => {
    if (!taskRef.current.value) {
      alert("Task를 입력하새요.");
      return;
    }

    if (!dueDateRef.current.value) {
      alert("Due Date를 입력하세요.");
      return;
    }

    if (!priorityRef.current.value) {
      alert("Priority를 선택하세요.");
      return;
    }
    onButtonClick(
      taskRef.current.value,
      dueDateRef.current.value,
      priorityRef.current.value
    );
  };

  // const onTodoInputKeyUpHandler = (event) => {
  //   setTask(event.currentTarget.value);
  // };

  // const onPriorityChangeHandler = (event) => {
  //   setPriority(event.currentTarget.value);
  // };

  // const onDueDateChangeHandler = (event) => {
  //   setDueDate(event.currentTarget.value);
  // };

  return (
    <footer>
      <input type="text" placeholder="Task" ref={taskRef} />
      <input type="date" ref={dueDateRef} />
      <select ref={priorityRef}>
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
