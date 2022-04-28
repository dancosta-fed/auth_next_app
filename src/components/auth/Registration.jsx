import React, { useState } from "react";
import { Button, FormWrapper, Input } from "../../pages/styles";
import axios from "axios";

export  const Registration = () => {
  const [formData, setFormData] = useState({
   email: '',
   password: '',
   password_confirmation: '',
   registratioErrors: '',
  })

  
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [password_confirmation, setPassword_confirmation] = useState('')
  
  const handleSubmit = (event) => {

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
      console.log("registrations response", response)
      if (response.data.status === "created") {
        this.props.handleSuccessfulAuth(response.data)
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
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
      />
      {/* <ErrorMessage>{errors?.email?.message}</ErrorMessage> */}

      <Input 
        type="password"
        placeholder="Password" 
        name="password"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
        required 
      />
      {/* <ErrorMessage>{errors?.password?.message}</ErrorMessage> */}

      <Input
        type="password"
        placeholder="Confirm your password"
        name="password_confirmation"
        value={formData.password_confirmation}
        onChange={(e) => setFormData({...formData, password_confirmation: e.target.value})}
        required
      />
      {/* <ErrorMessage>{errors?.confirmPassword?.message}</ErrorMessage> */}

      <Button type="submit"> Register </Button>
    </FormWrapper>
  )
}
