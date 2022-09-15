const TodoItem = ({ id, text, checked, todo }) => {
  console.log(checked);
  const [todoList, setTodoList] = todo;
  const inputHandle = () => {
    const arrCopy = todoList.slice();
    arrCopy.map((el) => {
      if (el.id == id) el.checked = !el.checked;
    });
    setTodoList(arrCopy);
  };
  const itemRemoveHandle = () => {
    setTodoList(todoList.filter((el) => el.id != id));
  };
  return (
    <div className="todo_list__item">
      <label htmlFor={`todo_${id}`}>
        <input
          id={`todo_${id}`}
          type="checkbox"
          checked={checked}
          onChange={inputHandle}
        />
        {text}
      </label>
      <button onClick={itemRemoveHandle}>x</button>
    </div>
  );
};

export default TodoItem;
