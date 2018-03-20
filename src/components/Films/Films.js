import React from 'react'
import FilmsList from './FilmsList'
import FilmsSearch from './FilmsSearch'

class Films extends React.Component {


    state = {
        data: []
    }


    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=59e742a6&')
            .then(
                response => response.json()
            ).then(
            data => this.setState({data}))

    }


    render() {

        const {data} = this.state
        return (
            <div>
                <p>{data.Poster}</p>
                <FilmsSearch data={data}/>
                <FilmsList data={data}/>
            </div>
        )
    }
}

export default Films