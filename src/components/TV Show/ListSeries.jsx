import React from 'react';
import Card from 'react-bootstrap/Card';
import Square from '../../components/Timbul.module.css'
import {Link} from 'react-router-dom'

function ListSeries({id, seriesImg, title, year}) {
  return (
    <Link to={`/video/${id}`} className='text-decoration-none'>
    <Card className='rounded border-0 bg-black text-white' style ={{backgroundColor: "black"}}>
     <a href="/video"><Card.Img variant="top" src={seriesImg} className={Square.Square}/></a>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p className='text-muted'>{year}</p>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default ListSeries;