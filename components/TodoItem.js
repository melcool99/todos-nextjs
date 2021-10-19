import React from 'react'

const TodoItem = ({ id, text, completed }) => {
  return (
    <div>
      <li style={{ display: 'flex' }}>
        <p>{id}</p>
        <p>{text}</p>
        <div>
          <button>
            <input
              type='checkbox'
              onChange={() => {}}
              checked={completed}></input>{' '}
          </button>
          <button>X</button>
        </div>
      </li>
    </div>
  )
}

export default TodoItem
