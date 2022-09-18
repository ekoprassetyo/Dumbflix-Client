import React from 'react'
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ListTvShow from './ListTvShow'
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

const ContainerTvShow = () => {
    const [movieLists, setMovieLists] = useState([
      {
        movieImg: TheGodFather,
        title: "The GodFather",
        year: 1972,
      },
      {
        movieImg: Batman,
        title: "The Dark Knight",
        year: 2008,
      },
      {
        movieImg: Avengers,
        title: "Avengers: Endgame",
        year: 2019,
      },
      {
        movieImg: JokerMv,
        title: "Joker",
        year: 2019,
      },
      {
        movieImg: Parasite,
        title: "Gisaengchung",
        year: 2019,
      },
      {
        movieImg: Chernobly,
        title: "Chernobly",
        year: 2019,
      },
      {
      movieImg: ST,
        title: "Serigala Terakhir",
        year: 2009,
      },
      {
        movieImg: Grave,
        title: "Grave of the Fireflies",
        year: 1988,
      },
      {
        movieImg: Totoro,
        title: "My Neighbor Totoro",
        year: 1988,
      },
      {
        movieImg: QuietPlace,
        title: "Money Heist",
        year: 2019,
      },
      {
        movieImg: Frozen,
        title: "Frozen II",
        year: 2020,
      },
      {
        movieImg: Suicide,
        title: "Suicide Squad",
        year: 2016,
      },
    ]);
  
    return (
      <Container className="my-5 overflow-hidden" style={{backgroundColor: "black"}}>
        <h3 className="text-start text-white fw-bold mb-3">TV Shows</h3>
        <Row>
          {movieLists.map((movie, index) => (
            <Col md={2} key={index}>
              <ListTvShow
                movieImg={movie.movieImg}
                title={movie.title}
                year={movie.year}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

export default ContainerTvShow