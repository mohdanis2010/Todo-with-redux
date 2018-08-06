import TodoList from '../components/TodoList.js'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/actions'
import { VisibilityFilters } from '../actions/actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}
const mapStateProps = state => {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter) }
}
const mapDispatchToProps = dispatch => ({
  toggleTodo(id) {
    dispatch(toggleTodo(id))
  },
})

export default connect(mapStateProps, mapDispatchToProps)(TodoList)
