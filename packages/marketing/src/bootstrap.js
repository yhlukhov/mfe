import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el)
}

// If we are in dev and isolation, call mount
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')
  if (devRoot) {
    mount(devRoot)
  }
}

// If we are running on container, export mount function
export {mount}