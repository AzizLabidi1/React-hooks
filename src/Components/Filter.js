import { FormControl,Container,Form,Button} from "react-bootstrap";
import { useState } from 'react';
import { useRef } from 'react';
const Filter = ({movies,FnSearch}) => {

    const searchref= useRef();
  
    const[bool, setbool]=useState(false)
  
    const handlesubmit=()=> {

        FnSearch(searchref.current.value)
        setbool(true)
  
    }
    return (
      <Container>
   <Form className="d-flex">
       <Form.Label style={{color:" #034f84"}} > Search </Form.Label>
       &nbsp;&nbsp;
      <FormControl
        type="search"
        ref= {searchref}
        placeholder="Filter the movies with title/rating"
        onChange={(e) =>handlesubmit(e) }
        className="mr-2"
        aria-label="Search"
      />
</Form> 
     </Container>
    
    );
   };
   export default  Filter;