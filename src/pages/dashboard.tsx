import { Container, Button, Title } from "../../styles/styles"
import Link from 'next/link'

export default function Dashboard() {
  return (
    <Container>
      <Title>Dashboard</Title>
      {/* {' '} == > add space  */}
      {' '}

      <Link href="/" passHref>
        <Button>Back</Button>
      </Link>
    </Container>
    )
};

