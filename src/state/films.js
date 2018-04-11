const SET_FILMS = 'films/SET-FILMS'

const SET_SINGLE_FILM = 'films/SET-SINGLE-FILM'

const setFilms = filmsData => ({
    type: SET_FILMS,
        filmsData: filmsData || {}
})

const setSingleFilm = singleFilmData => ({
    type: SET_SINGLE_FILM,
        singleFilmData
})


export const getSingleFilm = filmId => (dispatch) => {
    fetch(`http://www.omdbapi.com/?apikey=59e742a6&i=${filmId}`)
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
                setSingleFilm: action.singleFilmData
            }
        default:
            return state
    }
}

