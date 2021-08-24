import { FormControl,Container,Form,Button,Col} from "react-bootstrap";
import { useState } from 'react';
import { useRef } from 'react';
import '../App.css';
const AddMovie = ({addMovie}) => {
const[bool, setbool]=useState(false)
    const handlesubmit=()=> {  
        setbool(true)
    }
    // const titleRef = useRef();
    // const descriptionRef = useRef();
    // const posterRef = useRef();
    // const ratingRef = useRef();
    // const handleclick=()=>{
    //   addMovie();
    // }
    return (
        <Container >
        <Form style={{color:"#034f84" }}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicURL">
          <Form.Label>Poster Url</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRating">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button style={{backgroundColor:" #034f84"}} type="submit">
          Submit
        </Button>
      </Form>
      </Container>
  
    );
   };
   export default  AddMovie;