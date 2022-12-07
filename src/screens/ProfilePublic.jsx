import React, { useState, useEffect } from 'react'
import { CardClass } from '../components/CardClass'
import { CardTechnologie } from '../components/CardTechnologie'
import { useParams } from "react-router-dom";

import star from "../assets/star.png";
import starColor from "../assets/star_color.png";
import { getProfile } from '../utilities/servicies';

const ProfilePublic = () => {

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


  return (
    <div className='profile-public'>
        <div className="profile-public__header">
            <button>CONTACTAR</button>
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
    </div>
  )
}

export default ProfilePublic;