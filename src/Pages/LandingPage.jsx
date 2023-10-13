import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
 const navigateByUrl = useNavigate()

 const navigate = ()=>{
  navigateByUrl('/home')
 }
 
  return (
    <>
    
    <Row className='mt-5 mb-5 align-items-center  justify-content-between'>
      <Col></Col>
      <Col lg={4} >
        <h3 className='mb-3'>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nam aliquam numquam earum voluptate inventore unde odit delectus tempore quod veritatis, ut cumque corrupti necessitatibus suscipit beatae ad porro asperiores.</p>
        <button onClick={navigate} className="btn btn-info mt-5 fw-bolder">Get Started <i class="fa-solid fa-arrow-right fa-beat ms-2"></i> </button>
      </Col>
      <Col></Col>
      <Col className='ps-5' lg={6} >
        <img className='img-fluid ms-5 ps-5' src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="landing" />
      </Col>
    </Row>

    <div className="container mt-5 mb-5 d-flex justify-content-center  align-items-center flex-column">
      <h3>Features</h3>
      <div className="cards mt-5 mb-5 d-flex justify-content-between w-100 align-items-center">
      <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://media.giphy.com/media/1bG7bbKHn8Rtm5FOdO/giphy.gif" />
      <Card.Body>
        <Card.Title>Categorise Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://media.giphy.com/media/149mbArhpEpry0/giphy.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>

    <div className="container mt-5 mb-5 d-flex justify-content-between w-100 border p-5 border-secondary rounded align-items-center">
      <div className="content">
        <h3 className='text-warning mb-5'>Simple, Fast and Powerful</h3>
        <h6><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .</h6>
        <h6 className='mt-4'><span className='fs-5 fw-bolder '>Categorise Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .</h6>
        <h6  className='mt-4'><span className='fs-5 fw-bolder'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .</h6>
      </div>
      <div className="video ms-5">
      <iframe width="689" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>

    </>
  )
}

export default LandingPage