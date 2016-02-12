import React from 'react'

const TodosList = ({ todos, deleteTodo }) => (
  <div>
    {todos.map((todo) => {
      return (
        <li key={todo.id}>
          {todo.text}
          <span onClick={() => deleteTodo(todo.id)}>  (delete)</span>
        </li>
      );
    })}
  </div>
)

export default TodosList;
