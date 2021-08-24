import React from "react";
import { Card,Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const MovieCard = ({movie}) => {
    console.log(movie)
    return (
      <>
     <Card style={{ width: '16rem' }}>
     <Card.Img variant="top" src={movie.posterUrl} style={{height:'400px'}} />
     <Card.Body>
     <Card.Title>{movie.title}</Card.Title>
     <Card.Text>
     {movie.description}
     <h6>Rating: {movie.rating}</h6>
     </Card.Text>
     </Card.Body>
     <div style={{textAlign:'center', marginBottom:'1.4rem'}}>
     <Link to={`/Trailer/${movie.id}`}> <Button style={{backgroundColor:" #034f84"}}>More details</Button></Link>
     </div>
     </Card>
      </>
    );
   };
   export default  MovieCard; 