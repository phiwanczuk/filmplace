import React from 'react'
import { connect } from 'react-redux'
import FilmsList from "./FilmsList";

class Films extends React.Component {



    render() {


        return (
            <div>
                {
                    this.props.filmsData.map((film,index) => (
                        <div key={index}>
                            <h2>{film.Title}</h2>
                            <img src="{film.Poster}"
                                 alt="{film.Title}"/>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    filmsData: state.films.filmsData
})

export default connect(mapStateToProps)(FilmsList)