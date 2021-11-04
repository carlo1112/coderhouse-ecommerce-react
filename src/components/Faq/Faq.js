import { Container } from "react-bootstrap"
import "./Faq.css"

const Faq = () => {
  return (
    <div className="faq">
      <Container className="container align-top justify-content-center p-2 text-center ">
        <h2>Preguntas Frecuentes</h2>
        <p><strong>- ¿Usted es el jefe de los minisupers?</strong></p>
        <p>- Si</p>
        <p><strong>- ¿En serio?</strong></p>
        <p>- Si</p>
        <p><strong>- ¿Usted?</strong></p>
        <p>- Así es.</p>
        <h2>Gracias, vuelvas prontos</h2>
      </Container>
    </div>
  )
}

export default Faq
