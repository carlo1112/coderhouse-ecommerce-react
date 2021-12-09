import "./Loading.css"
import { Spinner, Container } from 'react-bootstrap'

// Loading Spinner
const Loading = () => {
  return (
    <div className="mb-2 loading">
      <div>
        <Container className="justify-content-around">
          <div><Spinner
            as="span"
            animation="border"
            role="status"
            aria-hidden="true"
            size="sm"
          />
          </div>
          <div>Cargando...</div>
        </Container>
      </div>
    </div>
  )
}

export default Loading
