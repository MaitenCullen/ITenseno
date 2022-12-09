import { useContext } from "react";

import { Container } from "react-bootstrap";
import "../../style/components/_profileCard.scss";
import { BsStar } from "react-icons/bs";
import image from "../../assets/Rectangle2.png";
import { UserContext } from '../../UserContext'

const ProfilesCards = () => {

  const { tech } = useContext(UserContext)

  console.log(tech)

  return (
    <div className="profiles-cards">
      <div className="card-list">
        {
          tech.map(({username, tech, points}) => (
            <div className="card-item">
            <div className="image-profile">
              <img src={image} alt="" />
            </div>
            <div className="title-card">
              <p className="name">{username}</p>
              <p className="skill">{tech}</p>
            </div>
            <div className="stars">
              {points.Averange}
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
          ))
        }
        
      </div>
    </div>
  );
};

export default ProfilesCards;
