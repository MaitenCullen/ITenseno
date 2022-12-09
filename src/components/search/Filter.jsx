import { useEffect, useState, useContext } from "react";

import { Container, Stack } from "react-bootstrap";
import { json } from "react-router-dom";
import "../../style/components/_filter.scss";
import { filter } from "../../utilities/servicies";
import { UserContext } from '../../UserContext'

const Filter = () => {

  const { renderView, handleNode, handleDeno, handleJs, handleJava } = useContext(UserContext)

  useEffect(() => {
    const Data = async () => {
      await fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(res => renderView(res.allusers))
    }
    Data()
  }, []);


  return (
    <Container>
      <Stack gap={3}>
        <div className="tecnology">
          <div className="title-filter">Tecnología</div>
          <div className="options">
            <Stack gap={4}>
              <div className="option" >
                <input type="checkbox" onChange={() => handleNode({name: "node.js"})} />
                <p>NODE.JS</p>
              </div>
              <div className="option" >
                <input type="checkbox" onChange={() => handleDeno({name: "deno"})} />
                <p>DENO</p>
              </div>
              <div className="option" >
                <input type="checkbox" onChange={() => handleJs({name: "javascript"})} />
                <p>JAVASCRIPT</p>
              </div>
              <div className="option" >
                <input type="checkbox" onChange={() => handleJava({name: "java"})} />
                <p>JAVA</p>
              </div>
            </Stack>
          </div>
          <div className="view-more">
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
