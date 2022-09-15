import { useState } from 'react';

const AddTodo = ({ todo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = todo;
  const addTodo = (e) => {
    e.preventDefault();
    let listCopy = todoList.slice();
    const thing = newTodo || 'BLANK';
    const id = listCopy.length;
    listCopy.push({ id, text: thing, checked: false });
    setTodoList(listCopy);
    setNewTodo('');
  };
  return (
    <form action="" className="addTodo">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button onClick={addTodo}>Add</button>
    </form>
  );
};

export default AddTodo;
