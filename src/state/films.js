const SET_FILMS = 'films/SET-FILMS'

const setFilms = filmsData => ({
    type: SET_FILMS,
        filmsData
})



export const getFilms = SearchInput => dispatch => {
    fetch('http://www.omdbapi.com/?apikey=59e742a6&')
        .then(
            response => response.json()
        ).then(
        data => {
            dispatch(setFilms(data))
        }
    )
}

const initialState = {
    filmsData: []
}

export default ( state = initialState, action) => {
    switch(action.type) {
        case SET_FILMS:
            return {
                ...state,
                filmsData: action.filmsData
            }
        default:
            return state
    }
}

