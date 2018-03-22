
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import films, { getFilms, getSingleFilm } from './state/films'




const reducers = combineReducers({
    films
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)

store.dispatch(getFilms('pizda'));
store.dispatch(getSingleFilm('tt009685'));