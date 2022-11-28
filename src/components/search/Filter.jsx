import { Container, Stack } from "react-bootstrap";
import "../../style/components/_filter.scss";

const Filter = () => {
  return (
    <Container>
      <Stack gap={3}>
        <div className="tecnology">
          <div className="title-filter">Tecnología</div>
          <div className="options">
            <Stack gap={4}>
              <div className="option">
                <input type="checkbox" />
                <p>TECNOLOGIA 1</p>
              </div>
              <div className="option">
                <input type="checkbox" />
                <p>TECNOLOGIA 2</p>
              </div>
              <div className="option">
                <input type="checkbox" />
                <p>TECNOLOGIA 3</p>
              </div>
              <div className="option">
                <input type="checkbox" />
                <p>TECNOLOGIA 4</p>
              </div>
              <div className="option">
                <input type="checkbox" />
                <p>TECNOLOGIA 5</p>
              </div>
            </Stack>
          </div>
          <div className="more">
            <a href="#">Ver más</a>
          </div>
        </div>
        <div className="nivel">
          <div className="title-filter">Nivel</div>
          <div className="options">
            <Stack gap={4}>
              <div className="option">
                <input type="checkbox" />
                <p>BÁSICO</p>
              </div>
              <div className="option">
                <input type="checkbox" />
                <p>INTERMEDIO</p>
              </div>
              <div className="option">
                <input type="checkbox" />
                <p>AVANZADO</p>
              </div>
            </Stack>
          </div>
        </div>
        <div className="rol">
          <div className="title-filter">Rol</div>
          <div className="options">
            <Stack gap={4}>
              <div className="option">
                <input type="checkbox" />
                <p>FULL-STACK</p>
              </div>
              <div className="option">
                <input type="checkbox" />
                <p>BACK-END</p>
              </div>
              <div className="option">
                <input type="checkbox" />
                <p>FRONT-END</p>
              </div>
            </Stack>
          </div>
        </div>
      </Stack>
    </Container>
  );
};

export default Filter;
