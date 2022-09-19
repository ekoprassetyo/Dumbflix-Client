
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, Link } from 'react-router-dom';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../assets/images/dumbflix_logo.png';
import Masgan from '../assets/images/masgan.png';
import FilmLogo from '../assets/images/film.png';
import LogOut from '../assets/images/logout.png';
import { FaLink } from 'react-icons/fa';



function HeaderAdmin() {
    
  const navigate = useNavigate();  
//   const handleLogout = () => { localStorage.removeItem("user");
//   navigate("/");
// };

  return (
    <Navbar bg="dark" expand="lg" className="sticky-sm-top">
    <Container variant="dark" style={{ paddingRight:"40px"}}>
        <Navbar.Brand as = {Link} to="/admin">
            <img
                alt=""
                src={Logo}
                width="100"
                backgroundColor={"black"}
                height="40"
                className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
        <Navbar.Brand >
            <Navbar variant="dark" bg="dark" expand="lg" >
                <Container fluid >
                    <Navbar.Toggle aria-controls="navbar-black-example" className='bg-dark' />
                    <Navbar.Collapse id="navbar-black-example" className='bg-dark' >
                        <Nav>
                            <img
                                alt=""
                                src={Masgan}
                                width="50"
                                backgroundColor={"black"}/>
                            <Dropdown >
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant='dark' >
                                    <Dropdown.Item as = {Link} to="/listfilm" className='d-flex '>
                                        <img src={FilmLogo} alt="image3" />
                                        <p className='text-danger  mx-2 mt-3 mb-2'>Film</p>
                                    </Dropdown.Item>
                                    <hr></hr>
                                    <Dropdown.Item as = {Link} to="/" className='d-flex'>
                                        <img src={LogOut} alt="image4" />
                                        <p className='text-danger  mx-2 mt-3 mb-2'>Log out</p>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Navbar.Brand>
    </Container>
</Navbar >


  );
}

export default HeaderAdmin;