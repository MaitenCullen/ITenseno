import React, { useEffect, useState } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import { Navigate, useNavigate } from "react-router-dom";
import image1 from "../assets/Rectangle1.png";
import image2 from "../assets/Rectangle2.png";
import image3 from "../assets/Rectangle3.png";
import image4 from "../assets/Rectangle4.png";
import '../style/components/_cartimages.scss'
import { UserContext } from "../UserContext";
import { getHome, getPoints } from "../utilities/servicies";

import star from "../assets/star.png";
import starColor from "../assets/star_color.png";

export const CartImages = () => {
  let navigate = useNavigate()


  // useEffect( async () => {
  //   await getPoints() 
  //   .then ((resp) => {
  //     console.log(getPoints, "las estrellas")
  //   })
  // })

  const [technologie, setTechnologie] = useState([])

  const [users, setUsers] = useState([])
    
    useEffect (() => {
        getHome()
        .then((resp) => {
            console.log(resp, "soy la tecnologia")
            setUsers(resp.allusers);
         })
    },[]);

  return (
    <div id="cart-images">
      <div className="title">
        <p>Recomendaciones IT de la Semana</p>
        <div className="bar"></div>
      </div>
      <div className="profiles">

        { users.map(user => (
             <div className="cart">
             <div className="image" onClick={() => navigate(`./profile-public/${user._id}`)}>
               <img src={image1} alt="" />
             </div>
             <div className="info">
               <h3>{ user.firstName }</h3>
               <p>{ user.tech }</p>
             </div>
             <div className="starts">
                <img src={user.points.Averange < 1 ? star : starColor} alt="star" />
                <img src={user.points.Averange < 2 ? star : starColor} alt="star" />
                <img src={user.points.Averange < 3 ? star : starColor} alt="star" />
                <img src={user.points.Averange < 4 ? star : starColor} alt="star" />
                <img src={user.points.Averange < 5 ? star : starColor} alt="star" />
             </div>
           </div>
        ))}

      {/* <div className="cart">
          <div className="image">
            <img src={image1} alt="" />
          </div>
          <div className="info">
            <h3>José F.</h3>
            <p>Frontend</p>
          </div>
          <div className="starts">
            estrellas
          </div>
        </div>

        <div className="cart">
          <div className="image">
            <img src={image2} alt="" />
          </div>
          <div className="info">
            <h3>Sofía M.</h3>
            <p>Backend</p>
          </div>
          <div className="starts">
            estrellas
          </div>
        </div>

        <div className="cart">
          <div className="image">
            <img src={image3} alt="" />
          </div>
          <div className="info">
            <h3>Lara C.</h3>
            <p>UI/UX</p>
          </div>
          <div className="starts">
            estrellas
          </div>
        </div>

        <div className="cart">
          <div className="image">
            <img src={image4} alt="" />
          </div>
          <div className="info">
            <h3>Lucas P.</h3>
            <p>FullStack</p>
          </div>
          <div className="starts">
            estrellas
          </div>
        </div>*/}
      </div>
      <div className="more">
        <button className="more-btn" >
          VER MÁS
        </button>
      </div>
    </div>
  );
};
