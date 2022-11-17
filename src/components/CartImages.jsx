import React from "react";
import image1 from "../assets/Rectangle1.png";
import image2 from "../assets/Rectangle2.png";
import image3 from "../assets/Rectangle3.png";
import image4 from "../assets/Rectangle4.png";
import '../style/components/_cartimages.scss'

export const CartImages = () => {
  return (
    <div id="cart-images">
      <div className="title">
        <h2>Recomendaciones IT de la Semana</h2>
      </div>
      <div className="profiles">
        <div className="cart">
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
        </div>
      </div>
    </div>
  );
};
