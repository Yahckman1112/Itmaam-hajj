import React from 'react'

interface UserContextProps {
    currentUSer: any | null;
  }
  

const UserContext= React.createContext<UserContextProps  | null>( null)

UserContext.displayName = 'UserContext'

export default UserContext