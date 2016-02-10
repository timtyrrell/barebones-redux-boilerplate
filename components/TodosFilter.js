import React from 'react';

const TodosFilter = ({ updateTodosFilter }) => (
  <div>
    <span onClick={() => updateTodosFilter("ALL")}>All | </span>
    <span onClick={() => updateTodosFilter("COMPLETE")}>COMPLETE | </span>
    <span onClick={() => updateTodosFilter("NOT COMPLETE")}>NOT COMPLETE</span>
  </div>
);

export default TodosFilter;
