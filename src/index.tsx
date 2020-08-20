import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
//import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import authReducer from './reducers/auth'
import guestReducer from './reducers/guests'
import weatherReducer from './reducers/weathers'

const rootReducer = combineReducers({
  weather: weatherReducer,
  guests: guestReducer,
  auth: authReducer
})

export type RootReducer = ReturnType<typeof rootReducer>

const composeEnhancers =
  //process.env.NODE_ENV === "development" ?
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose // : null;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister()
