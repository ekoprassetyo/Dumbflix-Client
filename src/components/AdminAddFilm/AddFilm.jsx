import React from 'react'
import { Form, Row, Col, FloatingLabel  } from 'react-bootstrap'
import { CgAttachment } from 'react-icons/cg';

function AddFilm() {
  return (
<div style={{marginTop:"100px" , padding:"0px 150px"}}>
    <div>
        <h2 className="text-light fw-bold">Add Film</h2>
    </div>
<form>
    <Form.Group className="mb-2">
        <Row>
            <Col sm={10}>
                <Form.Label ></Form.Label>
                <Form.Control placeholder="Title"  className="bg-dark text-light" />
            </Col>
            <Col sm={2}>
                <Form.Label className="mt-4 bg-dark text-secondary px-1 py-1" style={{borderRadius:"8px", border:"1px solid"}}>Attach Thumbnail<CgAttachment style={{color:"red" , fontSize:"20px"}}/> 
                    <Form.Control type="file"  className="bg-dark" hidden/>
                </Form.Label>
            </Col>
        </Row>

    <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control placeholder="Year" className="bg-dark text-light"></Form.Control>
    </Form.Group>
    </Form.Group>
    <Form.Group className="mb-2">
      <Form.Label></Form.Label>
      <Form.Select className="bg-dark text-light">
        <option>Category</option>
        <option>TV Series</option>
        <option>Movies</option>
      </Form.Select>
    </Form.Group>
    <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control placeholder="Description" as="textarea" style={{ height: "150px", resize:"none"}} className="bg-dark text-light"></Form.Control>
    </Form.Group>
    <Form.Group>
        <Row>
            <Col sm={10}>    
                <Form.Label></Form.Label>
                <Form.Control placeholder="Title Episode" className="bg-dark text-light"></Form.Control>
            </Col>
            <Col sm={2}>
                <Form.Label className="mt-4 bg-dark text-secondary px-1 py-1" style={{borderRadius:"8px", border:"1px solid"}}>Attach Thumbnail<CgAttachment style={{color:"red" , fontSize:"20px"}}/> 
                    <Form.Control type="file"  className="bg-dark" hidden/>                
                </Form.Label>
            </Col>
        </Row>
    </Form.Group>
    <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control placeholder="Link Film" className="bg-dark text-light"></Form.Control>
    </Form.Group>
    <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control placeholder="" className="bg-dark text-light"></Form.Control>
    </Form.Group>
    </form>
  </div>
  )
}

export default AddFilm