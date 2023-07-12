import React, { useState } from 'react'
import CustomInput from '../components/custom-input/CustomInput'
import { Button, Form, Toast } from 'react-bootstrap';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const SignUp = () => {
    const [form, setForm] = useState()

    const inputFields = [
        {
          label: "First Name",
          name: "fName",
          type: "text",
          placeholder: "Sam",
          required: true,
        },
        {
          label: "Last Name",
          name: "lName",
          type: "text",
          placeholder: "Smith",
          required: true,
        },
        {
          label: "Phone",
          name: "phone",
          type: "number",
          placeholder: "049876567",
        },
        {
          label: "Address",
          name: "address",
          type: "text",
          placeholder: "049876567",
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          placeholder: "Smith@email.com",
          required: true,
        },
        {
          label: "Password",
          name: "password",
          type: "password",
          placeholder: "********",
          required: true,
          minLength: "6",
        },
        {
          label: "Confirm Password",
          name: "confirmPassword",
          type: "password",
          placeholder: "********",
          required: true,
        },
      ];
      const handleOnChange =(e) =>{
        const {name, value} = e.target;

        setForm({
            ...form,
            [name] : value,
        }
        )
      }
      const handleOnSubmit =(e) =>{
         e.preventDefault()

         const {confirmPassword, ...rest} = form;

         if(form.password !== confirmPassword){
            Toast.error("Password and confirmPassword must match!")
         } 

         //createNewAdminAuth(rest)
      }
  return (
    <>
    <Header/>
    <main className='main'>
     <Form className="register border p-5 shadow-lg rounded mt-5"
     onSubmit={handleOnSubmit}>
        <h1>New Admin Registration</h1>
        <hr />
        {inputFields.map((item, i)=>(
            <CustomInput key={i} {...item} onChange={handleOnChange}/>
        ))}
        <div className='d-grid'>
            <Button variant='primary' type='submit'>
            Register 
            </Button>
        </div>
   
    </Form>
    </main>
    <Footer/>
    </>
  )
}

export default SignUp
