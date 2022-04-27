import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, FormWrapper, Input, ErrorMessage } from "../../pages/styles";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

export const Registration = () => {
  // const formInput = {
  //   email: email,
  //   password: password,
  //   password_confirmation: password_confirmation
  // }

  // form validation rules 
  const validationSchema = yup.object().shape({
    name: yup.string()
    .required('Name needs at least 3 characters')
    .min(3),
    
    email: yup.string()
           .email()
           .required(),

    password: yup.string()
        .required('Password must be at least 6 characters')
        .min(6),
    confirmPassword: yup.string()
        .required('must match password')
        .oneOf([yup.ref('password')], 'Passwords must match')      
  })

  const formOptions = { resolver: yupResolver(validationSchema) }


  const { register, handleSubmit, formState:{ errors } } = useForm(formOptions)

  const [data, setData] = useState()

  return (
    <FormWrapper
      action="submit"
      onSubmit={handleSubmit((data) => setData(console.log(data)))}
    >
      <Input 
        {...register("FullName")} 
        placeholder="Full name" 
        type="name" 
      />
      <ErrorMessage>{errors?.name?.message}</ErrorMessage>

      <Input
        {...register("email")}
        placeholder="Your email"
        type="email"
      />
      <ErrorMessage>{errors?.email?.message}</ErrorMessage>

      <Input 
        {...register("password")} 
        placeholder="Password" 
        type="password" 
      />
      <ErrorMessage>{errors?.password?.message}</ErrorMessage>

      <Input
        {...register("password_confirmation")}
        placeholder="Confirm your password"
        type="password"
      />
      <ErrorMessage>{errors?.confirmPassword?.message}</ErrorMessage>

      <Button type="submit"> Register </Button>
    </FormWrapper>
  )
}
