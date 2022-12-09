import { useState } from 'react'
import { createContext } from 'react'


export const UserContext = createContext({});


const UserProvider = ({children}) => {

const [ user, setUser] = useState([]);

const addUsername = (data) => {
    setUser(data)
}

const [usersPoints, setUsersPoints] = useState([]);

const addPoints = (data) => {
    setUsersPoints(data)
}

/**################### SEARCH ################################# */
const [tech, setTech] = useState([]);
const [node, setNode] = useState(false)
const [deno, setDeno] = useState(false)
const [javascript, setJavaScript] = useState(false)
const [java, setJava] = useState(false)

const renderView = (data) => {
    setTech(data)
}

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


const valueForChildren = {
    addUsername,
    user,
    usersPoints,
    addPoints,
    renderView,
    tech,
    handleNode,
    handleDeno,
    handleJs,
    handleJava,
    node,
    deno,
    javascript,
    java
}

return (
    <UserContext.Provider value={valueForChildren}>
      {children} 
    </UserContext.Provider>
    );
}

export default UserProvider;
  
