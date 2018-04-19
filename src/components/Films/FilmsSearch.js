import React from 'react'
import { connect } from 'react-redux'
import { getFilms } from "../../state/films";
import './FilmsSearch.css'


class FilmsSearch extends React.Component {

    state = {
        inputValue: ''
    };

    handleInputValueChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    };

    handleSubmitForm = event => {
        event.preventDefault();
        if(this.state.inputValue.length >=1){

        this.props.getFilms(this.state.inputValue)

    }else{
            alert('type at least one character!')
        }
    };

    render() {
        return(
            <form
                className="film-form"
                onSubmit={this.handleSubmitForm}
            >
                <input
                    className='film-search'
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleInputValueChange}
                />
                <input
                    type="submit"
                    value="Search!"
                />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getFilms : inputValue => dispatch(getFilms(inputValue))
})


export default connect(null, mapDispatchToProps)(FilmsSearch)
