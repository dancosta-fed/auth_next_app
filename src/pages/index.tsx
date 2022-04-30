import React from "react"
import { Container, H2 } from "../../styles/styles"
import { Login } from "../components/auth/Login"
import { Registration } from "../components/auth/Registration"
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

      <H2>=== Login ===</H2>
      <Login {...props} />

      <H2>=== Or Sign up below ===</H2>
      <Registration {...props} />
    </Container>
  )
}
