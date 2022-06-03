import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './components/app/app'
import { Global } from './components/styled/global'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    <Global />
  </React.StrictMode>
)
