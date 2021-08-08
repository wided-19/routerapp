import { red } from '@material-ui/core/colors'
import { Rating } from '@material-ui/lab'
import React from 'react'
import{Navbar, Form,Nav,FormControl, Button } from 'react-bootstrap'

const Filter = ({setFilterTitel, FilterRating,setFilterRating}) => {
   return (
        <div>
 <Navbar bg="light" expand="lg" >

 <Navbar.Brand href="#"style={{color:"red",fontSize:"30px",
 fontFamily:"Brush Script MT"}}>My Movie App</Navbar.Brand>

  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '90px',  }}
      navbarScroll
    >
      
    </Nav>
    <Form className="d-flex">
      <FormControl 
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={(e)=>setFilterTitel(e.target.value)}
      />
     
      <Rating name="read-only"
      value={FilterRating}
      onChange={(event,newValue)=>{
      setFilterRating(newValue);
      }
      }/>

    </Form>
     
  </Navbar.Collapse>
</Navbar>
 
  
     
        </div>
    )
}

export default Filter
