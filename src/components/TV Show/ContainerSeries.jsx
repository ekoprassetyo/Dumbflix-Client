import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListSeries from './ListSeries';
import {useState} from 'react';
import {useQuery} from 'react-query'
import API from "../../config/api";

function ContainerSeries() {

  let { data: films } = useQuery('seriesCache', async () => {
    const response = await API.get('/films');
    console.log("response film", response)

    const resultResponse = response.data.data

    const resultFilter = resultResponse.filter((e) => {
      if(e.category_id === 2) {
        return e.category_id === 2
      }
    })
    return resultFilter;
  });

  console.log(films);


  return (
    <div >
      <Container className="my-5 overflow-hidden" id="" >
        <h3 className="text-light">TV Series</h3>
        <Row>
          {films?.map((series, index) => {
            return(
                <Col md={2} key={index}>
                    <ListSeries 
                        id={series.id}
                        seriesImg={series.thumbnailfilm}
                        title={series.title}
                        year={series.year}
                    />
                </Col>
            )
          })}
        </Row>
        </Container>
    </div>
  );
}

export default ContainerSeries;
