import Card from 'react-bootstrap/Card';
import TvPicture from '../../assets/images/avengers-end.jpg'
import Witcher from '../../assets/images/home-witcher.png'
import Home from '../../assets/images/home.png'
import Square from "../../components/Timbul.module.css"

function JumbotronMovies() {
    return(
    <div>
        <Card style={{backgroundColor: "black"}}>
        <Card.Img src={TvPicture}  alt="Card image" style= {{width:"100%", height:"100vh", padding:"0px", backgroundSize:"cover"}} />
        <Card.ImgOverlay>
          <Card.Title><p className="ms-5 fw-bold" style={{marginTop: "400px", fontSize:"50px", fontFamily:"revert-layer" ,color:"white"}}>AVENGERS : ENDGAME</p></Card.Title>
          <Card.Text className="text-justify ms-5 text-light fw-semibold" >
          After Thanos, an intergalactic warlord, disintegrates half of the universe<br></br>the Avengers must reunite and assemble again to reinvigorate their <br />trounced allies and restore balance.
          </Card.Text>
          <div className="d-flex align-center justify-content-start">
          <Card.Text className="ms-5 mt-2 text-light text-center" >2019 </Card.Text>
          <Card.Text className="ms-3 mt-2 text-center"> <button className={Square.button}> Movies </button> </Card.Text>
          <a><Card.Text className="ms-5"> <button className="text-light fw-bold" style={{ textColor:"white" , backgroundColor: "Red", borderRadius: "8px", padding: "10px 50px", border:"none"}} > WATCH NOW !</button> </Card.Text>
          </a>
          </div>
          </Card.ImgOverlay>
      </Card>
    </div>

    )
}

export default JumbotronMovies