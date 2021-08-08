import React from 'react'
import {Card} from 'react-bootstrap';
import {Rating} from '@material-ui/lab'
import {Link} from "react-router-dom"

export const MovieCard = ({movie}) => {
  return (
     
        <div style={{ marginTop:"30px"}}>

  <Card style={{ width: '20rem', height:"450px"}}>
  <Card.Img variant="top" src={movie.image} style={{ width:'auto', height:'50%'}} />
  <Card.Body style={{textAlign:"center" ,fontSize:"20px"}}>

  <Link to={`/Trailer/${movie.id}`}><Card.Title>{movie.push}</Card.Title></Link>

<Card.Title>{movie.name}</Card.Title>
  
     <Card.Text> {movie.title} </Card.Text>
    <Card.Text> {movie.date} </Card.Text>
    <Card.Text> {movie.type} </Card.Text>
    <Rating name="read-only" value={movie.rating} readOnly/>    
  </Card.Body>
</Card>
        </div>
    )
}
