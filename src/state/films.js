const SET_FILMS = 'films/SET_FILMS'

const SET_SINGLE_FILM = 'films/SET_SINGLE_FILM'

const setFilms = filmsData => ({
    type: SET_FILMS,
        filmsData: filmsData || {}
})

const setSingleFilm = singleFilmData => ({
    type: SET_SINGLE_FILM,
        singleFilmData
})


export const getSingleFilm = filmId => (dispatch) => {
    fetch(`https://www.omdbapi.com/?apikey=59e742a6&i=${filmId}`)
        .then(response => response.json())
        .then(data => {
            dispatch(setSingleFilm(data))
        })
}


export const getFilms = SearchInput => dispatch => {
    fetch(`https://www.omdbapi.com/?apikey=59e742a6&s=${SearchInput}`)
        .then(
            response => response.json()
        ).then(
        data => {
            dispatch(setFilms(data.Search))
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
                singleFilmData: action.singleFilmData
            }
        default:
            return state
    }
}

