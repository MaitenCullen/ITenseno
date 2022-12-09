import { useState } from 'react'
import { createContext } from 'react'


export const UserContext = createContext({});


const UserProvider = ({children}) => {

const [ user, setUser] = useState([]);

const [userProfile, setUserProfile] = useState([])

const addUserProfile = (data) => {
    setUserProfile(data)
}

const addUsername = (data) => {
    setUser(data)
}

const [usersPoints, setUsersPoints] = useState([]);

const addPoints = (data) => {
    setUsersPoints(data)
}

/**################### SEARCH ################################# */
const [render, setRender] = useState([]);
const [node, setNode] = useState(false)
const [deno, setDeno] = useState(false)
const [javascript, setJavaScript] = useState(false)
const [java, setJava] = useState(false)
const [tech, setTech] = useState()

const [ stateNode, setStateNode ] = useState()
const [ stateDeno, setStateDeno ] = useState()
const [ stateJavaScript, setStateJavaScript ] = useState()
const [ stateJava, setStateJava ] = useState()

const viewTech = () => {
    if(!node){
        setTech(node)
    }
}

const renderView = (data) => {
    setRender(data)
}

const handleNode = async (data) => {
  setNode(!node)
  //viewTech()
  if(!node){
    setTech(stateNode)
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
    render,
    tech,
    handleNode,
    handleDeno,
    handleJs,
    handleJava,
    node,
    deno,
    javascript,
    java,
    userProfile,
    addUserProfile,
    setStateNode,
    setStateDeno,
    setStateJavaScript,
    setStateJava

}

return (
    <UserContext.Provider value={valueForChildren}>
      {children} 
    </UserContext.Provider>
    );
}

export default UserProvider;
  
