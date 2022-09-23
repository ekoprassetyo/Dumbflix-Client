import React, {useContext} from 'react'
import {
  FaEnvelope,
  FaFemale,
  FaMale,
  FaMapMarked,
  FaPhone,
  FaRegMoneyBillAlt,
  FaUserCircle,
} from "react-icons/fa";
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profileUser from '../../assets/images/profileUser.png';
import { useQuery } from 'react-query';
import API from '../../config/api';
import { UserContext } from '../../context/userContext';

function ProfileHome() {

  const [state, dispatch] = useContext(UserContext)
  console.log("ini state profile", state)
  

  return (
    <Container>
    <Row className="justify-content-center" style={{padding:"150px 0" }}>
      <Col md={8}>
        <Card className="rounded shadow border-0 bg-dark text-white p-5" >
          <div className="d-flex justify-content-between">
            <div className="me-5">
              <h3>Personal Info</h3>
              <div className="mt-3">
                {/* Full Name */}
                <div className="d-flex mb-3 align-items-start">
                  <FaUserCircle className="text-danger me-3 fs-1" />
                  <div>
                    <h5>{state.user.name}</h5>
                    <p className="text-muted">Full Name</p>
                  </div>
                </div>
                {/* Email */}
                <div className="d-flex mb-3 align-items-start">
                  <FaEnvelope className="text-danger me-3 fs-1" />
                  <div>
                    <h5>{state.user.email}</h5>
                    <p className="text-muted">Email Address</p>
                  </div>
                </div>
                {/* Status */}
                <div className="d-flex mb-3 align-items-start">
                  <FaRegMoneyBillAlt className="text-danger me-3 fs-1" />
                  <div>
                    <h5>{state.user.subscribe}Active</h5>
                    <p className="text-muted">Status</p>
                  </div>
                </div>
                {/* Gender */}
                <div className="d-flex mb-3 align-items-start">
                  {state.user.gender === "Male" ? (
                    <FaMale className="text-danger me-3 fs-1" />
                  ) : (
                    <FaFemale className="text-danger me-3 fs-1" />
                  )}
                  <div>
                    <h5>{state.user.gender}</h5>
                    <p className="text-muted">Gender</p>
                  </div>
                </div>
                {/* Phone */}
                <div className="d-flex mb-3 align-items-start">
                  <FaPhone className="text-danger me-3 fs-1" />
                  <div>
                    <h5>{state.user.phone}</h5>
                    <p className="text-muted">Phone Number</p>
                  </div>
                </div>
                {/* Address */}
                <div className="d-flex mb-3 align-items-start">
                  <FaMapMarked className="text-danger me-3 fs-1" />
                  <div>
                    <h5>{state.user.address}</h5>
                    <p className="text-muted">Address</p>
                  </div>
                </div>
              </div>
            </div>
              <div style={{display:"flex", alignContent:"center" }}>
                <img src={profileUser} alt="avatar" className="profile-avatar" style={{objectFit:"cover", borderRadius:"8px", boxShadow:"10px 10px 10px rgba(0,0,0, 0.425)"}} />
              </div>
          </div>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default ProfileHome