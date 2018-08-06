import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

const store = createStore(rootReducer)
store.subscribe(() => console.log(store.getState()))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
