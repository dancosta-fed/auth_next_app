import React, { useState } from "react";
import { Button, FormWrapper, Input } from "../../../styles/styles";
import axios from "axios";


export  const Login = (props: any) => {

  const [formData, setFormData] = useState({
   email: '',
   password: '',
   loginErrors: '',
  })
  
  const handleSubmit = (event:any) => {

    const instance = axios.create({
      withCredentials: true,
      baseURL: 'http://localhost:3001/'
   })
   
   instance.post('/sessions', {
        user: {
          email: formData.email,
          password: formData.password,
        }
     })
     .then(response => {
      console.log("User Logged In", response)
      const userInfo = response.data.logged_in
      
      if ( userInfo === true ) {
        props.handleSuccessfulAuth(response.data)
        
      }
    }).catch(error => {
      console.log("Login error", error.response)
    })

    event.preventDefault()
  }


  return (
    <FormWrapper
      action="submit"
      onSubmit={handleSubmit}
    >

      <Input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={(e: any) => setFormData({...formData, email: e.target.value})}
        required
      />

      <Input 
        type="password"
        placeholder="Password" 
        name="password"
        value={formData.password}
        onChange={(e: any) => setFormData({...formData, password: e.target.value})}
        required 
      />

      <Button 
        type="submit"
        // onClick={() => router.push('/dashboard')}
      > Login 
      </Button>

    </FormWrapper>
  )
}
