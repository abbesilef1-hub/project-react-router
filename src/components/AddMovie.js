import React from 'react'
import './addMovie.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddMovie({movies, setadd}) {


  const [newmovie, setnewmovie] = useState(
    {
      titre:"",
      description:"",
      posterURL:"",
      note:""
    }
  )
  const handlechange=()=>{
    setadd([...movies, newmovie])
  }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <>
      <Button variant="outline-danger" onClick={handleShow} id='but1'>
        +
      </Button>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='titleform'>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:"flex", flexDirection:"row", gap:"30px"}}>
          <img style={{width:"50%", height:"380px", left:"10px"}} src='https://preview.redd.it/red-posters-v0-xinf8e5u8nre1.jpeg?width=640&crop=smart&auto=webp&s=5bf95421012a0ff92446bd903d50789585313999' alt='error'/>
          <Form>
            <div className='droiteform'>
      <Form.Group className="mb-3 movie-input" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" onChange={(e)=>setnewmovie({...newmovie,titre:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3 movie-input" controlId="formBasicEmail">
        <Form.Label>Movie Description</Form.Label>
        <Form.Control type="text" placeholder="Enter movie description" onChange={(e)=>setnewmovie({...newmovie,description:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3 movie-input" controlId="formBasicEmail">
        <Form.Label>Movie Image</Form.Label>
        <Form.Control type="text" placeholder="Enter movie image" onChange={(e)=>setnewmovie({...newmovie,posterURL:e.target.value})} id='imgadd'/>
      </Form.Group>

      <Form.Group className="mb-3 movie-input" controlId="formBasicEmail">
        <Form.Label>Movie Rating</Form.Label>
        <Form.Control type="text" placeholder="Enter movie rating" onChange={(e)=>setnewmovie({...newmovie,note:e.target.value})} />
      </Form.Group>
      </div>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>{handlechange(); handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  </div>
  )
}

export default AddMovie




