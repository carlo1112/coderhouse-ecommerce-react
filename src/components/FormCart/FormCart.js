import { useState } from "react"
import { Form, Row, Col } from "react-bootstrap"
import { useAuth } from '../Context/AuthContext'
import './FormCart.css'

const FormCart = ({ onChange }) => {
  const { loggedUser } = useAuth()
  const [userFormData, setUserFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const handleSubmit = (fieldId, e) => {
    const value = e.target.value
    const formData = { ...userFormData, [fieldId]: value }
    const { name, phone, email } = formData
    onChange((Object.keys(formData).every(key => formData[key] !== '') && formData.email === formData.email2 && formData.email.includes("@") && formData.email.includes(".") && !isNaN(parseInt(formData.phone))) ? ({ name, phone, email }) : null)
    setUserFormData(formData)
  }

  return (
    <div className="m-5">
      {
        loggedUser ?
          (<p className="p-2">Comprar como <strong>{loggedUser.email}</strong></p>)
          :
          (<Form className="user-form">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="name" placeholder="Ej: Juan Perez" defaultValue={userFormData.name} onChange={(e) => handleSubmit('name', e)} id="inputName" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" name="phone" placeholder="Ej: 1155443322" defaultValue={userFormData.phone} onChange={(e) => handleSubmit('phone', e)} id="inputPhone" required />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="ejemplo@ejemplo.com" defaultValue={userFormData.email} onChange={(e) => handleSubmit('email', e)} id="inputEmail" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmailConfirm">
                <Form.Label>Repetir Email</Form.Label>
                <Form.Control type="email" name="email2" placeholder="ejemplo@ejemplo.com" defaultValue={userFormData.email2} onChange={(e) => handleSubmit('email2', e)} id="inputEmail2" required />
              </Form.Group>
            </Row>
          </Form>)
      }
    </div >
  )
}

export default FormCart