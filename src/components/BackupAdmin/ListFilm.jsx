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

function ListFilm() {
    const [filmList, setFilmList] = useState([
        {
            filmImg : Avengers ,
            title : "Avengers: Endgame",
            year : 2019,
        } ,
        {
            filmImg : Batman ,
            title : "Batman",
            year : 2019,
        } ,
        {
            filmImg : TheGodFather ,
            title : "The GodFather",
            year : 2019,
        } ,
        {
            filmImg : Totoro ,
            title : "Totoro",
            year : 2019,
        } ,
        {
            filmImg : JokerMv ,
            title : "Joker",
            year : 2019,
        } ,
        {
            filmImg : Suicide ,
            title : "Suicide Squad" ,
            year : 2019,
        } ,
        {
            filmImg : ST ,
            title : "Serigala Terakhir" ,
            year : 2019,
        } ,
        {
            filmImg : QuietPlace ,
            title : "Quiet Place",
            year : 2019,
        } ,
        {
            filmImg : Parasite ,
            title : "Parasite",
            year : 2019,
        } ,
        {
            filmImg : Chernobly ,
            title : "Chernobly",
            year : 2019,
        } ,
        {
            filmImg : Grave ,
            title : "Grave",
            year : 2019,
        } ,
        {
            filmImg : Frozen ,
            title : "Frozen II",
            year : 2019,
        } ,
    ])
  return (
    <>
    <div style={{marginTop:"120px"}} className="d-flex me-2">
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
                        <Dropdown.Item href="#/action-2" className="text-light" >TV Series</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" className="text-light">films</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="ms-auto me-5">
                <button className="text-light fw-semibold" style={{padding:"5px 50px" , borderRadius:"10px" , backgroundColor:"red"}}> Add Film</button>
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
          {filmList.map((film, index) => (
            <Col md={2} key={index}>
              <FilmCard
                filmImg={film.filmImg}
                title={film.title}
                year={film.year}
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