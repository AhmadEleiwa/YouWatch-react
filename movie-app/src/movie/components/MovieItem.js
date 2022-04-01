import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/components/card/Card";

import './MovieItem.css'

const MovieItem = props =>{
    return <Link to={`${props.currentPath}${props.id}`} >
    <Card className='movie-item' theme='card-dark'  >
        <div className="movie-item__image">
            <img src={props.image}  />
        </div>
        <div className="movie-item__content">
            <h2>{props.title}</h2> 
            {/* title */}
            <p>{props.description}</p>
            {/* description */}
            <span className="movie-item__content-date">{props.date}</span>
            <span className="movie-item__content-rate">rate {props.rate}</span>

        </div>
    </Card>
    </Link>

}

export default MovieItem