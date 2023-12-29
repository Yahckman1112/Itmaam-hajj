
import { Navigate, Outlet } from 'react-router-dom'
import UserContext from '../../context/UserContext';
import { useContext } from 'react';



function PrivateRoute() {
    
    const user = useContext(UserContext)

  return (
    <div>
        {user?< Outlet/> : < Navigate to={'/admin'} />}
    </div>
  )
}

export default PrivateRoute