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

const valueForChildren = {
    addUsername,
    user,
    usersPoints,
    addPoints,
}

return (
    <UserContext.Provider value={valueForChildren}>
      {children} 
    </UserContext.Provider>
    );
}

export default UserProvider;
  
