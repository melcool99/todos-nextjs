import {AddTodo} from './AddTodo'
import TodoItem from './TodoItem'



const TodoList = () => {
  return (
    <div>
      <ul>
      <AddTodo/>
      <TodoItem/>
      </ul>
    </div>
  )
}

export default TodoList
