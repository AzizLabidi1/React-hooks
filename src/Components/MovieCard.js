import React from "react";
import { Card,Button} from "react-bootstrap";
const MovieCard = (props) => {
    console.log(props.movie)
    return (
      <>
     <Card style={{ width: '16rem' }}>
     <Card.Img variant="top" src={props.movie.posterUrl} style={{height:'400px'}} />
     <Card.Body>
     <Card.Title>{props.movie.title}</Card.Title>
     <Card.Text>
     {props.movie.description}
     <h6>Rating: {props.movie.rating}</h6>
     </Card.Text>
     <Button style={{backgroundColor:" #034f84"}}>More details </Button>
     </Card.Body>
     </Card>
      </>
    );
   };
   export default  MovieCard; 