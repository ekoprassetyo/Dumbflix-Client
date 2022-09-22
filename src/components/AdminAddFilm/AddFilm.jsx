import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Alert, Button   } from 'react-bootstrap'
import { CgAttachment } from 'react-icons/cg';
import {useNavigate} from 'react-router-dom'
import {useMutation} from 'react-query'
import API from '../../config/api'

function AddFilm() {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [categoryId, setCategoryId] = useState([]);
    const [preview, setPreview] = useState(null) // preview foto
    const [message, setMessage] = useState("")
    
    const getCategories = async () => {
        try {
            const response = await API.get("/categories")
            setCategories(response.data.data)
        } catch (err){
            console.log(err)
        }
    }

    const [form, setForm] = useState({
        title: "",
        thumbnailfilm: "",
        year: "",
        linkfilm: "",
        description: "",
        category_id: 0
    })

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]:
            event.target.type === "file" ? event.target.files : event.target.value
        })

        if (event.type === "file") {
            let url = URL.createObjectURL(event.target.files[0])
            setPreview(url)
        }
    }

    const handleSubmit = useMutation(async (event) => {
        try {
          event.preventDefault();
    
          // Configuration Content-type
          const config = {
            headers: {
              "Content-type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.token}`,
            },
          };
          
          const formData = new FormData();
          formData.set("title", form?.title)
          formData.set("description", form?.description)
          formData.set("year", form?.year)
          formData.set("linkfilm", form?.linkfilm)
          formData.set("category_id", form?.category_id)
          formData.set("image", form.thumbnailfilm[0], form.thumbnailfilm[0].name)
    
          console.log(form);
    
          const response = await API.post("/film", formData, config);
          console.log(response);
    
          navigate("/listfilm");
    
          // Handling response here
        } catch (error) {
          const alert = (
            <Alert variant="danger" className="py-1">
              Failed
            </Alert>
          );
          setMessage(alert);
          console.log(error);
        }
      });
    
      useEffect(() => {
        getCategories();
      }, []);


  return (
<div style={{marginTop:"100px" , padding:"0px 150px"}}>
    <div>
        <h2 className="text-light fw-bold">Add Film</h2>
    </div>
<form onSubmit={(event) => handleSubmit.mutate(event)}>
    <Form.Group className="mb-2">
        <Row>
            <Col sm={10}>
                <Form.Label ></Form.Label>
                <Form.Control placeholder="Title" name="title" onChange={handleChange} className="bg-dark text-light" />
            </Col>
            <Col sm={2}>
                <Form.Label className="mt-4 bg-dark text-secondary px-1 py-1" style={{borderRadius:"8px", border:"1px solid", cursor: "pointer"}}>Attach Thumbnail<CgAttachment style={{color:"red" , fontSize:"20px"}}/> 
                    <Form.Control type="file" name="thumbnailfilm" onChange={handleChange} className="bg-dark" hidden/>
                </Form.Label>
            </Col>
        </Row>

    <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control placeholder="Year" name="year" onChange={handleChange} className="bg-dark text-light"></Form.Control>
    </Form.Group>
    <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control placeholder="Link Film" name="linkfilm" onChange={handleChange} className="bg-dark text-light"></Form.Control>
    </Form.Group>
    </Form.Group>
    <Form.Group className="mb-2">
      <Form.Label></Form.Label>
      <Form.Select className="bg-dark text-light" name="category_id" onChange={handleChange}>
        <option disabled selected hidden>Category</option>
                {categories.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}

      </Form.Select>
    </Form.Group>
    <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control placeholder="Description" as="textarea" name="description" onChange={handleChange} style={{ height: "150px", resize:"none"}} className="bg-dark text-light"></Form.Control>
    </Form.Group>
    <div className="d-flex form-group mb-4 justify-content-end pt-3">
          <Button className="btn bg-danger text-white border-0 btn-regis px-5" type="submit" >
            Save
          </Button>
    </div>
    </form>
  </div>
  )
}

export default AddFilm