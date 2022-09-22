import React from "react";
import { Card } from "react-bootstrap";
import Square from "../../components/Timbul.module.css"
import { Link } from "react-router-dom";

const ListMovies = ({ id,movieImg, title, year }) => {
  return (
    <Link to={`/video/${id}`} className="text-decoration-none">
      <Card className="rounded shadow border-0 text-white" style ={{backgroundColor: "black"}}>
        <a href="/video"><Card.Img variant="top" src={movieImg} className={Square.Square}/></a>
        <Card.Body>
          <Card.Title style={{fontSize:"20px"}}>{title}</Card.Title>
          <p className="text-muted">{year}</p>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ListMovies;
