import React from 'react'

const UserContext= React.createContext<unknown | null>( null)

UserContext.displayName = 'UserContext'

export default UserContext