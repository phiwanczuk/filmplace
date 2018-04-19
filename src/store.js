
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import films from './state/films'




const reducers = combineReducers({
    films
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)

