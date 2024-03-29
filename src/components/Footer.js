import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions/actions'

const Footer = () => {
  return (
    <div>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    </div>
  )
}

export default Footer
