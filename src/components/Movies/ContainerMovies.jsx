import React, { useContext, useEffect } from 'react'
import { Row, Col, Container, Alert } from "react-bootstrap";
import ListMovies from './ListMovies'
import { useQuery } from 'react-query';
import API from '../../config/api';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

const ContainerMovies = () => {
  let navigate = useNavigate
  const [state] = useContext(UserContext)
  // console.log("ini state film", state);
  
  let { data: films } = useQuery("moviesCache", async () => {
    const response = await API.get("/films");
    console.log("response film", response);

    const resultResponse = response.data.data;

    const resultFilter = resultResponse.filter((e) => {
      if (e.category_id === 1) {
        return e.category_id === 1;
      }
    });

    console.log(resultFilter);
    return resultFilter;
  });


  return (
    <div>
      <Container className="my-5 overflow-hidden" id="">
        <h3 className="text-light">Movies</h3>
        <Row>
          {films?.map((movies, index) => {
            return (
              <Col md={2} key={index}>
                <ListMovies
                  id={movies.id}
                  movieImg={movies.thumbnailfilm}
                  title={movies.title}
                  year={movies.year}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
  };

export default ContainerMovies