import React from 'react'
import { Form, FormGroup  } from 'react-bootstrap'

const CustomInput = ({label, ...rest}) => {
  return (
    <FormGroup className='mb-3'>
    {label && <Form.Label>{label}</Form.Label>}
     <Form.Control  {...rest}/>
    </FormGroup>
  )
}

export default CustomInput
