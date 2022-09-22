import React, { useContext } from 'react'
import mhDetail from '../../assets/images/mhDetail.png'
import mhWatchNow from '../../assets/images/mhWatchNow.png'
import { UserContext } from '../../context/userContext'
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import API from '../../config/api';
import { useState } from 'react';


function MoviesDetail() {

  const [state] = useContext(UserContext)
  const [isLogin, setIsLogin] = useState(false)

  const {id} = useParams()

  let {data : films} = useQuery('detailCache', async () => {
    const response = await API.get('/film/' + id);
    return response.data.data
  })

  return (
    <>
      <div className="d-flex justify-content-center" style={{padding:"65px 0px 3px 0px", backgroundColor:"rgb(0, 0, 0)"}}>
        <iframe
          width="1000"
          height="500"
          src={films?.linkfilm}
          title=""
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className='d-flex justify-content-end mt-5' style={{marginRight:"100px" }}>
        <button className="text-light fw-semibold" style={{padding:"5px 50px" , borderRadius:"10px" , backgroundColor:"red"}}> Add Episode</button>
      </div>

    <div className="d-flex justify-content-start sectionMain mt-5 flex-column flex-md-row" style={{padding:"0px 0px 0px 210px"}}>
      <div className="card mb-3 bg-black text-white" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={films?.thumbnailfilm} className="img-fluid rounded-start imgDummyDetail" alt="Series" style={{minHeight:"320px"}} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-2">{films?.title}</h5>
              <div className="mb-4 mt-2">
              <small className="text-muted">{films?.year}</small> 
              <small className='border border-secondary ms-2 px-1 ms-3 py-1 rounded text-muted tv-s shadow'>TV Series</small>
              </div>
              <p className="card-text pDetailMain" style={{textAlign:"justify"}}>
              {films?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      

      <div className="cardEpisode">
        <img src={mhWatchNow} alt="episode" className="imgEpisode" style={{Width:"400px"}}></img>
        <p style={{color:"white"}}>{films?.title}</p>
        
      </div>
    </div>
    </>
  )
}

export default MoviesDetail