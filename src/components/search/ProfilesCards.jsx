import { useContext } from "react";
import Start from "../Start";
import { Container } from "react-bootstrap";
import "../../style/components/_profileCard.scss";
import { BsStar } from "react-icons/bs";
import image from "../../assets/Rectangle2.png";
import { UserContext } from '../../UserContext'

const ProfilesCards = () => {

  const { render, tech } = useContext(UserContext)

  console.log(tech)

  return (
    <div className="profiles-cards">
      <div className="card-list">
        {
          render.map(({_id, username, tech, points}) => (
            <div className="card-item" key={_id}>
            <div className="image-profile">
              <img src={image} alt="" />
            </div>
            <div className="title-card">
              <p className="name">{username}</p>
              <p className="skill">{tech}</p>
            </div>
            <Start avrg={points.Averange}/>
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
