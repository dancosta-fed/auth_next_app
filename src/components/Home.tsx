import { Container, Title } from "../../styles/styles"
import { LoggedStatus } from "../../styles/status"

type AppProps = {
  loggedInStatus: string,

  user: {
    email: string
    password: string
    password_confirmation: string
  }
}

export const Home = (props: AppProps) =>{

  return (
    <Container>
      <Title>Home Page</Title>
      <LoggedStatus>
        <h1>Status: {props.loggedInStatus}</h1>
      </LoggedStatus>
    </Container>
  )
}
