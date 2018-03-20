import React from 'react'

class FilmsSearch extends React.Component{


    state ={
        filmName: '',
    }


    handleFilmNameInputChange = (event) => {
        this.setState({
            filmName: event.target.value
        });
    }

    render(){
        return(
            <div>
                <form>
                    <input
                        type="text"
                        placeholder='enter title'
                        onChange={this.handleFilmNameInputChange}
                        value={this.state.filmName}
                    />
                    <button>search</button>
                </form>


            </div>
        )
    }
}

export default FilmsSearch