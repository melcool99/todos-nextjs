import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTaskActions } from '../hooks/useTaskActions'
import { useRouter } from 'next/router'
import { getTodos } from '../redux/features/todosSlice'

const TodoItem = () => {
  const router = useRouter()

  const userId = router.query.id

  const dispatch = useDispatch()

  const { todosList, status } = useSelector((state) => state.todos)

  useEffect(() => {
    dispatch(getTodos(userId))
  }, [userId, dispatch])

  const { finishTask, removeTask } = useTaskActions()

  return (
    <div>
      {status === 'Loading' && <h3>Loading...</h3>}
      {status === 'Success' && todosList.length === 0 && (
        <h3>Nothing to show here!</h3>
      )}
      {status === 'Failed' && <h3>Something went wrong</h3>}
      {status === 'Success' && todosList.map((todo, idx) => (
        <li key={idx} style={{ display: 'flex', alignItems: 'center' }}>
          <p
            style={{
              color: todo.completed && 'blue',
              textDecoration: todo.completed && 'line-through',
            }}>
            {idx  + 1}. {todo.title}
          </p>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={(e) => finishTask(e, idx)}
          />
          <button onClick={() => removeTask(todo.id)}>X</button>
        </li>
      ))}
    </div>
  )
}

export default TodoItem
