import React from 'react';

const TodosList = ({ todos, deleteTodo, completeTodo }) => (
  <div>
    {
      todos.map((todo, idx) => {
        return (
          <li key={todo.id}>
            <span onClick={ () => completeTodo(todo.id)}>({todo.completed ? "not complete" : "complete"})  </span>
              {todo.text}
            <span onClick={ () => deleteTodo(todo.id)}>  (delete)</span>
          </li>
        );
      })
    }
  </div>
);

export default TodosList;
