import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

const TodoForm = props => {
  let textInput
  const { dispatch } = props
  const handleSubmit = e => {
    e.preventDefault()
    textInput.value = ''
  }

  const handleClick = () => {
    if (textInput && textInput.value) {
      dispatch(addTodo(Date.now(), textInput.value))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" ref={input => (textInput = input)} />
      <button onClick={handleClick}>Add</button>
    </form>
  )
}

export default connect()(TodoForm)
