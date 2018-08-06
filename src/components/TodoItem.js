import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = props => {
  const { text, onClick, completed } = props
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : null }}
    >
      {text}
    </li>
  )
}

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}
export default TodoItem
