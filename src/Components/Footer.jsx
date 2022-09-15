const Footer = ({ todo }) => {
  const [todoList, setTodoList] = todo;
  const checkedList = todoList.filter((el) => el.checked);
  const [checkLength, todoLength] = [checkedList.length, todoList.length];

  const clearHandle = () => {
    setTodoList(todoList.filter((el) => !el.checked));
  };

  return (
    <div className="todo_footer">
      <p>
        {todoLength > 0
          ? checkLength == todoLength
            ? 'All Completed'
            : `${checkLength} / ${todoLength} Completed`
          : 'Empty'}
      </p>
      <button onClick={clearHandle}>Clear Completed</button>
    </div>
  );
};

export default Footer;
