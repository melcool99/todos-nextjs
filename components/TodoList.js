import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import AddTodo from './AddTodo'
const TodoList = () => {
  const { status } = useSelector((state) => state.todos)

  return (
    <div>
      {status === 'Loading' && <h3>Loading...</h3>}

      <ul>
        <AddTodo />
        <TodoItem />
      </ul>

      {status === 'Failed' && <h3>Something went wrong</h3>}
    </div>
  )
}

export default TodoList
