import React, {useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/userContext';
import { useMutation } from 'react-query';
import {Alert} from 'react-bootstrap'
import API from '../../config/api';
import '../../components/Auth.modules.css'

const AuthModal = ({ show, handleClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
    password: "",
    status: "Active",
  });

  const {email, password, fullname, gender, phone, address } = form;

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  };


  const handleSubmit = useMutation(async (event) => {
    try {
      event.preventDefault()
    // Configuration content-type
    const config = {
        headers : {
          'Content-type': 'application/json',
        }
      }

    if (isRegister) {

        // Data body
        const body = JSON.stringify(form);

        // Insert data ke database
        let result = await API.post('/register', body, config)
        console.log(result)

            // Notifikasi
            if(result.status === 200) {
              const alert = (
                <Alert variant="success" className="py-1">
                  Success
                </Alert>
              );
              setMessage(alert);
              setForm({
                name: "",
                email: "",
                gender: "",
                phone: "",
                address: "",
                password: "",
              });
              switchRegister()
            } else {
              const alert = (
                <Alert variant="danger" className="py-1">
                  Failed regist
                </Alert>
              );
              setMessage(alert);
            }
          } else {
            // Data body
            const body = JSON.stringify(form) 
            
            // Insert data ke database
            let result = await API.post('/login', body, config)
            console.log(result)

            // Notification
            if (result.status === 200) {
              // send data to useContext
              dispatch({
                type:"LOGIN_SUCCESS",
                payload: result.data.data
              })
              const alert = (
                <Alert variant="success" className="py-1">
                  Success
                </Alert>
              );
              setMessage(alert);
              setForm({
                email: "",
                password: "",
              });
            } else {
              const alert = (
                <Alert variant="danger" className="py-1">
                  Failed Login
                </Alert>
              );
              setMessage(alert);
            }
          if (result.data.data.role === "admin") {
            navigate('/admin')
          } else {
            navigate('/')
          }
          handleClose()
        }

    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  })

  const switchRegister = () => {
    setForm(form)
    setIsRegister(!isRegister)
  } 

  return (
    <Modal show={show} onHide={handleClose}>

      <Modal.Header className="bg-dark text-white border-0">
        <Modal.Title>{isRegister ? "Register" : "Login"}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-white border-0">
        {message && message}
        <Form className="px-1" onSubmit={(event) => handleSubmit.mutate(event)}>
          
           {/* Full Name */}
           {isRegister && (
            <Form.Group className="mb-3" controlId="name">
              <Form.Control type="text" name="name" placeholder="Full Name" className="bg-gradient-secondary" onChange={handleChange} />
            </Form.Group>
          )}
          {/* Email */}
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" name="email"  placeholder="Email" onChange={handleChange} />
          </Form.Group>

          {/* Gender */}
          {isRegister && (
            <Form.Select className="mb-3" onChange={handleChange} name="gender" >
              <option disabled selected hidden>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          )}

          {/* Phone*/}
          {isRegister && (
            <Form.Group className="mb-3" controlId="phone">
              <Form.Control name="phone" type="text" placeholder="Phone" onChange={handleChange} />
            </Form.Group>
          )}

          {/* Address */}
          {isRegister && (
            <Form.Group className="mb-3" controlId="address">
              <Form.Control as="textarea" name="address" placeholder="Address"  onChange={handleChange} />
            </Form.Group>
          )}

            {/* Password */}
            <div className="mb-3 pw__container">
            <Form.Group controlId="password">
              <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
            </Form.Group>
          </div>

          <div className="bg-dark text-white border-0 d-grid gap-2 p-4">
            <Button variant = {isRegister ? "light" : "danger"} type="submit" className={isRegister ? "text-danger" : "text-white"}>
              {isRegister ? "Register" : "Login"}
            </Button>
            
            <p className="text-muted text-center mt-2">
              {isRegister ? "Already have an account? Click " : "Don't have an account? Click "} {" "}
              <span className="switchBtn text-primary" onClick={switchRegister}> Here </span>
            </p>
          </div>

        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;