import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
const navigate = useNavigate()

  return (
    <>
      <Row className='d-flex justify-content-center align-items-center mt-5 mb-5'>

        <Col lg={1} ></Col>
        <Col lg={5} >
          <h3>Welcome to <span className='text-warning'>Media Player</span> </h3>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam aliquam dolor delectus nihil commodi modi, aspernatur magnam cupiditate voluptatum expedita dolores a amet nobis ipsum vel perferendis odit quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur nisi deserunt officia quisquam ullam est repellat aliquam sunt recusandae, explicabo laboriosam libero enim asperiores vitae autem fuga quis quasi?
          </p>
          <button onClick={()=>navigate('/home')} className='btn btn-warning mt-5' ><i className="fa-solid fa-arrow-right"></i> Get Started</button>
        </Col>
        <Col lg={1}></Col>
        <Col lg={5}>
          <img src="https://media1.tenor.com/m/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
        </Col>


      </Row>

      <div className="container d-flex justify-content-center align-items-center mt-5 flex-column">
        <h3>Features</h3>

        <div className='d-flex justify-content-center align-items-center mt-5 '>
          <Card className='p-4 m-3' style={{ width: '22rem' }}>
            <Card.Img style={{ width: '100%', height: '300px' }} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title className='text-center' >Managing Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-4 m-3' style={{ width: '22rem' }}>
            <Card.Img style={{ width: '100%', height: '300px' }} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title className='text-center'>Categorized Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-4 m-3' style={{ width: '22rem' }}>
            <Card.Img style={{ width: '100%', height: '300px' }} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
            <Card.Body>
              <Card.Title className='text-center' >Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>
        </div>

      </div>


      <div className='w-100 d-flex justify-content-center align-items-center mt-5'>
        <div className='row w-100'>
          <div className="col-md-1"></div>
          <div className='col-md-10'>
            <div className='row border rounded border-2 w-100 p-5' style={{ borderColor: 'white' }} >
              <div className='col-md-5'>
                <h3 style={{ fontSize: '35px', fontWeight: '600' }} className='text-warning'>simple fast and  powerful</h3>
                <h6 className='mt-5'><span style={{ fontSize: '28px' }}>play everything</span> adipisicing elit. Velit iusto placeat facere odio, magnam et cumque ex perferendis soluta obcaecati ab vitae magni unde, rerum, molestias tempore dolorum nostrum molestiae.</h6>
                <h6 className='mt-4'><span style={{ fontSize: '28px' }}>play everything</span> adipisicing elit. Velit iusto placeat facere odio, magnam et cumque ex perferendis soluta obcaecati ab vitae magni unde, rerum, molestias tempore dolorum nostrum molestiae.</h6>
                <h6 className='mt-4'><span style={{ fontSize: '28px' }}>play everything</span> adipisicing elit. Velit iusto placeat facere odio, magnam et cumque ex perferendis soluta obcaecati ab vitae magni unde, rerum, molestias tempore dolorum nostrum molestiae.</h6>
              </div>
              <div className='col-md-1'></div>
              <div className='col-md-6'>
                <iframe width="695" height="391" src="https://www.youtube.com/embed/oRGhqUjWF6U" title="ANIMAL: Abrar’s Entry - Jamal Kudu (Lyrical Video) | Bobby Deol | Sandeep Vanga | Bhushan Kumar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>

          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  )
}

export default LandingPage

