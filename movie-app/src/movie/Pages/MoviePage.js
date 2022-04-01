import React from "react";
import MovieList from "../components/MovieList";


const MoviePage = props =>{


    const moives = [
        {movieId: '1', title:"Game Of The Thrones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/200/300', rate:9.7},
        {movieId: '2', title:"Game Of The Thrssones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/207/301', rate:9.7},
        {movieId: '3', title:"Game Of The Thrssones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/200/301', rate:9.7},
        {movieId: '4', title:"Game Of The Thrssones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/201/302', rate:9.7},
        {movieId: '5', title:"Game Of The Thrssones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/200/302', rate:9.7},
        {movieId: '6', title:"Game Of The Thrssones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/203/301', rate:9.7},
        {movieId: '7', title:"Game Of The Thrssones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/205/301', rate:9.7},
        {movieId: '8', title:"Game Of The Thrssones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/202/301', rate:9.7},
        {movieId: '9', title:"Game Of The Thrssones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/201/301', rate:9.7},
 


    ]

    return <MovieList items={moives} currentPath='player/'/>
}


export default MoviePage