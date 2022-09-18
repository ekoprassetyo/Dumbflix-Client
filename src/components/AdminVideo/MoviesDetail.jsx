import React from 'react'
import mhDetail from '../../assets/images/mhDetail.png'
import mhWatchNow from '../../assets/images/mhWatchNow.png'



function MoviesDetail() {
  return (
    <>
      <div className="d-flex justify-content-center" style={{padding:"65px 0px 3px 0px", backgroundColor:"rgb(0, 0, 0)"}}>
        <iframe
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/_InqQJRqGW4"
          title="Peaky Blinders"
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
            <img src={mhDetail} className="img-fluid rounded-start imgDummyDetail" alt="Series" style={{minHeight:"320px"}} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-2">Money Heist</h5>
              <div className="mb-4 mt-2">
              <small className="text-muted">2017</small> 
              <small className='border border-secondary ms-2 px-1 ms-3 py-1 rounded text-muted tv-s shadow'>TV Series</small>
              </div>
              <p className="card-text pDetailMain" style={{textAlign:"justify"}}>
              Money Heist is an epic centred on a crime family of mixed Irish Catholic and Romani origins based in Birmingham, England, starting in 1919, several months after the end of the First World War in November 1918. A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.
              </p>
            </div>
          </div>
        </div>
      </div>
      

      <div className="cardEpisode">
        <img src={mhWatchNow} alt="episode" className="imgEpisode" style={{Width:"400px"}}></img>
        <p style={{color:"white"}}>Money Heist : Episode 1</p>
        
      </div>
    </div>
    </>
  )
}

export default MoviesDetail