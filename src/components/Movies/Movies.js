import React from 'react'

class Movies extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            films: [],
            isLoading: false,
            error: null,
        };
    }



    ComponentDidMount(){

        this.setState({isLoading: true});

        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=59e742a6')
            .then(response =>{
                if(response.ok) {
                    return response.json();
                }else{
                    throw new Error('cos sie posypalo...')
                }
            })
            .then(data => this.setState({films: data.films, isLoading: false}))
            .catch(error => this.setState({error, isLoading: false}))
    }


    render(){

        const {films, isLoading,error} = this.state;

        if(error) {
            return <p>{error.message}</p>
        }

        if(isLoading) {
            return <p>Loading ...</p>;
        }

        return(
            <div>
                {films.map(film =>
                    <div key={film.objectID}>
                        <a href={film.url}>{film.title}</a>
                    </div>
                )}</div>
        )
    }
}

export default Movies