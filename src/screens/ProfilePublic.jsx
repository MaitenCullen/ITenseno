import React from 'react'
import { CardClass } from '../components/CardClass'
import { CardTechnologie } from '../components/CardTechnologie'

import star from "../assets/star.png";

const ProfilePublic = () => {
  return (
    <div className='profile-public'>
        <div className="profile-public__header">
            <button>CONTACTAR</button>
        </div>
        <div className="profile-public__body">
            <div className="profile-public__body__profile">
                <div className="profile-public__body__profile__data">
                    <div className="profile-public__body__profile__data__left">
                        <img className='profile-image' src='https://learnenglish.britishcouncil.org/sites/podcasts/files/2021-10/RS6715_492969113-hig.jpg'/>
                        <div className="profile-public__body__profile__data__star">
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </div>
                    </div>
                    <div className="profile-public__body__profile__data__right">
                        <h3>Sofía Muro</h3>
                        <h3>Front-End Developer</h3>
                        <h5>Principales tecnologías</h5>
                        <div className="profile-public__body__profile__data__technologie">
                            <CardTechnologie name={'Tecnoogia 1'} level={'Avanzado'}/>
                            <CardTechnologie name={'Tecnoogia 1'} level={'Avanzado'}/>
                            <CardTechnologie name={'Tecnoogia 1'} level={'Avanzado'}/>
                        </div>
                    </div>
                   
                </div>
                <h5>Acerca de mí</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ex quas, error delectus aliquam veniam non facere voluptate quis numquam. Doloremque non facere ex tenetur autem quidem, voluptatem accusantium nam!.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ex quas, error delectus aliquam veniam non facere voluptate quis numquam. Doloremque non facere ex tenetur autem quidem, voluptatem accusantium nam!</p>
            </div>
            <div className="profile-public__body__classes">
                <h3>Próximas clases</h3>
                <CardClass name={'Clase A'} level={'NIVEL AVANZADO'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <CardClass name={'Clase A'} level={'NIVEL AVANZADO'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <CardClass name={'Clase A'} level={'NIVEL AVANZADO'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            </div>
        </div>
    </div>
  )
}

export default ProfilePublic;