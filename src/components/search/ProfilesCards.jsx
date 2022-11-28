import { Container } from "react-bootstrap";
import "../../style/components/_profileCard.scss";
import { BsStar } from "react-icons/bs";
import image from "../../assets/Rectangle2.png";

const ProfilesCards = () => {
  return (
    <div className="profiles-cards">
      <div className="card-list">
        <div className="card-item">
          <div className="image-profile">
            <img src={image} alt="" />
          </div>
          <div className="title-card">
            <p className="name">Sofía Muro</p>
            <p className="skill">Full-Stack Developer</p>
          </div>
          <div className="stars">
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
          </div>
          <div className="btn-card">
            <button>Contactar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilesCards;
