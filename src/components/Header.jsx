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
import { useContext } from 'react';
import { UserContext } from '../context/userContext';


function NavScroll() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [state, dispatch] = useContext(UserContext)
  const user = localStorage.getItem('token')
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);

  const handleLogout = () => { 
    localStorage.removeItem("token")
    navigate("/");
  };

  useEffect(() => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [state, handleLogout]);

  return (
    <Navbar className= "fixed-top" bg="" expand="lg" style={{backgroundColor:"transparent"}}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="" style={{ width: "75%" }}navbarScroll >
            <Nav.Link as =  {Link} to='/' className="text-light fs-5 fw-bold ms-5" >Home</Nav.Link>
            <Nav.Link as =  {Link} to='/tvshow' className="text-light fs-5 fw-bold ms-3" >TV Shows</Nav.Link>
            <Nav.Link as =  {Link} to='/movies' className="text-light fs-5 fw-bold ms-3" >Movies</Nav.Link>
          </Nav>
        <Navbar.Brand as = {Link} to="/"  style= {{ width: "100%",padding:"0px 0px 0px 180px" }} ><img src={LogoDF} alt="" /></Navbar.Brand>
          
          
          <Nav>
            {isLogin ? (
              <Dropdown style={{paddingRight:"115px"}}>
                <Dropdown.Toggle id="user-dropdown" variant="white">
                  <img src={masgan} alt="Masgan" width={50} className="rounded-pill" />
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark" style={{alignItem:"left", marginTop:"7px"}}>
                  <Dropdown.Item as = {Link} to="/profile">
                    <FaUserAlt className="text-danger me-2" />{" "}
                    <span>Profile</span>
                  </Dropdown.Item>

                  <Dropdown.Item as = {Link} to="/payment">
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