export const addTodo = (id, text) => ({
  type: 'ADD_TODO',
  id,
  text,
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
})

export const setVisibilityFilter = filter => ({
  type: 'CHANGE_VISIBILITY',
  filter,
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}
