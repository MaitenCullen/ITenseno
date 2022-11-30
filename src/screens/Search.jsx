import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";

import "../style/components/_search.scss";
import Filter from "../components/search/Filter";
import ProfilesCards from "../components/search/ProfilesCards";

const Search = () => {
  return (
    <div>
      <NavBar />
      <div className="header">
        <div className="title-search">
          <p>Encuentra al mejor tutor</p>
        </div>
      </div>
      <Container className="content">
        <Row>
          <Col className="me-4" md={3}>
            <Filter />
          </Col>
          <Col className="profile ms-4" md={8}>
            <ProfilesCards />
            <div className="btn-more">
              <button>Ver más</button>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer/>
    </div>
  );
};

export default Search;
