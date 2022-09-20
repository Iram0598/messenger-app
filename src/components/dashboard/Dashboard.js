import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons'
library.add(fas, far)



export const Dashboard = () => {
  return (
    <div className=''>
        <Nav defaultActiveKey="/home" className="flex-column ">
      <Nav.Link href="/home" className='text-dark'>
      <FontAwesomeIcon icon="fa-solid fa-inbox" className='me-3 ' />Inbox <span className='badge bg-primary rounded-pill ms-5'>14</span></Nav.Link>
      
      <Nav.Link eventKey="link-1" className='text-dark' >
      <FontAwesomeIcon icon="fa-solid fa-stopwatch" className='me-3' />Reminder</Nav.Link>
      <Nav.Link eventKey="link-2" className='text-dark'>
      <FontAwesomeIcon icon="fa-regular fa-calendar-check" className='me-3' />Scheduled </Nav.Link>
      <Nav.Link eventKey="link-3" className='text-dark'> 
      <FontAwesomeIcon icon="fa-regular fa-paper-plane" className='me-3'/>Sent <span className='badge bg-primary rounded-pill ms-5'>14</span></Nav.Link>
      <Nav.Link eventKey="link-4" className='text-dark'>
      <FontAwesomeIcon icon="fa-solid fa-comments" className='me-3'/>Negotiations <span className='badge bg-primary rounded-pill ms-5'>14</span> </Nav.Link>
      <Nav.Link eventKey="link-5" className='text-dark'> 
      <FontAwesomeIcon icon="fa-solid fa-business-time" className='me-3'/>Drafts  </Nav.Link>
      <Nav.Link eventKey="link-6" className='text-dark'> 
      <FontAwesomeIcon icon="fa-solid fa-bucket" className='me-3'/>Bin </Nav.Link>
      <Nav.Link eventKey="link-7" className='text-dark'> 
      <FontAwesomeIcon icon="fa-solid fa-spaghetti-monster-flying" className='me-3'/>Spam</Nav.Link>
       
     
    </Nav>
    </div>
  )
}
