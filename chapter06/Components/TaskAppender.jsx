export default function TaskAppender() {
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
    <footer>
      <input type="text" placeholder="Task" onKeyUp={onTodoInputKeyUpHandler} />
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
  );
}
