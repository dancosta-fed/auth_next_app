import React, { useState } from "react"
import { Container } from "../../styles/styles"
import { Home } from "../components/Home"

type AppProps = {
  loggedInStatus: string,

  user: {
    email: string
    password: string
    password_confirmation: string
  }
}

export default function App(props: AppProps) {

  return (
    <Container>
      <Home {...props} />
    </Container>
  )
}
