import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AboutUs = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="aboutUs">
            <div className="title">
                <p>SOBRE ITenseño</p>
                <div className="bar"></div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad minima at fugit a, dolorum tempore aliquam cumque neque deserunt quaerat quas. Nam minus sed voluptatum aspernatur, debitis error excepturi.</p>
            <button onClick={handleShow}>CONTACTANOS</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='formModalHeader'>
                    <Modal.Title className='formTitle'>Envianos un mensaje</Modal.Title>
                </Modal.Header>
                <Modal.Body className="formModalBody">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                        />
                        </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                    <Form.Label>Su mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='formModalFooter'>
                    <Button variant="primary" onClick={handleClose}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AboutUs; 