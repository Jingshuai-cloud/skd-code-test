import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../redux/actions/action';

const Todo = ({ todo, toggleTodo }) => (
  <li onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? '👌' : '👋'} <span>{todo.content}</span>
  </li>
);

//export default Todo;
export default connect(null, { toggleTodo })(Todo);
