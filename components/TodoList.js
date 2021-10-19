import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'
const TodoList = ({todos}) => {


  return (
    <div>
      <AddTodo/>
      <ul>
        {todos.map((todo,idx) => (
          <TodoItem key={idx} text={todo.title} id={todo.id} completed={todo.completed}></TodoItem>
        ))}
      </ul>
    </div>
  )
}


export default TodoList
