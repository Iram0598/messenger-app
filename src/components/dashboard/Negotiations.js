import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Face } from '../profile/Face';

export const Negotiations = () => {
  return (
<div>
    <div className='d-flex  justify-content-between mt-3 mb-5'>
        <div>
            <h4>Negotiations </h4>
        </div>
        <div>
          <FontAwesomeIcon icon="fa-solid fa-plus" className='ms-5'  />
        </div>
     </div>

     <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass"/></InputGroup.Text>
        <Form.Control
          placeholder="Search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        
      <div>
        <Face/>
      </div>
  


    </div>
  )
}
