import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FilmCard({id,filmImg, title, year}) {
  return (
    <Link to={`/video/${id}`} className="text-decoration-none">
    <Card className="rounded shadow border-0 text-white" style ={{backgroundColor: "black"}}>
      <Card.Img variant="top" src={filmImg} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p className="text-muted">{year}</p>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default FilmCard