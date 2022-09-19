import React, {useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { UserContext } from '../../context/userContext';
import { useMutation } from 'react-query';
import {Alert} from 'react-bootstrap'
import API from '../../config/api';
import '../../components/Auth.modules.css'

// const dataLogin = JSON.parse(localStorage.getItem("dataLogin"));
// const email = dataLogin.email;
// const password = dataLogin.password;


const UserDataObject = {
  name: "",
  email: "",
  gender: "",
  phone: "",
  address: "",
  password: "",
  photo: "",
  status: "Active",
  role : "" ,
};

const AuthModal = ({ show, handleClose }) => {
  const [isLogin, setIsLogin] = useState(false);
  
  const [iconPassword, seticonPassword] = useState(false);

  const navigate = useNavigate();
  
  const switchMode = () => {
    setUserData(UserDataObject);
    seticonPassword(false);
    setIsLogin(!isLogin);
  };

  const [userData, setUserData] = useState(UserDataObject);

  const handleChange = (event) => {
    setUserData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataLogin = {
      Email : userData.email,
      Password : userData.password
    }

    const dataRegister = {
      Name : userData.name,
      Email : userData.email,
      Gender : userData.gender,
      Phone : userData.phone,
      Address : userData.address,
      Password : userData.password,
      Role : userData.role
    }
    
    if (isLogin) {
      try {
        let result = await API.post('/register', dataRegister)
        console.log(result)
        Swal.fire(
          'Good job!',
          'Succesfuly Register',
          'success'
          )
          setIsLogin(false)
      } catch (err){
        console.log(err)
      }
    } else {   
      try {
        let result = await API.post('/login', dataLogin)
        console.log(result)
        
            if (dataRegister.role == "admin") {
              navigate("/admin");
            } else {
              navigate("/")
            }

        localStorage.setItem("user", JSON.stringify(userData));
        handleClose();
      } catch (err) {
        console.log(err)
      }
    }

  };

  return (
    <Modal show={show} onHide={handleClose}>

      <Modal.Header className="bg-dark text-white border-0">
        <Modal.Title>{isLogin ? "Register" : "Login"}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-white border-0">
        <Form className="px-1" onSubmit={handleSubmit}>
          
           {/* Full Name */}
           {isLogin && (
            <Form.Group className="mb-3" controlId="name">
              <Form.Control type="text" name="name" placeholder="Full Name" className="bg-gradient-secondary" onChange={handleChange} />
            </Form.Group>
          )}
          {/* Email */}
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" name="email"  placeholder="Email" onChange={handleChange} />
          </Form.Group>

          {/* Gender */}
          {isLogin && (
            <Form.Select className="mb-3" onChange={handleChange} name="gender" >
              <option disabled selected hidden>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          )}

          {/* Phone*/}
          {isLogin && (
            <Form.Group className="mb-3" controlId="phone">
              <Form.Control name="phone" type="text" placeholder="Phone" onChange={handleChange} />
            </Form.Group>
          )}

          {/* Address */}
          {isLogin && (
            <Form.Group className="mb-3" controlId="address">
              <Form.Control as="textarea" name="address" placeholder="Address"  onChange={handleChange} />
            </Form.Group>
          )}

            {/* Password */}
            <div className="mb-3 pw__container">
            <Form.Group controlId="password">
              <Form.Control type={iconPassword ? "text" : "password"} name="password" placeholder="Password" onChange={handleChange} />
            </Form.Group>
          </div>

          <div className="bg-dark text-white border-0 d-grid gap-2 p-4">
            <Button variant = {isLogin ? "light" : "danger"} type="submit" className={isLogin ? "text-danger" : "text-white"}>
              {isLogin ? "Register" : "Login"}
            </Button>
            
            <p className="text-muted text-center mt-2">
              {isLogin ? "Already have an account? Click " : "Don't have an account? Click "} {" "}
              <span className="switchBtn text-primary" onClick={switchMode}> Here </span>
            </p>
          </div>

        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;