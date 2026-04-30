import React, { useState } from 'react'
import './navbarr.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';

function Navbarr({settext, setrate}) {

  const [openPages, setOpenPages] = useState(false);
  const [openBlog, setOpenBlog] = useState(false);

  return (
    <Navbar bg="dark" data-bs-theme="dark" className='nav'>
      <Container fluid>
        <Navbar.Brand href="#" className='icon'>
            <img src='https://elementor.dostguru.com/cms/animex/wp-content/uploads/2020/12/logo-1.png'/>
            <h2>Movies</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 list"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            {/* home */}
            <Nav.Link href="#action1"><Link to="/" className="nav-item-link" id='act'>Home</Link></Nav.Link>

            {/* pages */}
            <Nav.Link
  className="nav-item-link"
  onClick={() => setOpenPages(!openPages)}
>
  Pages <span id="fleche">v</span>
</Nav.Link>

{openPages && (
  <div className="dropdown-menu-custom-page">
    <Nav.Link href="#ticket" className="itempage">Ticket</Nav.Link>
    <Nav.Link href="#shows" className="itempage">Shows</Nav.Link>
    <Nav.Link href="#about" className="itempage">About Us</Nav.Link>
    <Nav.Link href="#service" className="itempage">Service</Nav.Link>
  </div>
)}

          {/* blog */}
          <Nav.Link
  className="nav-item-link"
  onClick={() => setOpenBlog(!openBlog)}
>
  Blog <span id="fleche">v</span>
</Nav.Link>

{openBlog && (
  <div className="dropdown-menu-custom-blog">
    <Nav.Link href="#lisy" className="itempage">Blog List</Nav.Link>
    <Nav.Link href="#clean" className="itempage">Blog Clean</Nav.Link>
    <Nav.Link href="#image" className="itempage">Blog Image</Nav.Link>
    <Nav.Link href="#text" className="itempage">Blog Only Text</Nav.Link>
  </div>
)}
            {/* contact */}

            <Nav.Link href="#action2"><Link to="/contact" className="nav-item-link">Contact Us</Link></Nav.Link>

          </Nav>

          
          <div className='starnav'>
          <ReactStars count={5} size={24} color2={"#ffd700"} onChange={(newRating)=>setrate(newRating)} />
          </div>
          <Form className="d-flex search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 input"
              aria-label="Search"
              onChange={(e)=>settext(e.target.value)}
            />
            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg></button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarr