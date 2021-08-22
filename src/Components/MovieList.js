import MovieCard from './MovieCard';
import { Col,Container,Row} from "react-bootstrap";
const MovieList = ({movies}) => {
    return (

      <Container>   
     <Row>
     {
            movies.map((item) => {
                return( 
                     <Col md={3}>
                <MovieCard movie={item} />
            </Col>)

            })
     }
     </Row>

     </Container>

    );
   };
   export default  MovieList;
