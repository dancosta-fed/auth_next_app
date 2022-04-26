import { Container, Button } from "./styles"
import Link from 'next/link'

export default function Dashboard() {
  return (
    <Container>
      <h1>Dashboard</h1>
      {/* {' '} == > add space  */}
      {' '}

      <Link href="/" passHref>
        <Button>Back</Button>
      </Link>
    </Container>
    )
};

