import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './configureStore'

import App from './components/App'

import * as serviceWorker from './serviceWorker'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css/normalize.css'
import './assets/styles/base.scss'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
