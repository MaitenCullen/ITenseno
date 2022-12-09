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

const valueForChildren = {
    addUsername,
    user,
    usersPoints,
    addPoints,
    userProfile,
    addUserProfile,
}

return (
    <UserContext.Provider value={valueForChildren}>
      {children} 
    </UserContext.Provider>
    );
}

export default UserProvider;
  
