import { useEffect, useState } from "react";

import { Container, Stack } from "react-bootstrap";
import { json } from "react-router-dom";
import "../../style/components/_filter.scss";
import { filter } from "../../utilities/servicies";

const Filter = () => {

  const [tech, setTech] = useState([]);
  useEffect(() => {
    const Data = async () => {
      await fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(res => setTech(res.allusers))
    }
    Data()
  }, []);

  console.log(tech)


  const [node, setNode] = useState(false)
  const [deno, setDeno] = useState(false)
  const [javascript, setJavaScript] = useState(false)
  const [java, setJava] = useState(false)

  const handleNode = async (data) => {
    setNode(!node)
    if(!node){
      await fetch('http://localhost:3000/',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => console.log(res))
    }
  }
  const handleDeno = async (data) => {
    setDeno(!deno)
    if(!deno){
      await fetch('http://localhost:3000/',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => console.log(res))
    }
  }
  const handleJs = async (data) => {
    setJavaScript(!javascript)
    if(!javascript){
      await fetch('http://localhost:3000/',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => console.log(res))
    }
  }
  const handleJava = async (data) => {
    setJava(!java)
    if(!java){
      await fetch('http://localhost:3000/',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => console.log(res))
    }
  }

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
