import Form from 'react-bootstrap/Form';
import LogoDF from '../assets/images/logo.png'
import { useState } from "react";
import React from "react";
import { Navbar, Container, Nav, Button, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthModal from "../components/Auth/AuthModal";
// import dumbflixLogo from "../assets/images/dumbflix_logo.png";
import { useEffect } from "react";
import masgan from "../assets/images/masgan.png";
import AdminAnduser from "../components/adminAnduser"
import { FaUserAlt, FaMoneyBillAlt, FaSignOutAlt } from "react-icons/fa";


function NavScroll() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [isRegister, setisRegister] = useState(false);
  
  // const [isLogin, setIsLogin] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const handleLogout = () => { localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    if (user) setisRegister(true);
    else setisRegister(false);
  }, [user, handleLogout]);



  return (
    <Navbar className= "fixed-top" bg="dark" expand="lg" >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="" style={{ width: "75%" }}navbarScroll >
            <Nav.Link as =  {Link} to='/' className="text-light fs-5 fw-light ms-5" >Home</Nav.Link>
            <Nav.Link as =  {Link} to='/tvshow' className="text-light fs-5 fw-light ms-3" >TV Shows</Nav.Link>
            <Nav.Link as =  {Link} to='/movies' className="text-light fs-5 fw-light ms-3" >Movies</Nav.Link>
          </Nav>
        <Navbar.Brand href="/"  style= {{ width: "100%",padding:"0px 0px 0px 180px" }} ><img src={LogoDF} alt="" /></Navbar.Brand>
          
          
          <Nav>
            {isRegister ? (
              <Dropdown style={{paddingRight:"115px"}}>
                <Dropdown.Toggle id="user-dropdown" variant="white">
                  <img src={masgan} alt="Masgan" width={30} className="rounded-pill" />
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark" style={{alignItem:"left", marginTop:"7px"}}>
                  <Dropdown.Item href="/profile">
                    <FaUserAlt className="text-danger me-2" />{" "}
                    <span>Profile</span>
                  </Dropdown.Item>

                  <Dropdown.Item href="/payment">
                    <FaMoneyBillAlt className="text-danger me-2" />{" "}
                    <span>Pay</span>
                  </Dropdown.Item>

                  <Dropdown.Divider className="bg-secondary" />

                  <Dropdown.Item href="#" onClick={handleLogout}>
                    <FaSignOutAlt className="text-danger me-2" />
                    <span>Logout</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
            ) : (
              <Form className="d-flex">
              {/* <Button variant="light" className="text-danger fw-bold me-3 px-5" onClick={handleShow}>Register</Button> */}
              <Button variant="danger" className="bg-danger me-5 fw-bold px-5" onClick={handleShow}>Login</Button>
              </Form>
            )}
            <AuthModal show={show} handleClose={handleClose} />
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;