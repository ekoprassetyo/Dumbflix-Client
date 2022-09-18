import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoDF from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap';
import Film from '../../assets/images/film.png'
import Logout from '../../assets/images/logout.png'
import Profile from '../../assets/images/profil.png'

function HeaderAdmin() {
  return (
    <Navbar className= "fixed-top bg-dark" bg="dark" expand="lg" >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="" style={{ width: "75%" }}navbarScroll >
            <Nav.Link href="#action1" className="text-light fs-5 fw-light ms-5" ><img src={LogoDF} alt="" /></Nav.Link>
          </Nav>
          <Navbar variant="dark" bg="dark" expand="lg" >
        <Container fluid >
          <Navbar.Toggle aria-controls="navbar-black-example" className='bg-dark' />
          <Navbar.Collapse id="navbar-black-example" className='bg-dark'>
                <Nav className='bg-dark'>
                  <img alt="foto profile" src={Profile} width="50px" style={{backgroundColor:"black"}} className="rounded-pill" height="40"/>
                    <NavDropdown variant="dark">
                    <NavDropdown.Item href="/listfilm" className='d-flex bg-dark '>
                    <img src={Film} alt="film" />
                    <p className='text-danger mt-3 mb-2' >Film</p>
                    </NavDropdown.Item>
                    <hr ></hr>
                    <NavDropdown.Item href="/list" className='d-flex bg-dark ' >
                    <img src={Logout} alt="logout" />
                    <p className='text-danger mt-3 mb-2'>Log out</p>
                    </NavDropdown.Item>
                    </NavDropdown>
              </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderAdmin;