import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Modals.css"

// FontAwesome is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

// iconSlider is created for the brand icon
const iconSlider = <FontAwesomeIcon icon={faSlidersH} />

const ModalsConfirm = ({ mostrar, text, handleCancel, handleConfirm }) => {
  const [show, setShow] = useState(mostrar);

  const handleClose = () => {
    setShow(false)
    if (handleCancel !== undefined)
      handleCancel()
  };

  const handleConfirmation = () => {
    handleConfirm()
    handleClose()
  };

  // const handleShow = () => setShow(true);

  useEffect(() => {
  }, [show])
  // console.log("show", show)

  return (
    <>
      <Modal show={show} onHide={handleClose}
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {iconSlider}
            Sonido Codeado
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="secondary" onClick={handleConfirmation}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalsConfirm