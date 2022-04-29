import React from "react"
import { Container } from "../../styles/styles"
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
      <Registration {...props} />
    </Container>
  )
}
