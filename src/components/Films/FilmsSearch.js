import React from 'react'
import { connect } from 'react-redux'
import { getFilms } from "../../state/films";

class FilmsSearch extends React.Component {

    state = {
        inputValue: ''
    }

    handleInputValueChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmitForm = event => {
        event.preventDefault()
        this.props.getMovies(this.state.inputValue)

    }

    render() {
        return(
            <form
                onSubmit={this.handleSubmitForm}
            >
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleInputValueChange}
                />
                <input
                    type="submit"
                />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getMovies : inputValue => dispatch(getFilms(inputValue))
})


export default connect(null, mapDispatchToProps)(FilmsSearch)
