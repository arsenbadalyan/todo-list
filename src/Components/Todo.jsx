import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import Footer from './Footer';

const Todo = () => {
  const [todoList, setTodoList] = useState([
    { id: 0, text: 'Lear React', checked: true },
  ]);
  return (
    <div className="todo">
      <AddTodo todo={[todoList, setTodoList]} />
      <div>
        {todoList.map((todo, index) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              checked={todo.checked}
              todo={[todoList, setTodoList]}
            />
          );
        })}
      </div>
      <Footer todo={[todoList, setTodoList]} />
    </div>
  );
};

export default Todo;
