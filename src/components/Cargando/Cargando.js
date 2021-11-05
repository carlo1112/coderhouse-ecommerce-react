
import { Button, Spinner, Container } from 'react-bootstrap'

// Spinner de carga 
const Cargando = () => {
  return (
    <div className="mb-2">
      <Button variant="outline-primary" size="lg" disabled>
        <Container className="justify-content-around ">
          <Spinner
            as="span"
            animation="border"
            role="status"
            aria-hidden="true"
            size="sm"
          />
          Cargando...
        </Container>
      </Button>
    </div>
  )
}

export default Cargando
