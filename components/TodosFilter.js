import React from 'react'

const TodosFilter = ({ filterTodos }) => (
  <div>
    <span onClick={() => filterTodos('ALL')}>ALL</span>
    <span onClick={() => filterTodos('NOT COMPLETED')}>NOT</span>
    <span onClick={() => filterTodos('COMPLETED')}>COMPLETED</span>
  </div>
)

export default TodosFilter;
