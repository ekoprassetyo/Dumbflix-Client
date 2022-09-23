import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react'
import FilmCard from './FilmCard';
import API from '../../config/api';
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from 'react-query';
import ContainerMovies from '../Movies/ContainerMovies';
import ContainerSeries from '../TV Show/ContainerSeries';

function ListFilm() {

    let { data: films } = useQuery("filmsCache", async () => {
        const response = await API.get("/films");
        return response.data.data;
    })

    const [category, setCategory] = useState("TV Series")


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
                    <select value={category} onChange={(e) => setCategory(() => e.target.value)} className='bg-black text-white' style={{borderRadius:"8px"}} name="list">
                        <option disabled selected >Category</option>
                        <option>TV Series</option>
                        <option>Movie</option>
                     </select>
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
        {category == "TV Series" ? 
        ( <ContainerSeries /> ):(<ContainerMovies />)}
      </div>
    </div>    
    </>

    
  )
}

export default ListFilm