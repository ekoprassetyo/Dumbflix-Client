import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react'
import TheGodFather from "../../assets/images/GodFather.png"
import Batman from "../../assets/images/Batman.png"
import Avengers from "../../assets/images/Avengers.png"
import JokerMv from "../../assets/images/JokerMv.png"
import Parasite from "../../assets/images/Parasite.png"
import Chernobly from "../../assets/images/Cernobyl.png"
import ST from "../../assets/images/ST.png"
import Grave from "../../assets/images/Grave.png"
import Totoro from "../../assets/images/Totoro.png"
import QuietPlace from "../../assets/images/QuietPlace.png"
import Frozen from "../../assets/images/Frozen.png"
import Suicide from "../../assets/images/SQ.png"
import FilmCard from './FilmCard';
import API from '../../config/api';
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from 'react-query';
import Square from "../../components/Timbul.module.css"

function ListFilm() {

    let { data: films } = useQuery("filmsCache", async () => {
        const response = await API.get("/films");
        return response.data.data;
    })


  return (
    <>
    <div style={{marginTop:"50px"}} className="d-flex me-2">
        <div className="w-100">
        <Container fluid>
            <div className="d-flex" style={{width:"100%"}}>
                <div >
                    <h3 className="ms-5 me-3 text-light">List Film</h3>
                </div>
                <div className="d-flex" style={{}}>
                    <Dropdown className="dropdown">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{backgroundColor:"transparent" , padding:"5px 20px"}}> Category 
                        </Dropdown.Toggle>

                    <Dropdown.Menu className="bg-dark">
                        <Dropdown.Item href="/listfilm" className="text-light" >TV Series</Dropdown.Item>
                        <Dropdown.Item href="/listfilm" className="text-light">Movies</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="ms-auto me-5">
                <Link to = "/addfilm">  <button className="text-light fw-semibold" style={{padding:"5px 50px" , borderRadius:"10px" , backgroundColor:"red"}}> Add Film</button></Link>
                </div>
            </div>
            </Container>
        </div>
    </div>
    <div>

        <div>
        <Container className="my-5 overflow-hidden" style={{backgroundColor: "black"}}>
        <h3 className="text-start text-white fw-bold mb-3">TV Series</h3>
        <Row> 
          {films?.map((movies, index) => (
            <Col md={2} key={index}>
                    <FilmCard
                    id={movies.id}
                    filmImg={movies.thumbnailfilm}
                    title={movies.title}
                    year={movies.year}
                    />
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    </div>    
    </>

    
  )
}

export default ListFilm