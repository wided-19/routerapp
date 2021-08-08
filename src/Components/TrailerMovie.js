import React from 'react';
import { Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
import movies from "../Data"
import YouTube from 'react-youtube'

const TrailerMovie = (props) => {

    const movieId = Number(props.match.params.id);

    const movie = movies.filter(movie => {
        if (movie.id === movieId) {
            return movie;
        }
        return false;
    });

    return (
       
        <div style = {{ backgroundColor:"rgb(222, 240, 237);}",textAlign: 'center', minHeight: '100vh',display: 'flex',flexDirection: 'column',alignItems: 'center',marginTop:"50px"}}>
         <YouTube videoId={movie[0].Trailer}/>

            <h2 style={{textTransform: "uppercase",color:"Black",fontSize:"50px",fontFamily:"Brush Script MT"}}>{movie[0].name}</h2>
            <h3 style={{ justifyContent:"center",color:"Black" ,fontSize:"25px",fontFamily:"initial"}}>{movie[0].description}</h3>

            <Link to="/" style={{backgroundColor:"chocolate",color:"black", fontSize:"30 px",fontFamily:"fantasy",}}> Back Home Page</Link>
        </div>
        );

}

export default  TrailerMovie ;