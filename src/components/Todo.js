import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const isAuthed = useSelector((state) => state.auth.isAuthenticated);

  const [todo, setTodo] = useState('');

  const todoChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const todoSubmitHandler = (event) => {
    event.preventDefault();

    dispatch({ type: 'add', key: 'todo', todo: todo });
  };

  return (
    <>
      <h2>Todos</h2>
      <form onSubmit={todoSubmitHandler}>
        <input type='text' onChange={todoChangeHandler} />
        <button type='submit'>submit</button>
      </form>
      {todos?.map((todo, i) => {
        return <p key={i}>{todo}</p>;
      })}
    </>
  );
};

export default Todo;
