
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {
    const user= true

  return (
    <div>
        {user?< Outlet/> : < Navigate to={'/admin'} />}
    </div>
  )
}

export default PrivateRoute