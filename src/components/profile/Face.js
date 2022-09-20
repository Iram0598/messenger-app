import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Face = () => {
  return (
    <div>
    <ListGroup as="ol" >
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto d-flex ">
        
          <div className="fw-bold pt-2"><img style={{ width: 35, height: 35 }} src='https://cdn-icons-png.flaticon.com/128/3132/3132314.png' className='rounded-circle'></img>
          </div>
          <div className='ms-3'><h4>Mustafa</h4><p>Cras justo odiogagasdfgagas</p></div>
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      
    </ListGroup>
    </div>
  )
}
