import React from 'react'
import {Button,Modal,Form} from 'react-bootstrap';
import {useState} from 'react';
function Add () {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [title,setTitle]=useState ("");
    const [description,setDescription]=useState ("");
    const [image,setImage]=useState ("");
    const [rate,setRate]=useState ("");

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add new Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie Title</Form.Label>
    <Form.Control type="email" placeholder="Give the title"  onChange = {(e)=> setTitle (e.target.Value)   } />
    <Form.Label>Movie Description</Form.Label>
    <Form.Control type="email" placeholder="Give a brief description of the movie" onChange = {(e)=> setDescription (e.target.Value)   } />
    <Form.Label>PosterURL</Form.Label>
    <Form.Control type="email" placeholder="Give the adress of the Poster movie"  onChange = {(e)=> setImage (e.target.Value)   }/>
    <Form.Label>Movie Rating</Form.Label>
    <Form.Control type="email" placeholder="Give the rate of movie" onChange = {(e)=> setRate (e.target.Value)   } />
  </Form.Group>
  
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  

export default Add
