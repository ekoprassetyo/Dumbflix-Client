import React from "react";
import { Card } from "react-bootstrap";
import Square from "../../components/Timbul.module.css"

const MovieList = ({ movieImg, title, year }) => {
  return (
    <Card className="rounded shadow border-0 text-white" style ={{backgroundColor: "black"}}>
      <a href="/video"><Card.Img variant="top" src={movieImg} className={Square.Square}/></a>
      <Card.Body>
        <Card.Title style={{fontSize:"12px"}}>{title}</Card.Title>
        <p className="text-muted">{year}</p>
      </Card.Body>
    </Card>
  );
};

export default MovieList;
