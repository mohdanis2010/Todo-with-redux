import TodoForm from '../containers/TodoForm'
import VisibleTodos from '../containers/VisibleTodos'
import Footer from '../components/Footer'

import React from 'react'
const App = () => {
  return (
    <div>
      <TodoForm />
      <VisibleTodos />
      <Footer />
    </div>
  )
}

export default App
