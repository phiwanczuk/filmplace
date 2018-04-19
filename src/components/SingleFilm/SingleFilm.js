import React from 'react'
import { connect } from 'react-redux'
import { getSingleFilm } from "../../state/films";
import './SingleFilm.css'

class SingleFilm extends React.Component {

    componentDidMount() {
        this.props.getSingleFilm(this.props.match.params.id)
    }

    render() {
        return (
            <div className='single-film-view'>
                <h1>{this.props.singleFilmData.Title} <span>({this.props.singleFilmData.Year})
                </span></h1>
                <div>
                    <div>
                        <img src={this.props.singleFilmData.Poster} alt='not available'/>
                    </div>
                    <div className='film-desc'>
                        <time>{this.props.singleFilmData.Runtime}</time>
                        <p>{this.props.singleFilmData.Genre}</p>
                        <p>{this.props.singleFilmData.Plot}</p>
                        <p>Actors: {this.props.singleFilmData.Actors}</p>
                        <p>Director: {this.props.singleFilmData.Director}</p>
                        <p>Writer: {this.props.singleFilmData.Writer}</p>
                        <p>Release Date: {this.props.singleFilmData.Released}</p>
                        <p>BoxOffice: {this.props.singleFilmData.BoxOffice}</p>
                        {console.log(this.props.singleFilmData)}
                    </div>
                </div>
                {console.log(this.props.singleFilmData)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    singleFilmData: state.films.singleFilmData
})
const mapDispatchToProps = dispatch => ({
    getSingleFilm: filmId => dispatch(getSingleFilm(filmId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleFilm)