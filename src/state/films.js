const SET_FILMS = 'films/SET-FILMS'

const SET_SINGLE_FILM = 'films/SET-SINGLE-FILM'

const setFilms = filmsData => ({
    type: SET_FILMS,
        filmsData
})

const setSingleFilm = singleFilmData => ({
    type: SET_SINGLE_FILM,
        singleFilmData
})


export const getSingleFilm = movieId => (dispatch, getState) => {
    fetch(`http://www.omdbapi.com/?apikey=59e742a6&i=${movieId}`)
        .then(response => response.json())
        .then(data => {
            dispatch(setSingleFilm(data))
        })
}


export const getFilms = SearchInput => dispatch => {
    fetch(`http://www.omdbapi.com/?apikey=59e742a6&s=${SearchInput}`)
        .then(
            response => response.json()
        ).then(
        data => {
            dispatch(setFilms(data))
        }
    )
}


const initialState = {
    filmsData: [],
    singleFilmData: ''
}

export default ( state = initialState, action) => {
    switch(action.type) {
        case SET_FILMS:
            return {
                ...state,
                filmsData: action.filmsData
            }
        case SET_SINGLE_FILM:
            return {
                ...state,
                setSingleFilm: action.singleFilmData
            }
        default:
            return state
    }
}

