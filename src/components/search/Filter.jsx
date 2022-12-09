import { useEffect, useState, useContext } from "react";

import { Container, Stack } from "react-bootstrap";
import { json } from "react-router-dom";
import "../../style/components/_filter.scss";
import { UserContext } from '../../UserContext'

const Filter = () => {

  const { renderView, handleNode, handleDeno, handleJs, handleJava, tech, setStateNode, setStateDeno, setStateJavaScript, setStateJava } = useContext(UserContext)



  useEffect(() => {
    const Data = async () => {
      await fetch("https://itenseno.up.railway.app/")
      .then(res => res.json())
      .then(res => renderView(res.allusers))
    }

    const Node = async () => {
      await fetch('https://itenseno.up.railway.app/',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name: "node.js"})
      })
      .then(res => res.json())
      .then(res => setStateNode(res))
    }

    const Deno = async () => {
      await fetch('https://itenseno.up.railway.app/',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name: "deno"})
      })
      .then(res => res.json())
      .then(res => setStateDeno(res))
    }

    const JavaScript = async () => {
      await fetch('https://itenseno.up.railway.app/',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name: "javascript"})
      })
      .then(res => res.json())
      .then(res => setStateJavaScript(res))
    }

    const Java = async () => {
      await fetch('https://itenseno.up.railway.app/',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name: "java"})
      })
      .then(res => res.json())
      .then(res => setStateJava(res))
    }
    Data()
    Node()
    JavaScript()
    Java()
  }, []);

  console.log(tech)

 

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
