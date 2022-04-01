import React from "react";
import Container from "../../shared/components/container/Container";

import MovieItem from './MovieItem'


import './MovieList.css'

const MovieList = props =>{

    const movieItems = props.items.map(movie => (
    <MovieItem 
    key={movie.movieId} 
    id={movie.movieId} 
    title={movie.title}
    image={movie.image}
    date={movie.date}
    description={movie.description}
    rate={movie.rate}
    currentPath={props.currentPath}
    />)
    )

    return<Container className="movie-list">
        {movieItems}
    </Container>
}

export default MovieList