import React from 'react'

class Movies extends React.Component{
    constructor(){
        super();
        this.state = {
            films: [],
        };
    }



    ComponentDidMount(){

        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=59e742a6')
        .then(results =>{
            return results.json();
        }).then(data =>{
            let films = data.results.map((film) =>{
                return(
                    <div key={film.results}>
                        <h1>{film}</h1>
                    </div>
                )
            })
            this.setState({films: films});
            console.log("state", this.state.films)
            console.log(this.state.films)
        })
    }


    render(){
        return(
            <div>
                {this.state.films}

            </div>
        )
    }
}

export default Movies