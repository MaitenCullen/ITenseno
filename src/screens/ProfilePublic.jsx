import React, { useState, useEffect } from 'react'
import { CardClass } from '../components/CardClass'
import { CardTechnologie } from '../components/CardTechnologie'
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import star from "../assets/star.png";
import starColor from "../assets/star_color.png";
import { getProfile, votePoint } from '../utilities/servicies';

const ProfilePublic = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { id } = useParams()

    console.log(id);

    const [user, setUser] = useState(null)
    
    useEffect (() => {
        getProfile(id)
        .then((resp) => {
            console.log(resp, "soy la tecnologia")
            setUser(resp.user);
         })
    },[]);


    const [vote, setVote] = useState(5)

    const handleSend = () => {

        const payload = {
            name : user.username,
            VotoNuevo : vote
        }

        votePoint(payload)
        .then((resp) => {
            console.log(resp, "soy la tecnologia")
            //setUser(resp.user);
            getProfile(id)
            .then((resp) => {
                console.log(resp, "soy la tecnologia")
                setUser(resp.user);
                setShow(false);
                setVote(5)
             })
         })

        setShow(false);

    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setVote(e.target.value)
    }

  return (
    <div className='profile-public'>
        <div className="profile-public__header">
            <button>CONTACTAR</button>
            <button onClick={handleShow}>VALORAR</button>
        </div>
        <div className="profile-public__body">
            {user && <div className="profile-public__body__profile">
                <div className="profile-public__body__profile__data">
                    <div className="profile-public__body__profile__data__left">
                        <img className='profile-image' src='https://learnenglish.britishcouncil.org/sites/podcasts/files/2021-10/RS6715_492969113-hig.jpg'/>
                        <div className="profile-public__body__profile__data__star">
                            <img src={user.points.Averange < 1 ? star : starColor} alt="star" />
                            <img src={user.points.Averange < 2 ? star : starColor} alt="star" />
                            <img src={user.points.Averange < 3 ? star : starColor} alt="star" />
                            <img src={user.points.Averange < 4 ? star : starColor} alt="star" />
                            <img src={user.points.Averange < 5 ? star : starColor} alt="star" />
                        </div>
                    </div>
                    <div className="profile-public__body__profile__data__right">
                        <h3>{user.firstName} {user.lastName}</h3>
                        <h3>{user.tech}</h3>
                        <h5>Principales tecnologías</h5>
                        <div className="profile-public__body__profile__data__technologie">
                            <CardTechnologie name={user.tech} level={'Avanzado'}/>
                            {/*<CardTechnologie name={user.tech} level={'Avanzado'}/>
                            <CardTechnologie name={user.tech} level={'Avanzado'}/>*/}
                        </div>
                    </div>
                   
                </div>
                <h5>Acerca de mí</h5>
                <p>{user.aboutMe}</p>
            </div>}
            <div className="profile-public__body__classes">
                <h3>Próximas clases</h3>
                <CardClass name={'Clase A'} level={'NIVEL AVANZADO'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <CardClass name={'Clase A'} level={'NIVEL AVANZADO'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <CardClass name={'Clase A'} level={'NIVEL AVANZADO'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='formModalHeader'>
                    <Modal.Title className='formTitle'>Califique al docente</Modal.Title>
                </Modal.Header>
                <Modal.Body className="formModalBody">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Calificacion</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Del 1 al 5"
                            autoFocus
                            name="vote"
                            value={vote}
                            onChange={(e)=> handleChange(e)}
                        />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='formModalFooter'>
                    <Button variant="primary" onClick={handleSend}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>
    </div>
  )
}

export default ProfilePublic;