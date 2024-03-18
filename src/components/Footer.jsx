import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (

    <div style={{  }} className='w-100 d-flex justify-content-center align-items-center flex-column '>
      <div className='w-100 d-flex justify-content-evenly  '>
        
        <div className='website' style={{ width: '400px' }}>
          <FontAwesomeIcon icon={faVideo} style={{ color: 'orange', fontSize: '30px', marginRight: '20px' }} />
          <span style={{ fontSize: '30px', color: 'white' }} >Media Player</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in officia tempore fugit similique laborum consequuntur illum velit nostrum. Doloribus obcaecati iusto optio libero, hic quos inventore ex esse beatae?
          </p>
        </div>
        <div className='links'>
          <h4>Links</h4>
          <p className='mt-3'><Link to={'/'} >Landing Page</Link></p>
          <p><Link to={'/home'} >Home</Link></p>
          <p><Link to={'/watchhistory'}>Watch History</Link></p>
        </div>
        <div className='guides'>
          <h4>Guides</h4>
          <p className='mt-3'>React</p>
          <p>React Bootstrap</p>
          <p>Bootswatch</p>
        </div>
        <div className='contact'>
          <h4>Contact Us</h4>
          <div className='d-flex mt-3' >
            <input className='form-control' type="text" placeholder='enter your email id' />
            <button className='btn btn-warning ms-3 w-50 ' >Subscribe</button>
          </div>
          <div className='w-100 d-flex justify-content-around pt-2 mt-3'>

            <FontAwesomeIcon icon={faInstagram} size='2xl' />
            <FontAwesomeIcon icon={faTwitter} size='2xl' />
            <FontAwesomeIcon icon={faLinkedin} size='2xl' />
            <FontAwesomeIcon icon={faFacebook} size='2xl' />

          </div>
        </div>



      </div>
      <div>Copy right © 2023 Media Player. Built with React.</div>

    </div>

  )
}

export default Footer