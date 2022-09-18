import React from 'react'
import Nav from 'react-bootstrap/Nav';

export const Dashboard = () => {
  return (
    <div className='w-25 bg-danger'>
        <Nav defaultActiveKey="/home" className="flex-column text-white ">
      <Nav.Link href="/home">Inbox</Nav.Link>
      <Nav.Link eventKey="link-1">Reminders</Nav.Link>
      <Nav.Link eventKey="link-2">Shceduled</Nav.Link>
      <Nav.Link eventKey="link-3"> Sent </Nav.Link>
      <Nav.Link eventKey="link-4"> Negotiations </Nav.Link>
      <Nav.Link eventKey="link-5"> Drafts </Nav.Link>
      <Nav.Link eventKey="link-6"> Bin </Nav.Link>
      <Nav.Link eventKey="link-7"> Spam</Nav.Link>
       
      
    </Nav>
    </div>
  )
}
