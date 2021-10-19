import TodoList from '../../components/TodoList'

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data = await response.json()
  const paths = data.map((todo) => ({
    params: { user: todo.userId.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const userId = params.user
  const reponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/todos`
  )
  const data = await reponse.json()
  return {
    props: {
      todos: data,
    },
  }
}

const UserTodos = ({ todos }) => {
  return (
    <>
      <h1>Todos</h1>
      <TodoList todos={todos} />
    </>
  )
}

export default UserTodos
