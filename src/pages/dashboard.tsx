import { Container, Button, Title } from "../../styles/styles"
import Link from 'next/link'
import { LoggedStatus } from "../../styles/status"

type AppProps = {
  loggedInStatus: string,
  user: {
    email: string
    password: string
    password_confirmation: string
  }
}

export default function Dashboard(props: AppProps) {
  return (
    <Container>
      <Title>Dashboard</Title>
      <LoggedStatus>
        <h1>Status: {props.loggedInStatus}</h1>
      </LoggedStatus>

      {/* {' '} == > add space  */}
      {' '}
      <Link href="/" passHref>
        <Button>Back</Button>
      </Link>
    </Container>
    )
};

