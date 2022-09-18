import React from 'react'
import {Card} from 'react-bootstrap'

function FilmCard({filmImg, title, year}) {
  return (
    <Card className="rounded shadow border-0 text-white" style ={{backgroundColor: "black"}}>
      <Card.Img variant="top" src={filmImg} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p className="text-muted">{year}</p>
      </Card.Body>
    </Card>
  )
}

export default FilmCard