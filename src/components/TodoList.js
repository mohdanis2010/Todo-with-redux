import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem {...todo} key={todo.id} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
}

export default TodoList
