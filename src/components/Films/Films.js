import React from 'react'
import { connect } from 'react-redux'
import { Link }  from 'react-router-dom'
import './Films.css'

class Films extends React.Component {



    render() {

        return (
            <div className='films-view'>
                {
                    this.props.filmsData.map && this.props.filmsData.map((film,index) => (
                        <div  className='film' key={index}>
                            <h4>{film.Title}</h4>
                            <img src={film.Poster}
                                 alt={film.Title}/>
                            <Link to={`/film/${film.imdbID}`}>
                                <button>More</button>
                            </Link>
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

export default connect(mapStateToProps)(Films)