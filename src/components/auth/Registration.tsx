import React, { useState } from "react";
import { Button, FormWrapper, Input } from "../../../styles/styles";
import axios from "axios";


export  const Registration = (props: any) => {

  const [formData, setFormData] = useState({
   email: '',
   password: '',
   password_confirmation: '',
   registratioErrors: '',
  })
  
  const handleSubmit = (event:any) => {

    const instance = axios.create({
      withCredentials: true,
      baseURL: 'http://localhost:3001/'
   })
   
   instance.post('/registrations', {
        user: {
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.password_confirmation,
        }
     })
     .then(response => {
      console.log("Registrtion confirmed")
      const userInfo = response.data.status
      
      if ( userInfo === "created") {
        props.handleSuccessfulAuth(response.data)
        
      }
    }).catch(error => {
      console.log("registrations error", error.response)
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

      <Input
        type="password"
        placeholder="Confirm your password"
        name="password_confirmation"
        value={formData.password_confirmation}
        onChange={(e: any) => setFormData({...formData, password_confirmation: e.target.value})}
        required
      />

      <Button 
        type="submit"
        // onClick={() => router.push('/dashboard')}
      > Register 
      </Button>

    </FormWrapper>
  )
}
