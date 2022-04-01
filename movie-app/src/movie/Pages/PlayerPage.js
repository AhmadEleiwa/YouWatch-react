import React from "react";
import Media from "../../shared/components/media-player/Media";
import MovieList from "../components/MovieList";
// import {Player} from 'video-react'
import vid1 from'../../static/sicko.mp4'
import vid2 from'../../static/vid7.mp4'
import './Player.css'
import { useParams } from "react-router-dom";

const PlayerPage = props =>{


    const moives = [
        {movieId: '1', title:"Game Of The Thrones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/200/300' ,rate:9.7, src:vid1},
        {movieId: '2', title:"Game Of The Thrssones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/207/301', rate:9.7, src:vid2},
        {movieId: '3', title:"Game Of The Thrssones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/200/301', rate:9.7},
        {movieId: '4', title:"Game Of The Thrssones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/201/302', rate:9.7},
        {movieId: '5', title:"Game Of The Thrssones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/200/302', rate:9.7},
        {movieId: '6', title:"Game Of The Thrssones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/203/301', rate:9.7},
        {movieId: '7', title:"Game Of The Thrssones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/205/301', rate:9.7},
        {movieId: '8', title:"Game Of The Thrssones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/202/301', rate:9.7},
        {movieId: '9', title:"Game Of The Thrssones", Date:"17/10", description:"lorem sds  sd ", image:'https://picsum.photos/201/301', rate:9.7},
 


    ]

    let id = useParams()['videoId']
    const item = moives.filter(movie => movie.movieId === id)
    return <div className="player-contianer">
        <Media id='1' src={item[0]['src']} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <MovieList items={moives} currentPath={''}/>
    </div>
}

export default PlayerPage