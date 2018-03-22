import React from 'react'
import FilmsSearch from "./FilmsSearch";

class FilmsList extends React.Component {

    state = {
        currentSearchPhrase: ''
    }

    handleSearchPhraseChange = event => {
        this.setState({
            currentSearchPhrase: event.target.value
        })
    }

    render() {
        return (
            <div>
                <FilmsSearch
                    searchPhrase={this.state.currentSearchPhrase}
                    onChange={this.handleSearchPhraseChange}
                />

            </div>
        )
    }
}

export default FilmsList