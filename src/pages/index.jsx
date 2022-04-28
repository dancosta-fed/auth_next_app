import  { Registration }  from "../components/auth/Registration"
import { Container, Title } from "./styles"
export default function Home() {
  return (
    <Container>
      <Title>Home Page</Title>
      <Registration />
    </Container>
  )
}
