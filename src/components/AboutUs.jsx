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
            <p>Somos un grupo de personas que creemos en el aprendizaje constante y acompañado. Desde una pedagogía horizontal donde todos aprendemos en conjunto y con apoyos. Por ello asumimos el compromiso de brindar un espacio para conocer, practicar y poner en duda los saberes. En ITenseño encontraras senior y juniors dando clases, como así también tomandolas. La apuesta es que todos podamos aprender de la práctica de enseñar y del conocer cosas nuevas de manera gratuita y accesible a todos.</p>
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