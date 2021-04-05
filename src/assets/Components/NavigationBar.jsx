import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../img/uncorkedLogo.png';



const useStyles = makeStyles((theme) => ({
    wasteSpace:{
      height:'90px',
    }
  }));

export default function NavigationBar() {
    const classes = useStyles();

  return (
    <>
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home"> 
        <img
          src={logo}
          width="150"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#">Stories</Nav.Link>
          <Nav.Link href="#">Podcast</Nav.Link>
          <Nav.Link href="#">Events</Nav.Link>
          <Nav.Link href="#">Guests</Nav.Link>
          <Nav.Link href="#">Blogs</Nav.Link>
          <Nav.Link href="#">Behind the Curtains</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className={classes.wasteSpace}></div>
    </>
  );
}
