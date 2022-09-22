import Card from 'react-bootstrap/Card';
import JumbotronTv from '../../assets/images/money-heist-16.jpg'
import LogoTV from '../../assets/images/logoTv.png'


function JumbotronTvShow() {
    return(
    <div>
        <Card style={{backgroundColor: "black"}}>
        <Card.Img src={JumbotronTv}  alt="Card image" style= {{width:"100%", height:"100vh", padding:"0px", backgroundSize:"cover"}} />
        <Card.ImgOverlay>
          <Card.Title> <img src={LogoTV} alt="" className="ms-5" style={{marginTop: "250px"}}/> </Card.Title>
          <Card.Text className="text-justify mt-3 ms-5 text-light fw-semibold" style={{width: "50%"}} >
          Money Heist is a crime drama on Netflix - originally called La Casa de Papel. Money Heist season 3 has just been released by the streaming service. The plot reads: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan."
          </Card.Text>
          <div className="d-flex align-center">
          <Card.Text className="ms-5 text-light text-center" >2019 </Card.Text>
          <Card.Text className="ms-3 text-center"> <button className="text-light" style={{borderRadius: "8px", backgroundColor: "transparent",borderColor:"white", padding:"2px 10px"}}> TV Series </button> </Card.Text>
          </div>
          <a href="/video"><Card.Text className="ms-5 mt-2"> <button className="text-light fw-bold" style={{ textColor:"white" , backgroundColor: "Red", borderRadius: "8px", borderColor:"transparent" , padding: "10px 50px"}} > WATCH NOW !</button> </Card.Text>
       </a>
           </Card.ImgOverlay>
      </Card>
    </div>
    )
}

export default JumbotronTvShow