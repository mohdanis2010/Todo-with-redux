import { combineReducers } from 'redux'
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text, id: action.id, completed: false }]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        return todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo
      })
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'CHANGE_VISIBILITY':
      return action.filter
    default:
      return state
  }
}

export default combineReducers({ todos, visibilityFilter })
